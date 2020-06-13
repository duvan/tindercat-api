const newInterestService = require('../services/interests/new-interest')
const getAllInterestService = require('../services/interests/get-interests')

const getAll = async (req, res) => {
  const { catId } = req.query
  console.log('catId: ', catId)
  const response = await getAllInterestService()
  res.json(response)
}

const add = async (req, res) => {
  const interest = req.body // { interest: "Cazar" }
  const response = await newInterestService(interest)
  res.json(response)
}

module.exports = {
  getAll,
  add
}
