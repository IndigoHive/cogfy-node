export type EqualsFilterData = {
  type: 'equals'
  equals: {
    fieldId: string
    value: string | number | boolean
  }
}

export type NotEqualsFilterData = {
  type: 'notEquals'
  notEquals: {
    fieldId: string
    value: string | number | boolean
  }
}

export type HasErrorFilterData = {
  type: 'hasError'
  hasError: {
    fieldId: string
    value: boolean
  }
}

export type IsEmptyFilterData = {
  type: 'isEmpty'
  isEmpty: {
    fieldId: string
    value: boolean
  }
}

export type IsPendingFilterData = {
  type: 'isPending'
  isPending: {
    fieldId: string
    value: boolean
  }
}

export type LessThanFilterData = {
  type: 'lessThan'
  lessThan: {
    fieldId: string
    value: string | number
  }
}

export type LessThanOrEqualsFilterData = {
  type: 'lessThanOrEquals'
  lessThan: {
    fieldId: string
    value: string | number
  }
}

export type GreaterThanFilterData = {
  type: 'greaterThan'
  greaterThan: {
    fieldId: string
    value: string | number
  }
}

export type GreaterThanOrEqualsFilterData = {
  type: 'greaterThanOrEquals'
  greaterThan: {
    fieldId: string
    value: string | number
  }
}

export type FileTypeFilterData = {
  type: 'fileType'
  fileType: {
    fieldId: string
    value: string
  }
}

export type RecordFilterData =
  EqualsFilterData |
  NotEqualsFilterData |
  HasErrorFilterData |
  IsEmptyFilterData |
  IsPendingFilterData |
  LessThanFilterData |
  LessThanOrEqualsFilterData |
  GreaterThanFilterData |
  GreaterThanOrEqualsFilterData |
  FileTypeFilterData
