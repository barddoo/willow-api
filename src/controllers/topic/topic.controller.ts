import Topic from '../../models/topic';
import {errorResponse} from '../../helpers';
import {Request, Response} from 'express';

export const find = async (req: Request, res: Response) => {
  try {
    const {topicId} = req.params;
    const topic = await Topic.findByPk(topicId);
    return res.send(topic);
  } catch (error: any) {
    return errorResponse(res, error.message);
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    // eslint-disable-next-line camelcase
    const {english_name, klingon_name} = req.body;

    const newTopic = await Topic.create({english_name, klingon_name});
    return res.send(newTopic);
  } catch (error: any) {
    return errorResponse(res, error.message);
  }
};

export const all = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.params.page) || 1;
    const limit = 10;
    const users = await Topic.findAndCountAll({
      offset: (page - 1) * limit,
      limit,
    });
    return res.send({users});
  } catch (error: any) {
    return errorResponse(res, error.message);
  }
};
