const CatModel = require('../../models/cat')

const listCats = async (catIdData) => {
  try {
    const CatId = await CatModel.findById(catIdData)
    const hoy = new Date()
    const dateMin = new date(date.setMonth(hoy.getMonth() - (CatId.preferences.age_Min * 12)))
    const dateMax = new date(date.setMonth(hoy.getMonth() - (CatId.preferences.age_Max * 12)))
    const response = await CatModel.find({ gender: CatId.preferences.gender, birthday: { $gte: dateMin, $lte: dateMax }, interests: { $in: CatId.interests } })
    return { status: 1, response }
  } catch (err) {
    return { status: 2, msg: 'Error getting cats' }
  }
}

module.exports = listCats
