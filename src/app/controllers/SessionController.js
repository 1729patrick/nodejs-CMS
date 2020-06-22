import Session from '../schemas/Session';

class SessionController {
  async index(_, res) {
    const sessions = await Session.find();

    return res.json(sessions);
  }

  async store(req, res) {
    try {
      const session = await Session.create(req.body);

      return res.json(session);
    } catch (e) {
      return res.status(400).json(e);
    }
  }

  async update(req, res) {
    const { sessionId } = req.params;

    try {
      const session = await Session.findOneAndUpdate(sessionId, req.body);

      return res.json(session);
    } catch (e) {
      return res.status(400).json(e);
    }
  }

  async delete(req, res) {
    const { sessionId } = req.params;

    await Session.findOneAndDelete(sessionId);

    return res.send();
  }
}

export default new SessionController();
