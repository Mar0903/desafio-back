
const express = require('express')
const user = require('../usecases/user')
const router = express.Router()

router.post('/login', async (request, response) => {
  console.log(request.body)
  try {
    const { email, password } = request.body
    const token = await user.login(email, password)

    response.json({
      suucces: true,
      message: 'loged in',
      data: {
        token
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      suucces: false,
      error: error.message
    })
  }
})

module.exports = router
