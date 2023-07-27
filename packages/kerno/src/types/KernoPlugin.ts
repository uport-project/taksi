/**
 * Core plugin method interface
 * @public
 */
export interface PluginMethod {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (args: any, context: any): Promise<any>
}

/**
 * Plugin method map interface
 * @public
 */
export type PluginMethodMap = Record<string, PluginMethod>

/**
 * Kerno plugin interface
 * @public
 */
export interface KernoPlugin {
  readonly methods?: PluginMethodMap
}
