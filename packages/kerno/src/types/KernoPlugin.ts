/**
 * Core plugin method interface
 * @public
 */
export interface PluginMethod {
  (args: any, context: any): Promise<any>
}

/**
 * Plugin method map interface
 * @public
 */
export interface PluginMethodMap extends Record<string, PluginMethod> {}

/**
 * Agent plugin interface
 * @public
 */
export interface KernoPlugin {
  readonly methods?: PluginMethodMap
}
