import { AxiosInstance } from 'axios'
import { CreateChatCommand, CreateChatResult, ListCollectionChatsQuery, ListCollectionChatsResult } from '../chats'

export class ChatsClient {
  protected axios: AxiosInstance

  constructor(options: { axios: AxiosInstance }) {
    this.axios = options.axios
  }

  /**
   * Calls the `POST https://api.cogfy.com/collections/:collectionId/chats` endpoint
   * @param collectionId The collection id to create the new chat in.
   * @param data The request body.
   * @param options The request options.
   * @returns The response body.
   */
  async create (
    collectionId: string,
    data: CreateChatCommand,
    options?: { signal?: AbortSignal }
  ): Promise<CreateChatResult> {
    const response = await this.axios.post<CreateChatResult>(
      `/collections/${collectionId}/chats`,
      data,
      { signal: options?.signal }
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
  async list (
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
