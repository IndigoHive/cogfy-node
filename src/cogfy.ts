import axios, { AxiosInstance } from 'axios'
import { ChatsClient, CollectionsClient } from './clients'

export type CogfyOptions = {
  apiKey?: string
}

export class Cogfy {
  private _axios: AxiosInstance
  private _options: CogfyOptions

  collections: CollectionsClient
  chats: ChatsClient

  constructor(options: CogfyOptions) {
    this._options = options
    this._axios = axios.create({
      baseURL: 'https://api.cogfy.com',
      headers: {
        'Api-Key': this._options.apiKey
      }
    })

    this.collections = new CollectionsClient({ axios: this._axios })
    this.chats = new ChatsClient({ axios: this._axios })
  }
}
