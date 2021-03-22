const db = require("../models");
const Workout = require("../models/Workout");

module.exports = function (app) {


    app.get("/api/workouts", (req, res) => {
        db.find({})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.put("/api/workouts/", ({ body }, res) => {

    })

    app.post("/api/workouts", ({ body }, res) => {
        const newWorkout = new Workout(body);

        Workout.create(newWorkout)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/api/workout/range", (req, res) => {

    })

}