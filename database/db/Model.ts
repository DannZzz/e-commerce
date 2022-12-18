import { Schema } from './Schema'
import path from 'path'
import fs from 'fs/promises'
import { readModel } from './utils/fs'

interface ModelOptions<T extends Schema> {
  dbPath: string
  schema: T
  modelName: string
}

export class Model<T extends Schema> {
  private readonly dbPath: string
  schema: T
  modelName: string

  constructor(options: ModelOptions<T>) {
    this.dbPath = options.dbPath
    this.schema = options.schema
    this.modelName = options.modelName
  }

  private async db() {
    return (await readModel(this.dbPath, this.modelName + '.json')) || {}
  }

  async getById(id: string) {
    console.log(await this.db())
  }

  async create(document: T) {}

  async _createFile() {
    try {
      const p = path.join(this.dbPath, this.modelName + '.json')
      await fs.readFile(p).catch(() => {
        fs.writeFile(p, '{}')
      })
    } catch {
      throw new Error(
        "Can't create model file, maybe parent folder doesn't exist",
      )
    }
  }
}
