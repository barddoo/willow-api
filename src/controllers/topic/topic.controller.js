import { Topic } from '../../models';
import { errorResponse, successResponse } from '../../helpers';

export const find = async (req, res) => {
  try {
    const { topicId } = req.params;
    const topic = await Topic.findByPk(topicId);
    return successResponse(req, res, topic);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const register = async (req, res) => {
  try {
    // eslint-disable-next-line camelcase
    const { english_name, klingon_name } = req.body;

    const newTopic = await Topic.create({ english_name, klingon_name });
    return successResponse(req, res, newTopic);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const all = async (req, res) => {
  try {
    const page = req.params.page || 1;
    const limit = 10;
    const users = await Topic.findAndCountAll({
      offset: (page - 1) * limit,
      limit,
    });
    return successResponse(req, res, { users });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
