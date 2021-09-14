module.exports = (sequelize, DataTypes) => {
  const CharBackground = sequelize.define("charbackground", {
    personalityTraits: {
      type: DataTypes.TEXT('big'),
      allowNull: true
    },
    bonds: {
      type: DataTypes.TEXT('big'),
      allowNull: true
    },
    ideals: {
      type: DataTypes.TEXT('big'),
      allowNull: true
    },
    flaws: {
      type: DataTypes.TEXT('big'),
      allowNull: true
    }
  });

  return CharBackground;
};