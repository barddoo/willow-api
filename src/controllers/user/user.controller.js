import { Topic, User, UsersTopics } from '../../models';
import { errorResponse, successResponse } from '../../helpers';

export const findUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId);
    return successResponse(req, res, { user });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const register = async (req, res) => {
  try {
    const {
      email, name,
    } = req.body;

    const newUser = await User.create({ email, name });
    return successResponse(req, res, newUser);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const allUsers = async (req, res) => {
  try {
    const page = req.params.page || 1;
    const limit = 10;
    const users = await User.findAndCountAll({
      offset: (page - 1) * limit,
      limit,
    });
    return successResponse(req, res, { users });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const associateTopic = async (req, res) => {
  try {
    const { userId } = req.params;
    const { topicId } = req.body;

    const result = await UsersTopics.create({
      user_id: userId, topic_id: topicId,
    },
    { fields: ['user_id', 'topic_id'] });
    return successResponse(req, res, { user_id: result.user_id, topic_id: result.topic_id });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const listTopicByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const result = await User.findAll({
      where: { id: userId },
      raw: true,
      nest: true,
      include: { model: Topic },
    });
    const topics = result.map((obj) => obj.Topics).map((obj) => {
      const value = { ...obj };
      delete value.UsersTopics;
      return value;
    });
    return successResponse(req, res, {
      user_id: userId,
      topics,
    });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
