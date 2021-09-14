module.exports = (sequelize, DataTypes) => {
  const CharHealth = sequelize.define("charhealth", {
    health: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    shield: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return CharHealth;
};