import { Request, Response } from 'express';
import User from '../models/user';

// Controller to get the current user based on user ID from the request
const getCurrentUser = async (req: Request, res: Response) => {
  try {
    // Find user by ID (extracted from request userId)
    const currentUser = await User.findOne({ _id: req.userId });
    if (!currentUser) {
      // If user not found, return 404 status
      return res.status(404).json({ message: 'User not found' });
    }

    // Return the found user
    res.json(currentUser);
  } catch (error) {
    // Log error and return 500 status for server error
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

// Controller to create a new user if they do not already exist
const createCurrentUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id } = req.body;
    // Check if a user with the given auth0Id already exists
    const existingUser = await User.findOne({ auth0Id });

    // If user exists, respond with a 200 status
    if (existingUser) {
      return res.status(200).send();
    }

    // Create a new user and save it to the database
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser.toObject());
  } catch (error) {
    // Log error and return 500 status for server error
    console.log(error);
    res.status(500).json({ message: 'Error creating user' });
  }
};

// Controller to update the current user's details
const updateCurrentUser = async (req: Request, res: Response) => {
  try {
    const { name, address, phoneNumber } = req.body;
    // Find user by ID (extracted from request userId)
    const user = await User.findById(req.userId);

    // If user not found, return 404 status
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user details
    user.name = name;
    user.address = address;
    user.phoneNumber = phoneNumber;

    // Save the updated user
    await user.save();

    // Return the updated user
    res.send(user);
  } catch (error) {
    // Log error and return 500 status for server error
    console.log(error);
    res.status(500).json({ message: 'Error updating user' });
  }
};

export default {
  getCurrentUser,
  createCurrentUser,
  updateCurrentUser,
};
