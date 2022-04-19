const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {
        type: String, 
        match: /[a-z][1-100]\d?/
    }, 
    price: {
        type: Number, 
        min: 0
    }, 
    flight:{
        type: Schema.Types.ObjectId,
        ref: 'Flight'
    }
});

module.exports =mongoose.model('Ticket', ticketSchema);