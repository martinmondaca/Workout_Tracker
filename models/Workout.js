const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            _id: false,
            type: {
                type: String,
                trim: true,
                // required: "Type is required"
            },
            name: {
                type: String,
                trim: true,
                // required: "Name is required"
            },
            duration: {
                type: Number,
                trim: true,
                // required: "Duration is required"
            },
            weight: {
                type: Number,
                trim: true,
                // required: "Weight is required"
            },
            reps: {
                type: Number,
                trim: true,
                // required: "Reps are required"
            },
            sets: {
                type: Number,
                trim: true,
                // required: "Sets are required"
            },
            distance: {
                type: Number,
                trim: true,
                required: false
            }
        }
    ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;