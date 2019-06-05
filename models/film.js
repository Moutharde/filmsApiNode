'use strict';
module.exports = (sequelize, DataTypes) => {
  const Film = sequelize.define('Films', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
  }, {});
  Film.associate = function(models) {
    // associations can be defined here
  };
  return Film;
};