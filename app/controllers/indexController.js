var query = require('../libraries/query');

exports.index = function (req, res) {
    res.render('index', {
        title: 'Hyperledger Sample Application',
    });
}

exports.findCar = function (req, res) {
    let carId = req.params['id'];
    var queryResult = query.findCar(carId).then((result) => {
        res.send(result);
    });
}

exports.createCar = function (req, res) {
    let car = {
        id : req.body.id,
        color: req.body.color,
        manufacturer: req.body.manufacturer,
        owner: req.body.owner
    };

    query.createCar(car).then((result) => {
        res.send(result);
    })
}

exports.changeOwner = function (req, res) {
    let carId = req.params['id'];
    let newOwner = req.params['newOwner'];
    query.changeOwner(carId, newOwner).then((result) => {
        res.send(result);
    })
}