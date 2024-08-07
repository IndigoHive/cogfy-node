import axios, { AxiosInstance } from 'axios'
import { ChatsClient, CollectionsClient, FieldsClient, RecordsClient } from './clients'

export type CogfyOptions = {
  apiKey?: string
}

export class Cogfy {
  private _axios: AxiosInstance
  private _options: CogfyOptions

  chats: ChatsClient
  collections: CollectionsClient
  fields: FieldsClient
  records: RecordsClient

  constructor (options: CogfyOptions = {}) {
    this._options = options
    this._axios = axios.create({
      baseURL: 'https://api.cogfy.com',
      headers: {
        'Api-Key': this._options.apiKey
      }
    })

    this.chats = new ChatsClient({ axios: this._axios })
    this.collections = new CollectionsClient({ axios: this._axios })
    this.fields = new FieldsClient({ axios: this._axios })
    this.records = new RecordsClient({ axios: this._axios })
  }
}
