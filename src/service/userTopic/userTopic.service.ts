import {errorResponse} from '../../helpers';
import {Request, Response} from "express";
import UsersTopics from "../../models/userTopics";

export const associate = async (req: Request, res: Response) => {
  try {
    const {topicId, userId} = req.body;

    const result = await UsersTopics.create({
        user_id: userId, topic_id: topicId,
      },
      {fields: ['user_id', 'topic_id']});
    return res.send({user_id: result.user_id, topic_id: result.topic_id});
  } catch (error: any) {
    return errorResponse(res, error.message);
  }
};

export const removeAssociation = async (req: Request, res: Response) => {
  try {
    const {topicId, userId} = req.body;

    const result = await UsersTopics.destroy({
      where: {user_id: userId, topic_id: topicId},
    });
    res.status(200).send({updates: result});
  } catch (error: any) {
    return errorResponse(res, error.message);
  }
};
