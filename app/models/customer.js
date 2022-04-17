const mongoose = require('mongoose'),
      {Schema} = mongoose;

let table = new Schema(
  {
      email: {
          type: String,
          default: null,
          lowercase: true
      },
      firstName:{
          type: String,
          trim: true,
          lowercase: true
      },
      lastName:{
          type: String,
          trim: true,
          lowercase: true
      }, 
      password: {
          type: String,
          trim: true,
      },
      mobile: {
          type: String,
          trim: true,
          default: null,
      },
      activeStatus:{
          type: Boolean,
          trim : true,
          default: true
      }
  },
  {
      timestamps: {
          createdAt: 'createdAt',
          updatedAt: 'updatedAt'
      },
  }
);

// module.exports = table
module.exports = mongoose.model(`customers`, table);