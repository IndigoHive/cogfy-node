import { Bytes } from '../../../types'

type MimeType =
  'audio/aac' |
  'audio/mpeg' |
  'audio/ogg' |
  'audio/wav' |
  'audio/webm'

export type SendMessageCommand = {
  content: string
  contentType?: 'text' | 'audio' | null
  file?: {
    name: string | null
    size: Bytes | null
    mimeType: MimeType
    base64: string
  } | null
}
