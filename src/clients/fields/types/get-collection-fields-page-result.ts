import { Page } from '../../../types'

type GetCollectionFieldsResult = {
  id: string
  name: string
  type: string
  order: number
  data: object | null
  operation: string | null
  operationConfig: any | null
}

export type GetCollectionFieldsResultPage = Page<GetCollectionFieldsResult>
