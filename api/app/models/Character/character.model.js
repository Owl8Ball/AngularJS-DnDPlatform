module.exports = (sequelize, DataTypes) => {
  const Character = sequelize.define("character", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    player: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Character;
};