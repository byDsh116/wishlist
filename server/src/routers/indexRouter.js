const router = require('express').Router;
const { User } = require('../../db/models/user');

// router.get('/', async(req, res)=>{
//     try {
//         const users = await User
//     }
// });

router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const newUser = await User.create(req.body);
    const newUserData = newUser.get();
    res.json(newUserData);
  } catch (error) {
    res.status(401).json(err);
  }
});
