import { RecordProperty } from './record-property'

export type CreateRecordCommand = {
  properties: Record<string, RecordProperty>
}
