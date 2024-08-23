import { GetRecordPropertyResult } from './get-record-property-result'

export type ListRecordsQueryResultData = {
  id: string
  properties: Record<string, GetRecordPropertyResult | undefined>
}

export type ListRecordsQueryResult = {
  data: ListRecordsQueryResultData[]
  totalSize: number
}
