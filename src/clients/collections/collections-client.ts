import { AxiosInstance } from 'axios'
import { ListCollectionsQuery, ListCollectionsResult } from './types'

export class CollectionsClient {
  protected axios: AxiosInstance

  constructor (options: { axios: AxiosInstance }) {
    this.axios = options.axios
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
}
