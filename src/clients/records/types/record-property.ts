export type BaseRecordProperty = {
  error?: {
    code?: string | null
    message?: string
  }
  pending?: boolean
}

export type BooleanRecordProperty = BaseRecordProperty & {
  type: 'boolean'
  boolean: {
    value: boolean
  }
}

export type ChatRecordProperty = BaseRecordProperty & {
  type: 'chat'
}

export type DateRecordProperty = BaseRecordProperty & {
  type: 'date'
  date: {
    value: string
  }
}

export type FileRecordProperty = BaseRecordProperty & {
  type: 'file'
}

export type JsonRecordProperty = BaseRecordProperty & {
  type: 'json'
  json: {
    value: unknown
  }
}

export type NumberRecordProperty = BaseRecordProperty & {
  type: 'number'
  number: {
    value: number
  }
}

export type ReferenceRecordProperty = BaseRecordProperty & {
  type: 'reference'
}

export type StopwatchRecordProperty = BaseRecordProperty & {
  type: 'stopwatch'
  stopwatch?: {
    value?: {
      startDate?: string | null
      elapsed?: number | null
    }
  }
}

export type TextRecordProperty = BaseRecordProperty & {
  type: 'text'
  text: {
    value: string
  }
}

export type VectorRecordProperty = BaseRecordProperty & {
  type: 'vector'
}

export type WhatsAppRecordProperty = BaseRecordProperty & {
  type: 'whatsApp'
  whatsApp?: {
    value?: {
      phoneNumber?: string
      chatId?: string
    }
  }
}

export type RecordProperty =
  BooleanRecordProperty |
  ChatRecordProperty |
  DateRecordProperty |
  FileRecordProperty |
  JsonRecordProperty |
  NumberRecordProperty |
  ReferenceRecordProperty |
  StopwatchRecordProperty |
  TextRecordProperty |
  VectorRecordProperty |
  WhatsAppRecordProperty
