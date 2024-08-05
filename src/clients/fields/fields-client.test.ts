import { afterEach, describe, expect, test } from 'vitest'
import { Cogfy } from '../../cogfy'
import { GetCollectionFieldsPageResult, GetCollectionFieldsResult } from './types'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

describe('fields-client', () => {
  const mock = new MockAdapter(axios)
  const client = new Cogfy()

  afterEach(() => {
    // Reset mock after each test
    mock.reset();
  });

  describe('getPage GET /collections/:collectionId/fields', () => {
    describe('when the request to endpoint is successful', () => {
      test('should return data', async () => {
        const mockData: GetCollectionFieldsResult = {
          id: '1',
          name: 'name',
          type: 'type',
          order: 1,
          data: {},
          operation: 'operation',
          operationConfig: {}
        }
        const mockResponse: GetCollectionFieldsPageResult = {
          pageNumber: 1,
          pageSize: 1,
          totalSize: 1,
          data: [mockData]
        }

        mock
          .onGet('https://api.cogfy.com/collections/1/fields')
          .reply(200, mockResponse)

        const result = await client.fields.getPage('1', {})
        expect(result.data).toEqual(mockResponse.data)
      })
    })
  })
})
