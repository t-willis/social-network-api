const { User, Thought } = require('../models');

module.exports = {
    // Get All Users
    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // Get Single User by _id
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .select('-__v');
            if (!user) {
                return res.status(404).json({ message: 'No user with that ID exists' });
            }
            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // Create New User
    async createUser(req, res) {
        try {
            const dbUserData = await User.create(req.body);
            res.json(dbUserData);
        } catch (err) {
            res.status(500).json({ message: 'A user with that username or email already exists!'});
        }
    },
    // Update User by _id
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );
            if (!user) {
                return res.status(404).json({ message: 'No user with this ID!' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Delete User by _id, delete associated thoughts
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndRemove({ _id: req.params.userId });

            if (!user) {
                return res.status(404).json({ message: 'No user with this ID!' });
            }
            
            const thoughts = await Thought.deleteMany({ username: user.username });

            if (!thoughts) {
                return res.status(404).json({ message: 'User deleted, there were no associated thoughts'});
            }

            res.json({ message: 'User and associated thoughts deleted.'});
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // Add friend by friendId
    async addFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId},
                { $addToSet: { friends: req.params.friendId } },
                { new: true }
            );
            if (!user) {
                return res.status(404).json({ message: "No user found with this userId!"});
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Remove friend by friendId
    async deleteFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { new: true}
            );
            if (!user) {
                return res.status(404).json({ message: "No user found with this userId!"});
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};