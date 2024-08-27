export type EqualsFilter = {
  type: 'equals'
  equals: {
    fieldId: string
    value: string | number | boolean
  }
}

export type NotEqualsFilter = {
  type: 'notEquals'
  notEquals: {
    fieldId: string
    value: string | number | boolean
  }
}

export type HasErrorFilter = {
  type: 'hasError'
  hasError: {
    fieldId: string
    value: boolean
  }
}

export type IsEmptyFilter = {
  type: 'isEmpty'
  isEmpty: {
    fieldId: string
    value: boolean
  }
}

export type IsPendingFilter = {
  type: 'isPending'
  isPending: {
    fieldId: string
    value: boolean
  }
}

export type LessThanFilter = {
  type: 'lessThan'
  lessThan: {
    fieldId: string
    value: string | number
  }
}

export type LessThanOrEqualsFilter = {
  type: 'lessThanOrEquals'
  lessThan: {
    fieldId: string
    value: string | number
  }
}

export type GreaterThanFilter = {
  type: 'greaterThan'
  greaterThan: {
    fieldId: string
    value: string | number
  }
}

export type GreaterThanOrEqualsFilter = {
  type: 'greaterThanOrEquals'
  greaterThan: {
    fieldId: string
    value: string | number
  }
}

export type FileTypeFilter = {
  type: 'fileType'
  fileType: {
    fieldId: string
    value: string
  }
}

export type RecordFilter =
  EqualsFilter |
  NotEqualsFilter |
  HasErrorFilter |
  IsEmptyFilter |
  IsPendingFilter |
  LessThanFilter |
  LessThanOrEqualsFilter |
  GreaterThanFilter |
  GreaterThanOrEqualsFilter |
  FileTypeFilter
