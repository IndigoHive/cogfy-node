import { AxiosInstance } from 'axios'
import { GetCollectionByIdResult, ListCollectionChatsQuery, ListCollectionChatsResult, ListCollectionsQuery, ListCollectionsResult } from './types'

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
  async getById (
    collectionId: string,
    options?: { signal?: AbortSignal }
  ): Promise<GetCollectionByIdResult> {
    const response = await this.axios.get<GetCollectionByIdResult>(
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

  /**
   * Calls the `GET https://api.cogfy.com/collections/:collectionId/chats` endpoint
   * @param collectionId The collection id.
   * @param query The request query params.
   * @param options The request options.
   * @returns The response body.
   */
  async listChats (
    collectionId: string,
    query?: ListCollectionChatsQuery,
    options?: { signal?: AbortSignal }
  ): Promise<ListCollectionChatsResult> {
    let queryParamsString = ''
    if (query) {
      const params = new URLSearchParams(query as Record<string, string>)
      queryParamsString = params.toString()
    }
    const response = await this.axios.get<ListCollectionChatsResult>(
      `/collections/${collectionId}/chats${queryParamsString}`,
      { signal: options?.signal }
    )

    return response.data
  }
}
