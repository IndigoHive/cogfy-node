export type BooleanCreateRecordProperty = {
  type: 'boolean'
  boolean: {
    value: boolean
  }
}

export type ChatCreateRecordProperty = {
  type: 'chat'
}

export type DateCreateRecordProperty = {
  type: 'date'
  date: {
    value: string
  }
}

export type FileCreateRecordProperty = {
  type: 'file'
}

export type JsonCreateRecordProperty = {
  type: 'json'
  json: {
    value: unknown
  }
}

export type NumberCreateRecordProperty = {
  type: 'number'
  number: {
    value: number
  }
}

export type ReferenceCreateRecordProperty = {
  type: 'reference'
}

export type StopwatchCreateRecordProperty = {
  type: 'stopwatch'
  stopwatch?: {
    value?: {
      startDate?: string | null
      elapsed?: number | null
    }
  }
}

export type TextCreateRecordProperty = {
  type: 'text'
  text: {
    value: string
  }
}

export type VectorCreateRecordProperty = {
  type: 'vector'
}

export type WhatsAppCreateRecordProperty = {
  type: 'whatsApp'
  whatsApp?: {
    value?: {
      phoneNumber?: string
      chatId?: string
    }
  }
}

export type CreateRecordProperty =
  BooleanCreateRecordProperty |
  ChatCreateRecordProperty |
  DateCreateRecordProperty |
  FileCreateRecordProperty |
  JsonCreateRecordProperty |
  NumberCreateRecordProperty |
  ReferenceCreateRecordProperty |
  StopwatchCreateRecordProperty |
  TextCreateRecordProperty |
  VectorCreateRecordProperty |
  WhatsAppCreateRecordProperty
