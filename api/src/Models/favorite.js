const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
      "Favorite",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement:true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price:{
            type: DataTypes.DECIMAL(7,2),
            allowNull: false,
        },
      },
      { timestamps: false }
    );
  };