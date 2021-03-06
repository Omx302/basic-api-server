"use strict";

const Clothes = (sequelize, DataTypes) =>
  sequelize.define("Clothes", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    clothId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

module.exports = Clothes;
