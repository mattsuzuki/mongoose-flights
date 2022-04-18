const flight = require('../models/flight');
const Flight = require('../models/flight');

module.exports = {
  index,

};

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', { flights });
  });
}

function create(req, res) {
  console.log(req.body)
  // convert nowShowing's checkbox to be a boolean
  // if checked, it will be "on", otherwise it will be undefined
  req.body.nowShowing = !!req.body.nowShowing;
  // remove any whitespace at the start and end of cast
  req.body.cast = req.body.cast.trim();
  if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const flight = new flight(req.body);
  flight.save(function(err) {
    if (err) return res.render('flights/new');
    console.log(flight);
    // created data, so redirect
    res.redirect('/flights');
  });
}

// function newFlight(req, res) {
//   res.render('flights/new');
// }