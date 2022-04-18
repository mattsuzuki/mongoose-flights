const Flight = require("../models/flight");

module.exports = {
  index,
  new: newFlight,
  create,
  show
};

function index(req, res) {
  Flight.find({}, function (err, flights) {
    res.render("flights/index", { flights });
  });
}

function create(req, res) {
  req.body.nowShowing = !!req.body.nowShowing;
  // remove any whitespace at the start and end of cast
  req.body.cast = req.body.cast.trim();
  if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  const flight = new flight(req.body);
  flight.save(function (err) {
    if (err) return res.render("flights/new");
    console.log(flight);
    // created data, so redirect
    res.redirect("/flights");
  
  });
}
function show(req, res) {
	Flight.findById(req.params.id, function(err, flight) {
		Ticket.find({ flight: flight._id }, function(err, tickets) {
			res.render('flights/show', {
				flight,
				tickets
			});
		});
	});
}

// function newFlight(req, res) {
//   res.render('flights/new');
// }

function newFlight() {
  console.log(`hello`);
}
