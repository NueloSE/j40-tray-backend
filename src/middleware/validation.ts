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

export const validateMyRestaurantRequest = [
  body('restaurantName').notEmpty().withMessage('Restaurant Name is required'),
  body('city').notEmpty().withMessage('City is required'),
  body('region').notEmpty().withMessage('Region is required'),
  body('deliveryPrice').isFloat({ min: 0 }).withMessage('Delivery price must be a positive number'),
  body('estimatedDeliveryTime')
    .isInt({ min: 0 })
    .withMessage('Estimated delivery time must be a positive integer'),
  body('cuisines')
    .isArray()
    .withMessage('Cuisines must be an array')
    .not()
    .isEmpty()
    .withMessage('Cuisines array cannot be empty'),
  body('menuItems').isArray().withMessage('Menu items must be an array'),
  body('menuItems.*.name').notEmpty().withMessage('Menu item name is required'),
  body('menuItems.*.price')
    .isFloat({ min: 0 })
    .withMessage('Menu item price is required and must be a positive number'),
  handleValidationErrors,
];
