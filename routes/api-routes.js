const express = require("express")
const router = express.Router()
const db = require("../models");

//get last workout
router.get("/api/workouts", (req, res) => {
    // res.send("works")
    db.Workout.find({})
        .then(data => {
            console.log(data)
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});

//add exercise
router.put("/api/workouts/:id", (req, res) => {
    // console.log(req.params.id)
    // console.log(req.body)
    // res.send("works")
    console.log("id")
    console.log(req.params.id)
    console.log("body")
    console.log(req.body)
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
    const newWorkout = new db.Workout(body);
    newWorkout.currentDate()
    console.log(body)
    db.Workout.create(newWorkout)
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
        // .sort({ _id: -1 })
        .limit(7)
        .then((dbWorkouts) => {
            console.log(dbWorkouts);
            res.json(dbWorkouts);
        })
        .catch((err) => {
            res.json(err);
        });

    // db.Workout.find({})
    //     .then(data => {
    //         console.log(data)
    //         res.json(data);
    //     })
    //     .catch(err => {
    //         res.json(err);
    //     });
});

module.exports = router;