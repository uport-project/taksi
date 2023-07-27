import { PluginMethod, PluginMethodMap } from './KernoPlugin'

interface RemoveContext<T extends PluginMethod> {
  (args?: Parameters<T>[0] | undefined): ReturnType<T>
}

/**
 * Agent that can execute methods
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IKerno {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  execute: <A = any, R = any>(method: string, args: A) => Promise<R>
}

/**
 * Utility type for constructing agent type that has a list of available methods
 * @public
 */
export type TKerno<T extends PluginMethodMap> = {
  [P in keyof T]: RemoveContext<T[P]>
} & IKerno
