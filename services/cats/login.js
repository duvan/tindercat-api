const jwt = require('jsonwebtoken')
const { SECRET } = require('../../config/constants')
const CatModel = require('../../models/cat')

const login = async (email, password) => {
  try {
    const query = { email, password }
    const cat = await CatModel.findOne(query)
    if (cat) {
      const payload = {
        catId: cat.Id, // _id
        name: cat.name
      }
      const token = jwt.sign(payload, SECRET, { expiresIn: '1h' }) // genera el token secret, encripta payload
      return { status: 1, token: token }
    } else {
      return { status: 2 }
    }
  } catch (err) {
    return { status: 2 }
  }
}

module.exports = login
