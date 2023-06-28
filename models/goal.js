const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const milestoneSchema = new Schema ({
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

}, {
    timestamps: true,
  });

const taskSchema = new Schema({
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
}, {
    timestamps: true,
  });


const goalSchema = Schema({
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

    link: {
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
}, {
        timestamps: true,
});

const Goal = mongoose.model('Goal', goalSchema);
const Milestone = mongoose.model('Milestone', milestoneSchema);
const Task = mongoose.model('Task', taskSchema);

module.exports = {
  Goal,
  Milestone,
  Task
};




