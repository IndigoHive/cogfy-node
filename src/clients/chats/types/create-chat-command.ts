import { ChatMessageRole } from '../../../types'
import { CreateRecordProperty } from '../../records'

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
