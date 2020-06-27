import Content from '../schemas/Content';

class ContentController {
  async index(_, res) {
    const contents = await Content.find().populate(['role', 'background']);

    return res.json(contents);
  }

  async store(req, res) {
    try {
      const session = await Content.create(req.body);

      return res.json(session);
    } catch (e) {
      return res.status(400).json(e);
    }
  }

  async update(req, res) {
    const { sessionId } = req.params;

    try {
      const session = await Content.findOneAndUpdate(sessionId, req.body);

      return res.json(session);
    } catch (e) {
      return res.status(400).json(e);
    }
  }

  async delete(req, res) {
    const { sessionId } = req.params;

    await Content.findOneAndDelete(sessionId);

    return res.send();
  }
}

export default new ContentController();
