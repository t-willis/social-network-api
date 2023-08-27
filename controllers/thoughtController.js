const { User, Thought } = require('../models');

module.exports = {
    // Get All Thoughts
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find().select('-__v');
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Get Single Thought by _id
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
                .select('-__v');
            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID exists' });
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Create New Thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: thought._id } },
                { new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID found' });
            }
            res.json(thought);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // Update Thought by _id
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );
            if (!thought) {
                return res.status(404).json({ message: 'No thought with this ID!'});
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Delete Thought by _id
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
            await User.findOneAndUpdate(
                { username: thought.username },
                { $pull: { thoughts: thought._id}}
            );
            if (!thought) {
                return res.status(404).json({ message: "No thought with this ID!" });
            }
            res.json({ message: 'Thought deleted, user updated!'});
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // Add reaction to thought
    async createReaction(req, res) {
        try {
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: thought.id } },
                { new: true }
            );
            if (!user) {
                return res.status(404).json({ message: "No thought found with that thoughtId!" });
            }
            res.json(thought);
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    // Delete reaction from thought
    async deleteReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { new: true }
            );
            if (!thought) {
                return res.status(404).json({ message: "No thought found with that thoughtId!" });
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};