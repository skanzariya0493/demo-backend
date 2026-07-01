require("dotenv").config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/demo_db', {
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: process.env.DATABASE_URL?.includes('sslmode=require')
      ? {
          require: true,
          rejectUnauthorized: false,
        }
      : false,
  },
});

module.exports = sequelize;