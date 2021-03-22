const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: Date,
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Type is required"
            },
            name: {
                type: String,
                trim: true,
                required: "Name is required"
            },
            duration: {
                type: Number,
                trim: true,
                required: "Duration is required"
            },
            weight: {
                type: Number,
                trim: true,
                required: "Weight is required"
            },
            reps: {
                type: Number,
                trim: true,
                required: "Reps are required"
            },
            sets: {
                type: Number,
                trim: true,
                required: "Sets are required"
            },
            distance: {
                type: Number,
                trim: true,
                required: false
            }
        }
    ]
},
    {
        toJSON: {
            virtuals: true,
        },
    }
);

WorkoutSchema.virtual("totalDuration").get(() => {
    return this.exercises.reduce((total, exercise) => total + exercise.duration, 0)
})


WorkoutSchema.methods.currentDate = () => { this.day = Date.now() }

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;