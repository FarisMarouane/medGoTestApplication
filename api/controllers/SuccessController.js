/**
 * SuccessController
 *
 * @description :: Directs to success page when form is submitted successfully
 */

 module.exports = {

 	success: function (req, res) {
 		return res.view('success');
 	}

 };
