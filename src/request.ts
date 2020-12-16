import fetch, { Response as FetchResponse } from 'node-fetch'

import { ViaCEPError } from './error'

export class Request {
  request: any

  public async makeApiRequest<Response>(uri: string): Promise<Response> {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${uri}/json`, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      })

      if (!response.ok) {
        throw response
      }

      const data = await response.json()

      if (data.erro) {
        throw new FetchResponse(null, {
          status: 404,
          statusText: 'A pesquisa não retornou dados',
        })
      }

      return data
    } catch (error) {
      switch (error.status) {
        case 400:
        case 404:
          throw new ViaCEPError(error)
        default:
          throw error
      }
    }
  }
}
