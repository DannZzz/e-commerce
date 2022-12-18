import { Schema } from '../db/Schema'
import { createDatabase } from '../index'

createDatabase('./db').then(async (db) => {
  const model = await db.createModel('users', new Schema<{ hello: string }>())
  await model.getById('')
})
