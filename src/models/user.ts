import mongoose from 'mongoose';

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  auth0Id: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  name: {
    type: String,
  },

  address: {
    type: String,
  },

  phoneNumber: {
    type: String,
  },
});

// Create the User model from the schema
const User = mongoose.model('User', userSchema);
export default User;
