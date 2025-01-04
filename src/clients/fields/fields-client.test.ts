import { afterEach, describe, expect, test } from 'vitest'
import { Cogfy } from '../../cogfy'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { ListFieldsResult } from './types'

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
        const collectionId = '1'
        const mockData: ListFieldsResult = {
          data: [
            {
              id: '1',
              name: 'name',
              type: 'author',
              operation: 'operation'
            }
          ]
        }
        const mockResponse: ListFieldsResult[] = [mockData]
        mock
          .onGet('https://api.cogfy.com/collections/1/fields')
          .reply(200, mockResponse)

        const result = await client.fields.list(collectionId)

        expect(result).toEqual(mockResponse)
      })
    })
  })
})
