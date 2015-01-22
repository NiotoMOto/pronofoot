'use strict';
module.exports = function(sequelize, DataTypes) {
    var Bet = sequelize.define('Bet', {
        name: DataTypes.STRING,
        matchId: DataTypes.INTEGER,
        homeTeam: DataTypes.STRING,
        awayTeam: DataTypes.STRING,
        pronoTeam: DataTypes.STRING,
        homeFlag: DataTypes.STRING,
        awayFlag: DataTypes.STRING,
    }, {
        classMethods: {}
    });
    return Bet;
};
