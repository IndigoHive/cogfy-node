export type ListCollectionChatsResult = {
  data: { id: string, fieldId: string | null, recordId: string | null }[]
  totalSize: number
  pageNumber: number
  pageSize: number

}
