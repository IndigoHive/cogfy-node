import { AxiosInstance } from 'axios'
import {
  CreateRecordCommand,
  CreateRecordResult,
  ListRecordsQuery,
  ListRecordsResult,
  UpdateRecordCommand,
  UpdateRecordResult
} from './types'

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
   * Calls the `DELETE https://api.cogfy.com/collections/:collectionId/records` endpoint
   * @param collectionId The collection id to delete a record.
   * @param recordId The id of the record to be deleted
   * @param options The request options.
   * @returns The response body.
   */
  async delete (
    collectionId: string,
    recordId: string,
    options?: { signal?: AbortSignal }
  ): Promise<void> {
    await this.axios.delete(
      `/collections/${collectionId}/records/${recordId}`,
      { signal: options?.signal }
    )
  }

  /**
   * Calls the `GET https://api.cogfy.com/collections/:collectionId/records` endpoint
   * @param collectionId The collection id to get records.
   * @param params The request query parameters.
   * @param options The request options.
   * @returns The response body.
   */
  async list (
    collectionId: string,
    params: ListRecordsQuery = {},
    options?: { signal?: AbortSignal }
  ): Promise<ListRecordsResult> {
    const response = await this.axios.get(
      `/collections/${collectionId}/records`,
      { params, signal: options?.signal }
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
  async update (
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
