import { ChatMessageRole, RecordProperty } from '../../../types'

type ChatMessage = {
  role: ChatMessageRole
  content: string
}

export type CreateChatCommand = {
  fieldId: string
  recordId?: string | null
  properties?: Record<string, RecordProperty> | null
  messages?: ChatMessage[] | null
}
