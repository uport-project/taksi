import { KernoPlugin, PluginMethodMap } from '@taksi/kerno'

/**
 * DID Comm plugin interface for {@link @taksi/kerno#Kerno}
 *
 * @beta
 */
export interface VortoMethods extends PluginMethodMap {
  /**
   * This is used to create a message by concatenating words
   *
   * @example
   * ```typescript
   * const frazo = await agent.senduVorton({ vortoj: ['foo', 'bar'] })
   * expect(frazo).toEqual('foo bar')
   * ```
   *
   * @param args - Arguments necessary for sending a DIDComm message
   * @param context - This reserved param is automatically added and handled by the framework, *do not override*
   * @public
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  senduVorton(args: { vortoj: string[] }, context?: any): Promise<string>
}

/**
 * Vorto plugin for {@link @taksi/kerno#Kerno}
 * It joins words together!!
 * @remarks Be advised that this spec is still not final and that this protocol may need to change.
 *
 * @beta
 */
export class Vorto implements KernoPlugin {
  /** Plugin methods */
  readonly methods: VortoMethods

  constructor() {
    this.methods = {
      senduVorton: this.senduVorton,
    }
  }

  /** {@inheritdoc VortoMethods.senduVorton} */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  async senduVorton(args: { vortoj: string[] }, context?: any): Promise<string> {
    return args.vortoj.join(' ')
  }
}
