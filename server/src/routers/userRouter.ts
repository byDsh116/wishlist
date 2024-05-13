const userRouter = require('express').Router();
import { Request, Response } from 'express';
// import {User } from '../../db/models/';
const bcrypt = require('bcrypt');

import db from '../../src/db/models';

const DB: any = db;
const { User } = DB;

// interface IUser {
//   id: number;
//   email: string;
//   username: string;
//   password: string;
//   createdAt: Date;
//   updatedAt: Date;
// }

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
    });
    const userData: any = structuredClone(newUser.get({ plain: true }));
    delete userData.password;
    req.session.username = userData.username;
    console.log(req.session);
    // const newUserData = newUser.get();
    res.status(200).send(userData);
  } catch (error) {
    const { message } = error as Error;
    console.log(message);
    res.status(401).json(error);
  }
});

userRouter.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });
    const userData: any = structuredClone(user?.get({ plain: true }));

    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Неверный пароль' });
    }

    delete userData.password;
    req.session.username = user.username;
    return res.status(200).send(user);
  } catch (error) {
    return res.status(401).json(error);
  }
});

userRouter.get('/logout', async (req: Request, res: Response) => {
  try {
    req.session.destroy((error: any) => {
      if (error) {
        return res.status(401).json('error');
      } else {
        return res.clearCookie('Dsh');
      }
    });
  } catch {}
});

export default userRouter;
