var query = require('../libraries/query');

exports.index = function (req, res) {
    res.render('index', {
        title: 'Hyperledger Sample Application',
    });
}

exports.post = function (req, res) {
    let car = {
        id: '2',
        color: 'blue',
        manufacturer: 'VinGroup',
        owner: 'Pham Phu Doan'
    }
    var queryResult = query.findCar('2').then((result) => {
        res.send(result);
    });
}