import { ChatMessageRole } from './chat-message-role'
import { Page } from '../../../types'

export type ListMessagesResultData = {
  id: string
  role: ChatMessageRole
  content: string | null
  sendDate: string | null
}

export type ListMessagesResult = Page<ListMessagesResultData>
