'use strict'

exports.URL = process.env.MONGODB_URI || "mongodb+srv://imranasg:catscan101@cluster0-2vxsb.mongodb.net/test?retryWrites=true&w=majority"
exports.PORT = process.env.PORT || 4000
exports.SECRET = process.env.SECRET || 'super-secret-passphrase'
