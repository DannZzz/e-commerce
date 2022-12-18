import path from 'path'
import fs from 'fs/promises'

export async function readModel(dbPath: string, modelName: string) {
  try {
    const content = await fs.readFile(path.join(dbPath, modelName))

    return JSON.parse(content.toString())
  } catch {
    throw new Error('Can not read model file')
  }
}
