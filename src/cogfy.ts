export type CogfyOptions = {
  apiKey?: string
}

export class Cogfy {
  private _options: CogfyOptions

  constructor (options: CogfyOptions) {
    this._options = options
  }
}
