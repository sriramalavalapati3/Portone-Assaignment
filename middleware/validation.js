const { body, param, validationResult } = require('express-validator');

// validation and sanitization of input coming from client slide , just to avoid sql injection and Cross-Site Scripting attacks

exports.validatePaymentIntent = [
  body('amount')
    .isInt({ gt: 0 })
    .withMessage('Amount must be a positive integer'),   // checking amount should be int and greater than 0
  body('currency')
    .isLength({ min: 3, max: 3 })
    .withMessage('Currency must be a 3-letter code'),   // checking length of currency code 
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next(); // after clearing all challenges , it is forwarding process to api paths
  }
];

// same happens in  below code like above

exports.validateIdParam = [
  param('id')
    .isString()
    .withMessage('ID must be a string'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
