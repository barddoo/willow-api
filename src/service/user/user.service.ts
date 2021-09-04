import {errorResponse} from '../../helpers';
import {Request, Response} from "express";
import User from "../../models/user";
import Topic from "../../models/topic";

export const findUser = async (req: Request, res: Response) => {
  try {
    const {userId} = req.params;
    const user = await User.findByPk(userId);
    return res.send(user);
  } catch (error: any) {
    return errorResponse(res, error.message);
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const {
      email, name,
    } = req.body;

    const newUser = await User.create({email, name});
    return res.send(newUser);
  } catch (error: any) {
    return errorResponse(res, error.message);
  }
};

export const allUsers = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.params.page) || 1;
    const limit = 10;
    const users = await User.findAndCountAll({
      offset: (page - 1) * limit,
      limit,
    });
    return res.send({users});
  } catch (error: any) {
    return errorResponse(res, error.message);
  }
};

export const listTopicByUser = async (req: Request, res: Response) => {
  try {
    const {userId} = req.params;

    const result = await User.findAll({
      where: {id: userId},
      include: {model: Topic},
    });

    return res.send({
      user_id: userId,
      topics: result.map(value => value.topics).filter(value => value?.length != 0),
    });
  } catch (error: any) {
    return errorResponse(res, error.message);
  }
};
