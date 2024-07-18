import axios, { AxiosInstance } from 'axios'
import { CollectionsClient } from './clients'

export type CogfyOptions = {
  apiKey?: string
}

export class Cogfy {
  private _axios: AxiosInstance
  private _options: CogfyOptions

  collections: CollectionsClient

  constructor (options: CogfyOptions) {
    this._options = options
    this._axios = axios.create({
      baseURL: 'https://api.cogfy.com',
      headers: {
        'Api-Key': this._options.apiKey
      }
    })

    this.collections = new CollectionsClient({ axios: this._axios })
  }
}
