import { TKerno } from '../../packages/kerno/src/types/KernoAgent'
import { VortoMethods } from '../../packages/vorto/src/vorto'

type ConfiguredAgent = TKerno<VortoMethods>

export default (testContext: {
  getAgent: () => ConfiguredAgent
  setup: () => Promise<boolean>
  tearDown: () => Promise<boolean>
}) => {
  describe('Documentation examples', () => {
    let agent: ConfiguredAgent

    beforeAll(() => {
      testContext.setup()
      agent = testContext.getAgent()
    })
    afterAll(testContext.tearDown)

    //DO NOT EDIT MANUALLY START
    // nop
    //DO NOT EDIT MANUALLY END
  })
}
