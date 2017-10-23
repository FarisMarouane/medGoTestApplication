/**
 * ErrorController
 *
 * @description :: Directs to an error page when an error is encountred while submitting the form
 */

 module.exports = {

 	error: function (req, res) {
 		res.serverError('Error submitting the form');
 	}

 };
