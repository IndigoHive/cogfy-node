import { CreateRecordProperty } from './create-record-property'

export type CreateRecordCommand = {
  properties?: Record<string, CreateRecordProperty> | null
}
