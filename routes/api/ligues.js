var models = require('../../models');
module.exports = function(router) {
    router.get('/ligues', function(req, res) {
        models.Ligue.findAll().then(function(ligues) {
            res.json(ligues);
        });
    });
    router.get('/ligue/:id', function(req, res) {
        var id = req.params.id;
        models.Ligue.find({
            where: {
                id: id
            }
        }).then(function(ligue) {
            res.json(ligue);
        });
    });
    router.post('/ligues/search', function(req, res) {
        var filter = req.body.filter;
        models.Ligue.find({
            where: filter
        }).then(function(ligue) {
            res.json(ligue);
        });
    });
    router.post('/ligues', function(req, res) {
        var ligue = req.body;
        ligue = models.Ligue.build(ligue);
        ligue.save().then(function(result) {
            res.json(result);
        })
    });
}