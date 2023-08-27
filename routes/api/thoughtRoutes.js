const router = require('express').Router();
const { 
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
// get - get all thoughts
// post - create new thought
router.route('/')
    .get(getAllThoughts)
    .post(createThought);

// /api/thoughts/:thoughtId
// get - get single thought by thoughtId
// put - update thought by thoughtId
// delete - delete thought by thoughtId
router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
// post - create new reaction
router
    .route('/:thoughtId/reactions')
    .post(createReaction)

// /api/thoughts/:thoughtId/reactions/:reactionId
// delete - delete reaction by reactionId
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;