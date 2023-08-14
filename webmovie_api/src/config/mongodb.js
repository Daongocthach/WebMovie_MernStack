import { MongoClient } from 'mongodb'
import { env } from './enviroment'

let dbInstance = null

const uri = env.MONGODB_URI
const databasename = env.DATABASE_NAME

export const connectDb = async () => {
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    await client.connect()
    // assign clientDb to our dbInstance
    dbInstance = client.db(databasename)
}

export const getDB = () => {
    if (!dbInstance) throw new Error('Must connect to Database first!')
    return dbInstance
}
