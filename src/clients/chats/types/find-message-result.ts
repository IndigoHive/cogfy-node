import { ChatMessageRole } from './chat-message-role'

export type FindMessageResultTraceEvent = {
  data: Record<string, unknown>
  type: string
}

export type FindMessageResultTraceStep = {
  name: string
  type: string
  depth: number
  duration: number
  events?: FindMessageResultTraceEvent[]
}

export type FindMessageResultTrace = {
  id: string
  data: {
    id: string
    steps: FindMessageResultTraceStep[]
    duration: number
  }
}

export type FindMessageResult = {
  id: string
  chatId: string
  externalId: string | null
  role: ChatMessageRole
  status: string | null
  content: string
  contentType: string
  contentData: unknown | null
  toolCalls: unknown | null
  toolCallId: string | null
  sendDate: string
  updateDate: string
  scheduleDate: string | null
  trace: FindMessageResultTrace
}

