import { AxiosInstance } from 'axios'
import { CreateRecordCommand, CreateRecordResult, UpdateRecordCommand, UpdateRecordResult } from './types'

export class RecordsClient {
  protected axios: AxiosInstance

  constructor(options: { axios: AxiosInstance }) {
    this.axios = options.axios
  }

  /**
   * Calls the `POST https://api.cogfy.com/collections/:collectionId/records` endpoint
   * @param collectionId The collection id to create the new record in.
   * @param data The request body.
   * @param options The request options.
   * @returns The response body.
   */
  async create (
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

  /**
   * Calls the `PATCH https://api.cogfy.com/collections/:collectionId/records/:recordId` endpoint
   * @param collectionId The collection id to update a record.
   * @param recordId The id of the record to be updated
   * @param data The request body.
   * @param options The request options.
   * @returns The response body.
   */
  async updateById (
    collectionId: string,
    recordId: string,
    data: UpdateRecordCommand,
    options?: { signal?: AbortSignal }
  ): Promise<UpdateRecordResult> {
    const response = await this.axios.patch(
      `/collections/${collectionId}/records/${recordId}`,
      data,
      { signal: options?.signal }
    )

    return response.data
  }

}
