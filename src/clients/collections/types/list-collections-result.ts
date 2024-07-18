export type ListCollectionsResult = {
  data: {
    id: string
    name: string | null
  }[]
  pageNumber: number
  pageSize: number
  totalSize: number
}
