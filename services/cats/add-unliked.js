const CatModel = require('../../models/cat')

const addUnliked = async (catId, catIdUnLiked) => {
  try {
    const cat = await CatModel.findOne(catId)
    cat.cats_Unlikes.push(catIdUnliked)
    cat.save()
    return { status: 1, cat }
  } catch (err) {
    return { status: 2, msg: 'cat unliked not added to interactions' }
  }
}

module.exports = addUnliked
