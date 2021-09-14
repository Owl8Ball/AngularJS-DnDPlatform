const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./User/user.model.js")(sequelize, Sequelize);
db.characters = require("./Character/character.model.js")(sequelize, Sequelize);
db.charbackground = require("./Character/charbackground.model.js")(sequelize, Sequelize);
db.charhealth = require("./Character/charhealth.model.js")(sequelize, Sequelize);
db.charprofile = require("./Character/charprofile.model.js")(sequelize, Sequelize);
db.charstats = require("./Character/charstats.model.js")(sequelize, Sequelize);

//db.users.hasMany(db.characters, { as: "characters" });
db.characters.belongsTo(db.users, { foreignKey: "userId", as: "user" });


db.charbackground.belongsTo(db.characters, { foreignKey: "charId", as: "character" });
db.charhealth.belongsTo(db.characters, { foreignKey: "charId", as: "character" });
db.charprofile.belongsTo(db.characters, { foreignKey: "charId", as: "character" });

//db.characters.hasMany(db.charstats, { as: "charstats" });
db.charstats.belongsTo(db.characters, { foreignKey: "charId", as: "character" });

module.exports = db;