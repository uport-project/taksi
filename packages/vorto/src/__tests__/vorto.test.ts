import { createKerno, KernoPlugin } from '@taksi/kerno'
import { Vorto, VortoMethods } from '../vorto'

describe('vorto', () => {
  it('should return string', async () => {
    const plugin: KernoPlugin = new Vorto()
    const agent = createKerno<VortoMethods>({
      plugins: [plugin],
    })

    const result = await agent.senduVorton({ vortoj: ['foo', 'bar'] })
    expect(result).toBe('foo.bar')
  })
})
