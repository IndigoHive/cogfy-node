import { ChatMessageRole, DatabaseRecordProperty } from '../../../types'

type ChatMessage = {
  role: ChatMessageRole
  content: string
}

export type CreateChatCommand = {
  fieldId: string
  recordId?: string | null
  properties?: Record<string, DatabaseRecordProperty> | null
  messages?: ChatMessage[] | null
}
