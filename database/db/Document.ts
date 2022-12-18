import { Schema } from './Schema'

export class Document<T extends Object> {
  schema: Schema<T>
  data: T

  constructor(schema: Schema<T>, data: T) {}

  exists() {
    return !!this.data
  }
}
