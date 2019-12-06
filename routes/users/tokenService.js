// api/services/tokenService.js

const jwt = require('jsonwebtoken')
const SECRET = 'make it something super secret'

const issueToken = (user) => {
  const { _id: id, role } = user
  const payload = {
    user: { id, role }
  }
  const token = jwt.sign(payload, SECRET, { expiresIn: '5m' })
  return token
}


const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET)
  } catch (err) {
    console.error(err.message)
    return false
  }
}

module.exports = {
  issueToken: issueToken,
  verifyToken: verifyToken
}