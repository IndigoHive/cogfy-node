import { AxiosInstance } from 'axios'
import { GetCollectionFieldsPageQuery, GetCollectionFieldsResultPage } from './types'

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
    params: GetCollectionFieldsPageQuery,
    options?: { signal?: AbortSignal }
  ): Promise<GetCollectionFieldsResultPage> {
    const response = await this.axios.get(`/collections/${collectionId}/fields`, {
      params,
      signal: options?.signal
    })

    return response.data
  }
}
