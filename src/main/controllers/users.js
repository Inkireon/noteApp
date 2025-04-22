import User from '../models/Users.js';

const registerUser = async (req, res) => {
  try {
    const { username, email, password, fullName } = req.body;

    const user = await User.create({
      username,
      email,
      password,  // will be hashed via model
      fullName   // split into firstName/lastName
    });

    res.status(201).json({
      id: user.id,
      email: user.email,
      fullName: user.fullName
      // don't return password!
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default registerUser;
