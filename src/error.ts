export class ViaCEPError {
  status: number
  statusText: string

  constructor(error: Response) {
    this.status = error.status
    this.statusText = error.statusText
  }
}
