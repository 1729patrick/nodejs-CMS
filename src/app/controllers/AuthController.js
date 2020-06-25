import jwt from 'jsonwebtoken';
import md5 from 'crypto-js/md5';
import User from '../schemas/User';
import Role from '../schemas/Role';

import authConfig from '../../config/auth';

class AuthController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).populate('role');

    if (!user) {
      res.status(401).json({ error: 'User not found.' });
    }

    if (md5(password).toString() !== user.password) {
      return res.status(401).json({ error: 'Password does not match.' });
    }

    const { id, name, role } = user;

    return res.json({
      user: { id, name, email, role: role.name },
      token: jwt.sign({ id, role: role.name }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new AuthController();
