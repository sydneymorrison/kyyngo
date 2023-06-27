const mongoose = require('mongoose');

const milestoneSchema = new mongoose.Schema ({
    goalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Goal',
        required: true
      },
      currentDate: {
        type: Date
      },
      title: {
        type: String,
        ref: 'Goal',
        required: true
      },
      milestoneDescription: {
        type: String,
        required: true
      },
      timeAllocation: {
        type: String
      },
      isCompleted: {
        type: Boolean,
        default: false
      },

});

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});


const goalSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    currentDate: {
        type: Date,
    },

    startDate: {
        type: Date,
        required: true
    },

    endDate: {
        type: Date,
        required: true
    },

    milestone: [milestoneSchema],
    tasks: [taskSchema],
    progress: {
        type: Number,
        default: 0
    },

    isCompleted: {
        type: Boolean,
        default: false
    },

    timeAllocation: {
        type: String
    },

    icon: {
        type: String
    },

    category: {
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Goal = mongoose.model('Goal', goalSchema);


module.exports = Goal;




