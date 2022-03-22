const env = require( 'dotenv' )
env.config()

module.exports = {
    database: {
        host: process.env.DATABASE_HOST || 'localhost',
        user: process.env.DATABASE_USER || 'root',
        password: process.env.DATABASE_PASSWORD || 'jvcode',
        database: process.env.DATABASE_NAME || 'delivery',
        port: process.env.DATABASE_PORT
    },
    port: process.env.PORT || 4000
}