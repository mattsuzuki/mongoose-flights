const mongoose = require('mongoose');
// Optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: {
    type: String,
    required: true
  },
  airport: {
    type: String,
    default: 'DEN',
    enum: ['LAX', 'HRK',  ]
  },

  flightno: {
    type: Number,
    required: true,
    enum:[]
    
  },
  deports: {
    type: Date,
    Default: Date++
  }
});
  // Mongoose will automatically add and maintain
  // a createdAt and updatedAt property on the docs


module.exports = mongoose.model('Flight', flightSchema);