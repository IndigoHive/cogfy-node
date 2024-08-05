import { ChatMessageRole } from '../../../types'

type ChatMessageResult = {
  id: string,
  role: ChatMessageRole
  content: string
}

export type CreateChatResult = {
  id: string,
  collectionId: string,
  fieldId: string,
  recordId: string,
  messages: ChatMessageResult[]
}
