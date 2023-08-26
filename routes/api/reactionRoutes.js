const router = require('express').Router();
const {
    getAllReactions,
    getSingleReaction,
    createReaction,
    deleteReaction,
} = require('../../controllers/reactionController');

// /api/reactions
// get - get all reactions
// post - create new reaction
router.route('/')
    .get(getAllReactions)
    .post(createReaction);

// /api/reactions/:reactionId
// get - get single reaction by reactionId
// delete - delete reaction by reactionId
router.route('/:reactionId')
    .get(getSingleReaction)
    .delete(deleteReaction);

module.exports = router;