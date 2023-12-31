const router = require('express').Router();
const { 
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/userController')

// /api/users
// get - get all users
// post - create new user
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// /api/users/:userId
// get - get single user by userId
// put - update user by userId
// delete - delete user by userId
router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/:userId/friends/:friendId
// post - add friend to userId with friendId
// delete - delete friend from userId with friendId
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;