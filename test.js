const CatModel = require('./models/cat')
const InteractionModel = require('./models/interaction')

const test = async () => {
  /*try{
    const catId = '5eb62f4b5a072dc88f30d293'
    let interaction = await InteractionModel.findOne({ cat_id: catId })
    if(!interaction){
      interaction = await InteractionModel.create({ cat_id: catId })
    }
    interaction.cats_likes.push('5ead9c94e21c9b29ed964b91')
    interaction.save()
  }catch(err){
    console.log('err', err)
  }*/
  // CatModel.
}

module.exports = {
  test
}
