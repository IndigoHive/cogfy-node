export type BaseRecordProperty = {
  error?: {
    code?: string | null
    message?: string
  }
  pending?: boolean
}

export type AuthorRecordProperty = BaseRecordProperty & {
  type: 'author'
  author?: {
    value?: {
      id: string
      name: string
    } | null
  }
}

export type BooleanRecordProperty = BaseRecordProperty & {
  type: 'boolean'
  boolean: {
    value: boolean
  }
}

export type ChatRecordProperty = BaseRecordProperty & {
  type: 'chat'
  chat: {
    value?: {
      chatId?: string
      lastMessage?: {
        content?: string
        role?: string
        user?: {
          id: string
          name: string
        }
        sendDate?: string
      }
    } | null
  }
}

export type CreateDateRecordProperty = BaseRecordProperty & {
  type: 'createDate'
  createDate: {
    value: string
  }
}

export type DateRecordProperty = BaseRecordProperty & {
  type: 'date'
  date: {
    value: string | null
  }
}

export type FileRecordProperty = BaseRecordProperty & {
  type: 'file'
  file: {
    value: {
      id: string
      type: string
      name: string
      size: number
      url: string
      uploadStatus?: string
      key?: string
      bucketName?: string
    } | null
  }
}

export type JsonRecordProperty = BaseRecordProperty & {
  type: 'json'
  json: {
    value: unknown
    invalidValue?: unknown
  }
}

export type NumberRecordProperty = BaseRecordProperty & {
  type: 'number'
  number: {
    value: number | null
  }
}

export type ReferenceRecordProperty = BaseRecordProperty & {
  type: 'reference'
  reference: {
    value: {
      id: string
      referencedRecordId: string
      title: string | null
    }[]
  }
}

export type ScheduleRecordProperty = BaseRecordProperty & {
  type: 'schedule'
  schedule?: {
    value?: {
      startDate: string
      nextDate: string
      interval: number
      unit: string
    } | null
  }
}

export type SelectRecordProperty = BaseRecordProperty & {
  type: 'select'
  select: {
    value: {
      id: string
    }[]
  }
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
    value: string | null
  }
}

export type UpdateDateRecordProperty = BaseRecordProperty & {
  type: 'updateDate'
  updateDate: {
    value: string
  }
}

export type VectorRecordProperty = BaseRecordProperty & {
  type: 'vector'
  vector: {
    value: {
      count: number | null
    }
  }
}

export type WhatsAppRecordProperty = BaseRecordProperty & {
  type: 'whatsApp'
  whatsApp?: {
    value?: {
      phoneNumber?: string
      chatId?: string
      lastMessage?: {
        content?: string
        role?: string
        user?: {
          id: string
          name: string
        }
        sendDate?: string
      }
    } | null
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
  ScheduleRecordProperty |
  SelectRecordProperty |
  StopwatchRecordProperty |
  TextRecordProperty |
  UpdateDateRecordProperty |
  VectorRecordProperty |
  WhatsAppRecordProperty
