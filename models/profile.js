const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    goalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Goal'
      },
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },

    profilePicture: {
        type: String
    },

    bio: {
        type: String
    },

    milestones: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Milestone'
      }],
      tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
      }],

    createdAt: {
        type: Date,
        default: Date.now
    },

    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;