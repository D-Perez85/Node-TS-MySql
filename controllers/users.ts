import { Request, Response } from "express";
import User from "../models/user";

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.findAll({
    where: {
      estado: true,
    },
  });
  res.json({ users });
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
    if (user) {
      res.json({ user });
    } else {
      res.status(404).json({
        msg: `Controle el  id ingresado (${id}) -  no existe en base de datos`,
      });
    }
  };

export const postUser = async (req: Request, res: Response) => {
  const { body } = req;
    try {
        const existeEmail = await User.findOne({where: {email: body.email}});
        if (existeEmail) {
            return res.status(400).json({
              msg: "Ya existe un usuario con el email " + body.email,
            });
          }
      const user = await User.create(body);
      user.save();
      res.json(user);
      }catch (error) {
        console.log(error);
        res.status(500).json({
          msg: "Hable con el administrador",
        });
    }
  };

export const putUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req
    try {
      const user = await User.findByPk(id);
        if (!user) {
          return res.status(404).json({
            msg: "No existe un user con el id " + id,
          });
        }
      await user.update(body);
      res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
          msg: "Hable con el administrador",
     });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({
        msg: "No existe un user con el id " + id,
      });
    }
  /**  Baja logica  */
  // await user.update({ estado: false });
  /** Delete DB  */
  await user.destroy();
  res.json(user);
};
