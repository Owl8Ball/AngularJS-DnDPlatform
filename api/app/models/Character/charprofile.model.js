module.exports = (sequelize, DataTypes) => {
  const CharProfile = sequelize.define("charprofile", {
    level: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    experience: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    skin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    race: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true
    },
    deity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    class: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alignment: {
      type: DataTypes.STRING,
      allowNull: true
    },
    height: {
      type: DataTypes.STRING,
      allowNull: true
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hair: {
      type: DataTypes.STRING,
      allowNull: true
    },
    eyes: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  return CharProfile;
};