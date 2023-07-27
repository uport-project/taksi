import { Kerno } from '../kerno'
import { KernoPlugin } from '../types/KernoPlugin'

import { jest } from '@jest/globals'

describe('kerno', () => {
  it('should use plugin methods', async () => {
    const plugin: KernoPlugin = {
      methods: {
        doSomething: jest.fn(() => Promise.resolve(void 0)),
      },
    }
    const agent = new Kerno({
      plugins: [plugin],
    })

    //@ts-ignore
    await agent.doSomething({ foo: 'baz' })
    expect(plugin.methods?.doSomething).toBeCalledWith({ foo: 'baz' }, { agent })
    await agent.execute('doSomething', { foo: 'bar' })
    expect(plugin.methods?.doSomething).toBeCalledWith({ foo: 'bar' }, { agent })
  })
})
