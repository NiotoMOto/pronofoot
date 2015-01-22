'use strict';

module.exports = function(sequelize, DataTypes) {
  var Team = sequelize.define('Team', {
    name: DataTypes.STRING,
    externalId: DataTypes.INTEGER
  }, {
    classMethods: {

    }
  });

  return Team;
};