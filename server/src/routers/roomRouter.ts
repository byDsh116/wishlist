const roomRouter = require('express').Router();
import { Request, Response } from 'express';

import db from '../../src/db/models';

const DB: any = db;
const { Room } = DB;

interface IRoom {
  id: number;
  roomName: string;
  roomDescription: string;
  ownerId: number;
  createdAt: Date;
  updatedAt: Date;
}

roomRouter.post('/create', async (req: Request, res: Response) => {
  const { roomName, roomDescription, userId } = req.body;
  //   TODO: нужно ли передавать овнер айди тут?
  try {
    const newRoom = await Room.create({
      roomName,
      roomDescription,
      userId,
    });
    const roomData: any = structuredClone(newRoom.get({ plain: true }));
    req.session.username = roomData.name;
    // const newUserData = newUser.get();
    res.status(200).send(roomData);
  } catch (error) {
    const { message } = error as Error;
    console.log(message);
    res.status(401).json(error);
  }
});
// roomRouter.get('/find/:id', async (req: Request, res: Response) => {
//   const { id } = req.params;
//   try {
//     if (!id) {
//       throw new Error('Id in params is incorrect');
//     }
//     const user = await User.findByPk(id);
//     if (!user) {
//       return res.status(400).send('User not found');
//     }
//     return res.json(user.get({ plain: true }));
//   } catch (e) {
//     console.error(e);
//     return res.status(400).send('er');
//   }
// });

// roomRouter.post('/login', async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({
//       where: {
//         email,
//       },
//     });
//     const userData: any = structuredClone(user?.get({ plain: true }));

//     if (!user) {
//       return res.status(404).json({ message: 'Пользователь не найден' });
//     }

//     const isPasswordCorrect = await bcrypt.compare(password, user.password);
//     if (!isPasswordCorrect) {
//       return res.status(401).json({ message: 'Неверный пароль' });
//     }

//     delete userData.password;
//     req.session.username = user.username;
//     return res.status(200).send(user);
//   } catch (error) {
//     return res.status(401).json(error);
//   }
// });

// roomRouter.get('/logout', async (req: Request, res: Response) => {
//   try {
//     req.session.destroy((error: any) => {
//       if (error) {
//         return res.status(401).json('error');
//       } else {
//         return res.clearCookie('Dsh');
//       }
//     });
//   } catch {}
// });

export default roomRouter;
