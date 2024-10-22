import { RecordFilter } from './record-filter'

export type QueryRecordsCommandFilter = {
  type: 'and'
  and: {
    filters: RecordFilter[]
  }
}

export type QueryRecordsCommandOrderBy = {
  fieldId: string
  direction: 'asc' | 'desc'
}

export type QueryRecordsCommand = {
  fieldIds?: string[]
  recordIds?: string[]
  filter?: QueryRecordsCommandFilter | null
  orderBy?: QueryRecordsCommandOrderBy[] | null
}
