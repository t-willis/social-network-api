const router = require('express').Router();
const { getAllUsers, getSingleUser, createUser, } = require('../../controllers/userController')

// /api/users
// get - get all users
// post - create new user
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:userId
// get - get single user by userId
router.route('/:userId').get(getSingleUser);


module.exports = router;