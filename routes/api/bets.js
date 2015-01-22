var models = require('../../models');
module.exports = function(router) {
    router.get('/bets', function(req, res) {
        models.Bet.findAll().then(function(bets) {
            res.json(bets);
        });
    });
    router.get('/bets/:id', function(req, res) {
        var id = req.params.id;
        models.Bet.find({
            where: {
                id: id
            }
        }).then(function(bet) {
            res.json(bet);
        });
    });
    router.post('/bets', function(req, res) {
        var bet = req.body;
        bet = models.Bet.build(bet);
        bet.save().then(function(result) {
            res.json(result);
        })
    });
}