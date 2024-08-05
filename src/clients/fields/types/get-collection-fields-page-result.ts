import { Page } from '../../../types'

export type GetCollectionFieldsResult = {
  id: string
  name: string
  type: string
  order: number
  data: object | null
  operation: string | null
  operationConfig: any | null
}

export type GetCollectionFieldsPageResult = Page<GetCollectionFieldsResult>
