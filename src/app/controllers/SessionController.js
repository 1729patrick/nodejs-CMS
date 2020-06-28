import jwt from 'jsonwebtoken';
import md5 from 'crypto-js/md5';
import User from '../schemas/User';

import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).populate('role');

    if (!user) {
      res.status(401).json({ error: 'User not found.' });
    }

    if (md5(password).toString() !== user.password) {
      return res.status(401).json({ error: 'Password does not match.' });
    }

    const { id, role, firstName, lastName } = user;

    return res.json({
      user: { id, name: `${firstName} ${lastName}`, email, role: role?.level },
      token: jwt.sign({ userId: id, role: role?.level }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
