module.exports = (sequelize, DataTypes) => {
  const CharStats = sequelize.define("charstats", {
    score: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ability: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bonus: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    save: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return CharStats;
};