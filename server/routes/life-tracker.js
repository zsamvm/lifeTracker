var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('myDb', ['trackingData']);

/* GET fast tracks on dashboard*/
router.get('/dash', function(req, res, next) {
    db.lifeTracker.find(function(err, lifeTracker) {
        if (err) {
            res.send(err);
        } else {
            res.json(lifeTracker);
        }
    });
});

/* POST/SAVE a Todo */
/*
router.post('/todo', function(req, res, next) {
    var todo = req.body;
    if (!todo.text || !(todo.isCompleted + '')) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.todos.save(todo, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    }
});
*/

/* PUT/UPDATE a Todo */
/*
router.put('/todo/:id', function(req, res, next) {
    var todo = req.body;
    var updObj = {};
    if (todo.isCompleted) {
        updObj.isCompleted = todo.isCompleted;
    }
    if (todo.text) {
        updObj.text = todo.text;
    }
    if (!updObj) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.todos.update({
            _id: mongojs.ObjectId(req.params.id)
        }, updObj, {}, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        });
    }
});
*/

/* DELETE a Todo */
/*
router.delete('/todo/:id', function(req, res) {
    db.todos.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, '', function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    });
});
*/

module.exports = router;
