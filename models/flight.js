const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    default: 'DEN',
    enum: ['LAX', 'HRK',  ]
  },
  arrival: Date
});

const flightSchema = new Schema({
  airline: {
    type: String,
    required: true
  },


  flightno: {
    type: Number,
    required: true,
    enum:[]
    
  },
  departs: {
    type: Date,
    Default: function(){
      let d = new Date();
      let year = d.getFullYear();
      let month = d.getMonth();
      let day = d.getDate();
      let result = new Date(year + 1, month, day)
      return result;
    
  }
}

});



module.exports = mongoose.model('Flight', flightSchema);