import { DatabaseRecordProperty } from './database-record-property'

export type UpdateRecordCommand = {
  properties?: Record<string, DatabaseRecordProperty> | null
}
