import { DatabaseRecordProperty } from './database-record-property'

export type UpdateRecordResult = {
  id: string
  properties: Record<string, DatabaseRecordProperty>
}
