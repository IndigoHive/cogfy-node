import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { randomUUID } from 'crypto'
import { describe, expect, test } from 'vitest'
import { ListMessagesQuery, ListMessagesResult } from './types'
import { Cogfy } from '../../cogfy'

describe('chats', () => {
  describe('listMessages', () => {
    test('serializes roles', async () => {
      const mock = new MockAdapter(axios)
      const cogfy = new Cogfy()
      const collectionId = randomUUID()
      const chatId = randomUUID()
      const params: ListMessagesQuery = {
        roles: ['assistant', 'user']
      }
      mock
        .onGet(`https://api.cogfy.com/collections/${collectionId}/chats/${chatId}/messages`, { params })
        .replyOnce<ListMessagesResult>(200, { data: [], pageNumber: 0, pageSize: 10, totalSize: 0 })

      const response = await cogfy.chats.listMessages(collectionId, chatId, params)

      expect(response).toBeDefined()

      mock.reset()
    })
  })
})
