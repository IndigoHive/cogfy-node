import { ChatMessageRole } from './chat-message-role'
import { BooleanRecordProperty, NumberRecordProperty, TextRecordProperty } from '../../records'

type CreateRecordProperty =
  BooleanRecordProperty |
  NumberRecordProperty |
  TextRecordProperty

type ChatMessage = {
  role: ChatMessageRole
  content: string
}

export type CreateChatCommand = {
  fieldId: string
  recordId?: string | null
  properties?: Record<string, CreateRecordProperty> | null
  messages?: ChatMessage[] | null
}
