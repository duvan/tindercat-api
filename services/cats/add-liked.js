const CatModel = require('../../models/cat')

const addLiked = async (catIdown, catIdLiked) => {
  try {
    const cat = await CatModel.findbyId(catId)
    cat.cats_likes.push(catIdLiked)
    cat.save()
    return { status: 1, cat }
  } catch (err) {
    return { status: 2, msg: 'cat liked not added to interactions' }
  }
}

module.exports = addLiked
