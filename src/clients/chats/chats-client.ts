import { AxiosInstance } from 'axios'
import { CreateChatCommand, CreateChatMessageCommand, CreateChatMessageResult, CreateChatResult, FindChatByIdResult, ListChatMessagesQuery, ListChatMessagesResult, ListCollectionChatsQuery, ListCollectionChatsResult } from '../chats'

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
   * @param params The request query params.
   * @param options The request options.
   * @returns The response body.
   */
  async list (
    collectionId: string,
    params?: ListCollectionChatsQuery,
    options?: { signal?: AbortSignal }
  ): Promise<ListCollectionChatsResult> {
    const response = await this.axios.get<ListCollectionChatsResult>(`/collections/${collectionId}/chats`, {
      params,
      signal: options?.signal
    })

    return response.data
  }

  /**
   * Calls the `GET https://api.cogfy.com/collections/:collectionId/chats/:chatId` endpoint
   * @param collectionId The collection id.
   * @param chatId The chat id.
   * @param options The request options.
   * @returns The response body.
   */
  async findById (
    collectionId: string,
    chatId: string,
    options?: { signal?: AbortSignal }
  ): Promise<FindChatByIdResult> {
    const response = await this.axios.get<FindChatByIdResult>(
      `/collections/${collectionId}/chats/${chatId}`,
      { signal: options?.signal })

    return response.data
  }

  /**
   * Calls the `GET https://api.cogfy.com/collections/:collectionId/chats/:chatId/messages` endpoint
   * @param collectionId The collection id.
   * @param chatId The chat id to get the messages from.
   * @param params The request query params.
   * @param options The request options.
   * @returns The response body.
   */
  async listMessages (
    collectionId: string,
    chatId: string,
    params?: ListChatMessagesQuery,
    options?: { signal?: AbortSignal }
  ): Promise<ListChatMessagesResult> {
    const response = await this.axios.get<ListChatMessagesResult>(
      `/collections/${collectionId}/chats/${chatId}/messages`, {
      params,
      signal: options?.signal
    })
    return response.data
  }

  /**
   * Calls the `POST https://api.cogfy.com/collections/:collectionId/chats/:chatId/messages` endpoint
   * @param collectionId The collection id.
   * @param chatId The id of the chat to create the new message in.
   * @param data The request body.
   * @param options The request options.
   * @returns The response body.
   */
  async createMessage (
    collectionId: string,
    chatId: string,
    data: CreateChatMessageCommand,
    options?: { signal?: AbortSignal }
  ): Promise<CreateChatMessageResult> {
    const response = await this.axios.post<CreateChatMessageResult>(
      `/collections/${collectionId}/chats/${chatId}/messages`, {
      data,
      signal: options?.signal
    })
    return response.data
  }
}
