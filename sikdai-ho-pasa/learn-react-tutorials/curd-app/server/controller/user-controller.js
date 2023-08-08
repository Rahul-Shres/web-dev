// Import the 'User' model from the 'user-schema.js' file
// The 'User' model allows us to interact with the 'user' collection in the MongoDB database
import User from '../schema/user-schema.js';

export const addUser = async (req, res) => {
  console.log('Hello');

  // Extract the user data from the request body
  const user = req.body;
  console.log(user);

  // Create a new instance of the 'User' model with the user data
  const newUser = new User(user);

  try {
    // Save the new user to the database using the 'save' method of the 'User' model
    await newUser.save();

    // If the user is successfully added, send a response with status code 201 and the JSON data of the new user
    res.status(201).json(newUser);
  } catch (error) {
    // If an error occurs while saving the user to the database, send a response with status code 409 and an error message
    res.status(409).json({ message: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get a user by id
export const getUser = async (request, response) => {
  try{
      const user = await User.findById(request.params.id);
      response.status(200).json(user);
  }catch( error ){
      response.status(404).json({ message: error.message })
  }
}


// // Save data of edited user in the database
// export const editUser = async (request, response) => {
//     try {
//       // Find the existing user in the database by its ID
//       const existingUser = await User.findById(request.params.id);
  
//       if (!existingUser) {
//         return response.status(404).json({ message: 'User not found' });
//       }
  
//       // Update the existing user with the new data from the request body
//       existingUser.name = request.body.name;
//       existingUser.username = request.body.username;
//       existingUser.email = request.body.email;
//       existingUser.phone = request.body.phone;
  
//       // Save the updated user to the database
//       await existingUser.save();
  
//       response.status(200).json(existingUser);
//     } catch (error) {
//       response.status(409).json({ message: error.message });
//     }
//   };
  
