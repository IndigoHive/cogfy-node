import { AxiosInstance } from 'axios'
import {
  CreateChatCommand,
  CreateChatResult,
  FindChatResult,
  FindMessageResult,
  ListChatsQuery,
  SendMessageResult,
  ListMessagesResult,
  SendMessageCommand,
  ListMessagesQuery,
} from '../chats'
import { ListChatsResult } from './types/list-chats-result'

export class ChatsClient {
  protected axios: AxiosInstance

  constructor (options: { axios: AxiosInstance }) {
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
   * Calls the `GET https://api.cogfy.com/collections/:collectionId/chats/:chatId` endpoint
   * @param collectionId The collection id.
   * @param chatId The chat id.
   * @param options The request options.
   * @returns The response body.
   */
  async find (
    collectionId: string,
    chatId: string,
    options?: { signal?: AbortSignal }
  ): Promise<FindChatResult> {
    const response = await this.axios.get<FindChatResult>(
      `/collections/${collectionId}/chats/${chatId}`,
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
    params?: ListChatsQuery,
    options?: { signal?: AbortSignal }
  ): Promise<ListChatsResult> {
    const response = await this.axios.get<ListChatsResult>(
      `/collections/${collectionId}/chats`,
      { params, signal: options?.signal }
    )

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
    params?: ListMessagesQuery,
    options?: { signal?: AbortSignal }
  ): Promise<ListMessagesResult> {
    const response = await this.axios.get<ListMessagesResult>(
      `/collections/${collectionId}/chats/${chatId}/messages`,
      { params, signal: options?.signal }
    )

    return response.data
  }

  /**
   * Calls the `GET https://api.cogfy.com/collections/:collectionId/chats/:chatId/messages/:chatMessageId` endpoint
   * @param collectionId The collection id.
   * @param chatId The chat id.
   * @param chatMessageId The message id to retrieve.
   * @param options The request options.
   * @returns The response body.
   */
  async findMessage (
    collectionId: string,
    chatId: string,
    chatMessageId: string,
    options?: { signal?: AbortSignal }
  ): Promise<FindMessageResult> {
    const response = await this.axios.get<FindMessageResult>(
      `/collections/${collectionId}/chats/${chatId}/messages/${chatMessageId}`,
      { signal: options?.signal }
    )

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
  async sendMessage (
    collectionId: string,
    chatId: string,
    data: SendMessageCommand,
    options?: { signal?: AbortSignal }
  ): Promise<SendMessageResult> {
    const response = await this.axios.post<SendMessageResult>(
      `/collections/${collectionId}/chats/${chatId}/messages`,
      data,
      { signal: options?.signal }
    )

    return response.data
  }
}
