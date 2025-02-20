import { Bytes } from '../../../types'

export type SendMessageResult = {
  id: string
  content: string
  files: {
    name: string | null
    size: Bytes
    mimeType: string
    base64: string
  }[]
}
