const userRouter = require('express').Router();
import User from '../db/models/user';
import { Request, Response } from 'express';
const bcrypt = require('bcrypt');

interface IUser {
  id: number;
  email: string;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

userRouter.get('/find/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (!id) {
      throw new Error('Id in params is incorrect');
    }
    const user = await User.findByPk(id);
    if (!user) {
      //TODO:  использовать правильные коды ответа
      return res.status(400).send('User not found');
    }
    return res.json(user.get({ plain: true }));
  } catch (e) {
    console.error(e);
    return res.status(400).send('er');
  }
});

userRouter.post('/create', async (req: Request, res: Response) => {
  const { email, username, password } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      username,
      password: hash,
    } as IUser);
    const newUserData = newUser.get();
    // req.session.newUser = newUser;
    res.json(newUserData);
  } catch (error) {
    res.status(401).json(error);
  }
});

userRouter.post('/login', async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    console.log(`is this email? `);
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      return res
        .status(401)
        .json({ message: 'Email or password is incorrect' });
    }
    return res.json(user);
  } catch (error) {
    return res.status(401).json(error);
  }
});

export default userRouter;
