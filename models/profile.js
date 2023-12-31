const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    goals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Goal'
      }],
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
    
    comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    updatedAt: {
        type: Date,
        default: Date.now
    }
},
{ timestamps: true }
);


//Add Virtual for 'Goal' Model to Profile Model
profileSchema.virtual('profileGoals', {
    ref: 'Goal',
    localField: 'goals',
    foreignField: '_id'
});


//Add Virtual for 'User' Model to Profile Model
profileSchema.virtual('profileUser', {
    ref: 'User',
    localField: 'userId',
    foreignField: '_id',
    justOne: true
});

//Add Virtual for 'User' Model to Profile Model
profileSchema.virtual('profileComment', {
    ref: 'Comment',
    localField: 'comment',
    foreignField: '_id',
    justOne: true
});




profileSchema.set('toObject', { virtuals: true } );
profileSchema.set('toJSON', { virtuals: true } );




const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;