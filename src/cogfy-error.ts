/* eslint-disable @typescript-eslint/no-explicit-any */
export class CogfyError extends Error {
  status?: number
  data?: any

  constructor (
    message?: string,
    status?: number,
    data?: any
  ) {
    super(message)
    this.status = status
    this.data = data
  }
}
