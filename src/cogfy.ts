import axios, { AxiosInstance } from 'axios'
import qs from 'qs'
import { ChatsClient, CollectionsClient, FieldsClient, FilesClient, RecordsClient } from './clients'

export type CogfyOptions = {
  apiKey?: string
  url?: string
}

export class Cogfy {
  private _axios: AxiosInstance
  private _options: CogfyOptions

  chats: ChatsClient
  collections: CollectionsClient
  fields: FieldsClient
  files: FilesClient
  records: RecordsClient

  constructor (options: CogfyOptions = {}) {
    this._options = options
    this._axios = axios.create({
      baseURL: this._options.url ?? 'https://api.cogfy.com',
      headers: {
        'Api-Key': this._options.apiKey
      },
      paramsSerializer: {
        serialize: params => qs.stringify(params, { arrayFormat: 'repeat' })
      }
    })

    this.chats = new ChatsClient({ axios: this._axios })
    this.collections = new CollectionsClient({ axios: this._axios })
    this.fields = new FieldsClient({ axios: this._axios })
    this.files = new FilesClient({ axios: this._axios })
    this.records = new RecordsClient({ axios: this._axios })
  }
}
