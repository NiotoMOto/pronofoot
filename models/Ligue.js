'use strict';

module.exports = function(sequelize, DataTypes) {
  var Ligue = sequelize.define('Ligue', {
    name: DataTypes.STRING,
    externalId: DataTypes.INTEGER
  }, {
    classMethods: {

    }
  });

  return Ligue;
};