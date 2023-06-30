const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const milestoneSchema = new Schema ({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    goalId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Goal',
        required: true
      }],
      currentDate: {
        type: Date
      },
      // title: {
      //   type: String,
      //   ref: 'Goal',
      //   required: true
      // },
      milestoneDescription: {
        type: String,
        required: true
      },
      timeAllocation: {
        hours: {
          type: Number,
          default: 0
        },
        minutes: {
          type: Number,
          default: 0
        },
        seconds: {
          type: Number,
          default: 0
        }
      },
      isCompleted: {
        type: String,
        enum: ['Completed', 'Not Completed'],
        default: 'Not Completed'
      },
      progress: {
        type: Number,
        ref: 'Goal',
        required: true
      }

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


// Add Virtual for 'Profile' Model to Goal Model
goalSchema.virtual('goalProfiles', {
  ref: 'Profile',
  localField: '_id',
  foreignField: 'goals'
});

// Add Virtual for 'User' Model to Goal Model
goalSchema.virtual('goalUser', {
  ref: 'User',
  localField: 'userId',
  foreignField: '_id',
  justOne: true
});


goalSchema.set('toObject', { virtuals: true });
goalSchema.set('toJSON', { virtuals: true });

const Goal = mongoose.model('Goal', goalSchema);
const Milestone = mongoose.model('Milestone', milestoneSchema);
const Task = mongoose.model('Task', taskSchema);

module.exports = {
  Goal,
  Milestone,
  Task
};






