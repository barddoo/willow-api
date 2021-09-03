import {errorResponse} from '../../helpers';
import {Request, Response} from "express";
import User from "../../models/user";
import UsersTopics from "../../models/userTopics";
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

export const associateTopic = async (req: Request, res: Response) => {
  try {
    const {userId} = req.params;
    const {topicId} = req.body;

    const result = await UsersTopics.create({
        user_id: userId, topic_id: topicId,
      },
      {fields: ['user_id', 'topic_id']});
    return res.send({user_id: result.user_id, topic_id: result.topic_id});
  } catch (error: any) {
    return errorResponse(res, error.message);
  }
};

export const listTopicByUser = async (req: Request, res: Response) => {
  try {
    const {userId} = req.params;

    const result = await User.findAll({
      where: {id: userId},
      raw: true,
      nest: true,
      include: {model: Topic},
    });
    // const topics = result.map((obj) => obj.Topics).map((obj) => {
    //   const value = {...obj};
    //   delete value.UsersTopics;
    //   return value;
    // });
    return res.send({
      user_id: userId,
      topics: result.map(value => value.topics),
    });
  } catch (error: any) {
    return errorResponse(res, error.message);
  }
};

export const removeAssociatedTopic = async (req: Request, res: Response) => {
  try {
    const {userId} = req.params;
    const {topicId} = req.body;

    await UsersTopics.destroy({
      where: {user_id: userId, topic_id: topicId},
    });
    return res.send({user_id: userId, topic_id: topicId});
  } catch (error: any) {
    return errorResponse(res, error.message);
  }
};
