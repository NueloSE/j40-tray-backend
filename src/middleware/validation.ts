import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

// Middleware to handle validation errors
const handleValidationErrors = async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Middleware to validate user request data
export const validateMyUserRequest = [
  body('name').isString().notEmpty().withMessage('Name must be a string'),
  body('address').isString().notEmpty().withMessage('Address must be a string'),
  body('phoneNumber').isString().notEmpty().withMessage('Phone Number must be a string'),
  handleValidationErrors,
];
