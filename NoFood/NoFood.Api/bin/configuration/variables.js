const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb+srv://nofood:TYSUqod50vjteLLP@cluster0-y3k63.mongodb.net/test?retryWrites=true&w=majority'
    }
}

module.exports = variables;