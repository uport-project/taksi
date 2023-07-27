import { TKerno } from '../../packages/kerno/src'
import { VortoMethods } from '../../packages/vorto/src'

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

    it('vorto-VortoMethods-senduVorton example', async () => {
      const frazo = await agent.senduVorton({ vortoj: ['foo', 'bar'] })
      expect(frazo).toEqual('foo bar')
    })

    //DO NOT EDIT MANUALLY END
  })
}
