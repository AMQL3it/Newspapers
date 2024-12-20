const logger = require("../common/logger");
const sequelize = require("./config");

const DBconnection = async () => {
    try {
      await sequelize.authenticate();
      // console.log('DB connection successfully.');
      logger.info('DB connection successfully.');
      DBLoader();
      return sequelize; 
    } catch (error) {
      // console.error('Unable to connect to the database:',error);
      logger.error(`Unable to connect to the database: `);
      throw error; 
    }
};

const Models = require("./models");

// { alter: true }
const DBLoader = async () => {
    try {
      for (const modelName in Models) {
        await Models[modelName].sync();
        logger.warning(`${modelName} table created successfully.`);
      }
    } catch (error) {
      console.error('Unable to create tables:', error);
      throw error; 
    }
}

module.exports = { DBconnection, DBLoader };