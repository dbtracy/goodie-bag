const router = require('express').Router()
const Candy = require('../../db/models/Candy')

router.get('/', async (req, res, next) => {
  try {
    const candies = await Candy.findAll()
    if (candies) {
      res.send(candies)
    } else {
      res.status(404).send('Couldn\'t find them sweet sweet goodies')
    }
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
