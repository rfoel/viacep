import * as nock from 'nock'
import { ViaCEP } from '../src'
import { ViaCEPError } from '../src/error'

const scope = nock('https://viacep.com.br/ws/')

let viacep: ViaCEP

beforeEach(() => {
  viacep = new ViaCEP()
})

it('should throw bad request error', async () => {
  scope.get('/000/json').query(true).reply(404, {
    status: 400,
    statusText: 'Bad Request',
  })
  try {
    await viacep.cep('000')
  } catch (error) {
    expect(error).toEqual(new ViaCEPError(error))
  }
})
