import { Pagination } from './pagination'

export type Page<T> = Required<Pagination> & {
  data: T[]
  totalSize: number
}
