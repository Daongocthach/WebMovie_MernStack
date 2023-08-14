require('dotenv').config()
export const env = {
    MONGODB_URI: process.env.MONGODB_URI,
    APP_HOST: process.env.HOST,
    APP_PORT: process.env.PORT,
    DATABASE_NAME: process.env.DATABASE_NAME
}