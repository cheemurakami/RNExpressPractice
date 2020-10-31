const knex = require('../config/db').knex;
const bookshelf = require('bookshelf')(knex);

// Defining models
const User = bookshelf.model('User', {
  tableName: 'users'
})

// Defining models and table and relationship
// const User = bookshelf.model('User', {
//   tableName: 'users',
//   posts() {
//     return this.hasMany(Posts)
//   }
// })