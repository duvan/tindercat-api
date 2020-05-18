const newInterestService = require('../services/interests/new-interest')
const getAllInterestService = require('../services/interests/get-interests')

const getAll = async (req, res) => {
  const { catId } = req.query
  console.log('catId:', req.query)
  const response = await getAllInterestService()
  res.json(response)
}

const addinterest = async (req, res) => {
  const interest = req.body // { interest: "cazar" }
  const response = await newInterestServices(interest)
  res.json(response)
}

module.exports = {
  getAll,
  add
}
