import express from 'express';
import MyUserControllers from '../controllers/MyUserControllers';
import { jwtCheck, jwtParse } from '../middleware/auth';
import { validateMyUserRequest } from '../middleware/validation';

const router = express.Router(); // Create a new router instance

// Route to get the current user's information
// Requires JWT authentication and parsing
router.get('/', jwtCheck, jwtParse, MyUserControllers.getCurrentUser);

// Route to create a new current user
// Requires JWT authentication
router.post('/', jwtCheck, MyUserControllers.createCurrentUser);

// Route to update the current user's information
// Requires JWT authentication and parsing
// Also validates the request data
router.put('/', jwtCheck, jwtParse, validateMyUserRequest, MyUserControllers.updateCurrentUser);
export default router;
