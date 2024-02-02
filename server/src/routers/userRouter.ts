const userRouter = require('express').Router();
import User from '../db/models/user';
import { Request, Response } from 'express';

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
    return res.status(400).send('huy');
  }
});

userRouter.post('/create', async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const newUser = await User.create(req.body);
    const newUserData = newUser.get();
    res.json(newUserData);
  } catch (error) {
    res.status(401).json(error);
  }
});

export default userRouter;
