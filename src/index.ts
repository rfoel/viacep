import { Address, State } from './models'
import { Request } from './request'

export * from './models'

export class ViaCEP {
  private readonly request: Request

  constructor() {
    this.request = new Request()
  }

  async cep(cep: string): Promise<Address>
  async cep({
    state,
    city,
    street,
  }: {
    state: State
    city: string
    street: string
  }): Promise<Address[]>
  async cep(
    params:
      | string
      | {
          state: State
          city: string
          street: string
        },
  ): Promise<Address | Address[]> {
    if (typeof params === 'string') {
      return await this.request.makeApiRequest<Address>(`${params}`)
    }
    return await this.request.makeApiRequest<Address[]>(
      encodeURI(`${params.state}/${params.city}/${params.street}`),
    )
  }
}
