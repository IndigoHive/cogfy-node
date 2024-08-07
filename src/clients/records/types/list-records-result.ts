import { RecordPropertyResult } from './record-property-result'

export type ListRecordsResult = {
  id: string
  properties: Record<string, RecordPropertyResult | undefined>
}
