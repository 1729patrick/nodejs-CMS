import User from '../schemas/User';
import md5 from 'crypto-js/md5';

class UserController {
  async index(_, res) {
    const users = await User.find();

    return res.json(users);
  }

  async store(req, res) {
    try {
      const password = md5(req.body.password);

      const user = await User.create({ ...req.body, password });

      return res.json(user);
    } catch (e) {
      return res.status(400).json(e);
    }
  }

  async update(req, res) {
    const { userId } = req.params;

    try {
      const user = await User.findOneAndUpdate(userId, req.body);

      return res.json(user);
    } catch (e) {
      return res.status(400).json(e);
    }
  }

  async delete(req, res) {
    const { userId } = req.params;

    await User.findOneAndDelete(userId);

    return res.send();
  }
}

export default new UserController();
