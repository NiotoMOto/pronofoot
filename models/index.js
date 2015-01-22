'use strict';
var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var config = require(path.join(__dirname, '../config/config.json'))[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db = {};
fs.readdirSync(__dirname).filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
});
Object.keys(db).forEach(function(modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});
/*ASSOCIATIONS*/
sequelize.drop({
    forced: true
}).then(function() {
    sequelize.sync({
        forced: 'true'
    });
    for (var i = 0; i < 20; i++) {
        db.Bet.create({
            matchId: 137411,
            homeTeam: ' Stade Reims',
            awayTeam: 'Paris SG',
            pronoTeam: 'Paris SG',
            homeFlag: 'http://upload.wikimedia.org/wikipedia/de/9/9e/Stade_Reims_Logo.svg',
            awayFlag: 'http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Toulouse_Logo.svg',
        });
    }
});
// if (env === 'development') {
//     sequelize.sync({forced : 'true'});
// }
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;