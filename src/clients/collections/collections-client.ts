import { AxiosInstance } from 'axios'
import { FindCollectionResult, ListCollectionsQuery, ListCollectionsResult } from './types'

export class CollectionsClient {
  protected axios: AxiosInstance

  constructor (options: { axios: AxiosInstance }) {
    this.axios = options.axios
  }

  /**
   * Calls the `GET https://api.cogfy.com/collections/:collectionId` endpoint
   * @param collectionId The collection id.
   * @param options The request options.
   * @returns The response body.
   */
  async find (
    collectionId: string,
    options?: { signal?: AbortSignal }
  ): Promise<FindCollectionResult> {
    const response = await this.axios.get<FindCollectionResult>(
      `/collections/${collectionId}`,
      { signal: options?.signal }
    )

    return response.data
  }

  /**
   * Calls the `GET https://api.cogfy.com/collections` endpoint.
   * @param params The request query parameters.
   * @param options The request options.
   * @returns The response body.
   */
  async list (
    params: ListCollectionsQuery = {},
    options?: { signal?: AbortSignal }
  ): Promise<ListCollectionsResult> {
    const response = await this.axios.get<ListCollectionsResult>(
      '/collections',
      { params, signal: options?.signal }
    )

    return response.data
  }
}
