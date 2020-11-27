import { createKerno, KernoOptions, TKerno } from '../packages/kerno/src'
import { Vorto, VortoMethods } from '../packages/vorto/src'

jest.setTimeout(30000)

// Shared tests

import documentationExamples from './shared/documentationExamples'

type PluginMap = TKerno<VortoMethods>

let agent: TKerno<PluginMap>

const setup = async (options?: KernoOptions): Promise<boolean> => {
  agent = createKerno<PluginMap>({
    ...options,
    plugins: [new Vorto()],
  })
  return true
}

const tearDown = async (): Promise<boolean> => {
  return true
}

const getAgent = () => agent

const testContext = { getAgent, setup, tearDown }

describe('Local integration tests', () => {
  documentationExamples(testContext)
})
