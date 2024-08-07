import { DatabaseRecordProperty } from './database-record-property'

export type CreateRecordCommand = {
  properties?: Record<string, DatabaseRecordProperty> | null
}
