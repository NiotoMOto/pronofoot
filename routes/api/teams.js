var models = require('../../models');
module.exports = function(router) {
    router.get('/teams', function(req, res) {
        models.Team.findAll().then(function(teams) {
            res.json(teams);
        });
    });
    router.get('/teams/:id', function(req, res) {
        var id = req.params.id;
        var filter = req.body.filter;
        console.log(filter);
        models.Team.find({
            where: {
                id: id
            }
        }).then(function(ligue) {
            res.json(team);
        });
    });
    router.post('/teams/search', function(req, res) {
        var filter = req.body.filter;
        models.Team.find({
            where: filter
        }).then(function(team) {
            res.json(team);
        });
    });
    router.post('/teams', function(req, res) {
        var team = req.body;
        team = models.Team.build(team);
        team.save().then(function(t) {
            res.json(t);
        })
    });
}