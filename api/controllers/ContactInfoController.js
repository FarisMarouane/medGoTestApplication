/**
 * ContactInfoController
 *
 * @description :: Server-side logic for managing Contactinfoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  save: function (req, res) {
		// YOUR CODE GOES HERE

    // Check that the name and email fields are not empty using express-validator
    req.checkBody('name', 'Name required').notEmpty();
    req.checkBody('email', 'Email required').isEmail().withMessage('Must be an email').trim().normalizeEmail();

    // Trim and escape the name field.
    req.sanitize('name').escape();
    req.sanitize('name').trim();

    // Trim and escape the message field.
    req.sanitize('message').escape();
    req.sanitize('message').trim();

 		ContactInfo.create({email: req.body.email, name: req.body.name, message: req.body.message}).exec(function (err, newFormSubmission) {
 			if (err) {
 				console.log(err);
 			} else {
 				console.log('The new form submission: ', newFormSubmission);
 				res.status(200).end('Forma data received');
 			}
 		});
  },

  hi: (req, res) => {
    return res.end('Hi there!');
  }

};
