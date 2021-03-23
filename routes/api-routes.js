const express = require("express")
const router = express.Router()
const db = require("../models");

//get last workout
router.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration',
                },
            },
        },
    ])
        .sort({ day: -1 })
        .limit(1)
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
});

//add exercise
router.put("/api/workouts/:id", (req, res) => {

    db.Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } }, { new: true })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        })
})

//create workout
router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
        .then(data => {
            console.log(data)
            res.json(data);
        })
        .catch(err => {
            console.log(err)
            res.json(err);
        });
});

//get workouts in range
router.get('/api/workouts/range', (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration',
                },
            },
        },
    ])
        .sort({ day: -1 })
        .limit(7)
        .sort({ _id: 1 })
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router;