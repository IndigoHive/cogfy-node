import { AxiosInstance } from 'axios'
import { GetCollectionFieldsResult } from './types'

export class FieldsClient {
  protected axios: AxiosInstance

  constructor (options: { axios: AxiosInstance }) {
    this.axios = options.axios
  }

  /**
   * Calls the `GET https://api.cogfy.com/collections/:collectionId/fields` endpoint
   * @param collectionId The collection id.
   * @param params The request query parameters.
   * @param options The request options.
   */

  async getPage (
    collectionId: string,
    options?: { signal?: AbortSignal }
  ): Promise<GetCollectionFieldsResult[]> {
    const response = await this.axios.get(`/collections/${collectionId}/fields`, {
      signal: options?.signal
    })

    return response.data
  }
}
