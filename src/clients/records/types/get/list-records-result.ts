import { GetRecordPropertyResult } from './get-record-property-result'

export type ListRecordsResult = {
  id: string
  properties: Record<string, GetRecordPropertyResult | undefined>
}
