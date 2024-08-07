export type RecordPropertyBase = {
  error?: {
    code?: string | null
    message?: string
  }
  pending?: boolean
}

export type RecordPropertyAuthor = RecordPropertyBase & {
  type: 'author'
  author?: {
    value?: {
      id: string
      name: string
    }
  }
}

export type RecordPropertyBoolean = RecordPropertyBase & {
  type: 'boolean'
  boolean: {
    value: boolean
  }
}

export type RecordPropertyChat = RecordPropertyBase & {
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
        sendDate?: Date
      }
    }
  }
}

export type RecordPropertyCreateDate = RecordPropertyBase & {
  type: 'createDate'
  createDate: {
    value: string
  }
}

export type RecordPropertyDate = RecordPropertyBase & {
  type: 'date'
  date: {
    value: string
  }
}

export type RecordPropertyFile = RecordPropertyBase & {
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
    }
  }
}

export type RecordPropertyJson = RecordPropertyBase & {
  type: 'json'
  json: {
    value: unknown
  }
}

export type RecordPropertyNumber = RecordPropertyBase & {
  type: 'number'
  number: {
    value: number
  }
}

export type RecordPropertyReference = RecordPropertyBase & {
  type: 'reference'
  reference?: {
    value?: {
      id?: string
      title?: string | null
    }[]
  }
}

export type RecordPropertyStopwatch = RecordPropertyBase & {
  type: 'stopwatch'
  stopwatch?: {
    value?: {
      startDate?: Date | null
      elapsed?: number | null
    }
  }
}

export type RecordPropertyText = RecordPropertyBase & {
  type: 'text'
  text: {
    value: string
    pending?: boolean
    error?: {
      code?: string | null
      message?: string
    }
  }
}

export type RecordPropertyUpdateDate = RecordPropertyBase & {
  type: 'updateDate'
  updateDate: {
    value: string
  }
}

export type RecordPropertyVector = RecordPropertyBase & {
  type: 'vector'
  vector: {
    value: {
      count: number
    }
  }
}

export type RecordPropertyWhatsApp = RecordPropertyBase & {
  type: 'whatsApp'
  whatsApp: {
    value: {
      phoneNumber: string
    }
  }
}

export type RecordProperty =
  RecordPropertyAuthor |
  RecordPropertyBoolean |
  RecordPropertyChat |
  RecordPropertyCreateDate |
  RecordPropertyDate |
  RecordPropertyFile |
  RecordPropertyJson |
  RecordPropertyNumber |
  RecordPropertyReference |
  RecordPropertyStopwatch |
  RecordPropertyText |
  RecordPropertyUpdateDate |
  RecordPropertyVector |
  RecordPropertyWhatsApp

export type RecordPropertyType = RecordProperty['type']
