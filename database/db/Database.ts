import { Model } from './Model'
import { Schema } from './Schema'
import fs from 'fs/promises'

interface DatabaseOptions {
  path: string
}

export class Database {
  readonly path: string

  private readonly _models: Model<Schema<any>>[] = []

  constructor(path: string)
  constructor(options: DatabaseOptions)
  constructor(options: DatabaseOptions | string) {
    this.path = typeof options === 'string' ? options : options.path
  }

  async _create() {
    try {
      await fs.readdir(this.path).catch(async () => await fs.mkdir(this.path))
    } catch {
      throw new Error('Can not create directory')
    }
  }

  async createModel<T extends any>(
    modelName: string,
    schema: Schema<T>,
  ): Promise<Model<Schema<T>>> {
    const model = new Model({ modelName, schema, dbPath: this.path })
    await model._createFile()
    this._models.push(model)
    return model
  }
}
