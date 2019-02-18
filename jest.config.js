const path = require('path');

const config = {
  testPathIgnorePatterns: [`${path.join(__dirname, './tutorials')}`]
};

module.exports = config;
