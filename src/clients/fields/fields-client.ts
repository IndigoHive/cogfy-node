import { AxiosInstance } from 'axios'
import { CreateFieldCommand, CreateFieldResult, ListFieldsResult } from './types'

export class FieldsClient {
  protected axios: AxiosInstance

  constructor (options: { axios: AxiosInstance }) {
    this.axios = options.axios
  }

  /**
   * Calls the `POST https://api.cogfy.com/collections/:collectionId/fields` endpoint
   * @param collectionId The collection id.
   * @param data The request body.
   * @param options The request options.
   * @returns The response body.
   */
  async create (
    collectionId: string,
    data: CreateFieldCommand,
    options?: { signal?: AbortSignal }
  ): Promise<CreateFieldResult> {
    const response = await this.axios.post<CreateFieldResult>(
      `/collections/${collectionId}/fields`,
      data,
      { signal: options?.signal }
    )

    return response.data
  }

  /**
   * Calls the `GET https://api.cogfy.com/collections/:collectionId/fields` endpoint
   * @param collectionId The collection id.
   * @param params The request query parameters.
   * @param options The request options.
   */
  async list (
    collectionId: string,
    options?: { signal?: AbortSignal }
  ): Promise<ListFieldsResult> {
    const response = await this.axios.get<ListFieldsResult>(
      `/collections/${collectionId}/fields`,
      { signal: options?.signal }
    )

    return response.data
  }
}
