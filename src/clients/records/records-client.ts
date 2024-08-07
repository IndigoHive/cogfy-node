import { AxiosInstance } from 'axios'
import { CreateRecordCommand, CreateRecordResult } from './types'

export class RecordsClient {
  protected axios: AxiosInstance

  constructor(options: { axios: AxiosInstance }) {
    this.axios = options.axios
  }

  /**
   * Calls the `POST https://api.cogfy.com/collections/:collectionId/records` endpoint
   * @param collectionId The collection id to create the new chat in.
   * @param data The request body.
   * @param options The request options.
   * @returns The response body.
   */
  async create(
    collectionId: string,
    data: CreateRecordCommand,
    options?: { signal?: AbortSignal }
  ): Promise<CreateRecordResult> {
    const response = await this.axios.post<CreateRecordResult>(
      `/collections/${collectionId}/records`,
      data,
      { signal: options?.signal }
    )

    return response.data
  }
}
