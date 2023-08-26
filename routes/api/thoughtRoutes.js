const router = require('express').Router();
const { 
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
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

module.exports = router;