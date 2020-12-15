import { IKerno, TKerno } from './types/KernoAgent'
import { KernoPlugin, PluginMethodMap } from './types/KernoPlugin'

/**
 * Core config options
 *
 * @public
 */
export interface KernoOptions {
  /**
   * Array of plugins installed on this core
   */
  plugins?: KernoPlugin[]
}

/**
 * Core class.
 *
 * Main entry point into the API
 * //nop
 *
 * @public
 */
export class Kerno implements IKerno {
  private plugins: KernoPlugin[]
  private methods: PluginMethodMap = {}
  private protectedMethods = ['execute', 'emit']
  private context: Record<string, unknown> = {}

  /**
   * Constructs a new instance of the `Kerno` class
   *
   * @param options - Configuration options
   * @public
   */
  constructor(options?: KernoOptions) {
    this.plugins = [...(options?.plugins || [])]
    if (options?.plugins) {
      for (const plugin of options.plugins) {
        this.methods = {
          ...this.methods,
          ...plugin?.methods,
        }
      }
    }

    for (const method of Object.keys(this.methods)) {
      if (!this.protectedMethods.includes(method)) {
        //@ts-ignore: exposing the plugin methods directly as agent methods
        this[method] = async (args: any) => this.execute(method, args)
      }
    }
  }

  /**
   * Executes a plugin method.
   *
   * @param method - method name
   * @param args - arguments object
   * @example
   * ```typescript
   * await agent.execute('foo', { bar: 'baz' })
   *
   * // is equivalent to:
   * await agent.foo({ bar: 'baz' })
   * ```
   * @public
   */
  async execute<P = any, R = any>(method: string, args: P): Promise<R> {
    if (!this.methods[method]) throw Error('Method not available: ' + method)
    const _args = args || {}
    const result = await this.methods[method](_args, {
      ...this.context,
      agent: this,
    })
    return result
  }
}

/**
 * Helper function to create a new instance of the {@link Kerno} class with correct type
 *
 * @remarks
 * Use {@link TAgent} to configure agent type (list of available methods) for autocomplete in IDE
 *
 * @param options - Agent configuration options
 * @returns configured agent
 * @public
 */
export function createKerno<T extends PluginMethodMap>(options: KernoOptions): TKerno<T> {
  //@ts-ignore
  return new Kerno(options)
}
