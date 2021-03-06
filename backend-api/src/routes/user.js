
const express = require('express')
const user = require('../usecases/user')

const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const allUsers = await user.getAll()
    response.json({
      message: 'All users',
      data: {
        user: allUsers
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.post('/', async (request, response) => {
  try {
    const newUser = await user.create(request.body)
    response.json({
      success: true,
      message: 'New user created',
      data: {
        user: newUser
      }
    })
  } catch (error) {
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const userUpdate = await user.updateById(id, request.body)
    response.json({
      success: true,
      message: `User with id ${id} updated`,
      data: {
        user: userUpdate
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const UserDeleted = await user.deleteById(id)
    response.json({
      success: true,
      message: `User with id ${id} deleted`,
      data: {
        User: UserDeleted
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.post('/signup', async (request, response) => {
  try {
    const newUser = await user.signup(request.body)
    response.json({
      success: true,
      message: 'User registered',
      data: {
        user: newUser
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router
