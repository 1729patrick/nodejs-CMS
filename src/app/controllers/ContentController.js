import Content from '../schemas/Content';

class ContentController {
  async index(req, res) {
    const contents = await Content.find()
      .populate(['role', 'background', 'createdBy'])
      .sort({ createdAt: -1 });

    const contentsFormatted = contents.map(
      ({
        _id,
        title,
        description,
        background,
        role,
        createdAt,
        createdBy,
      }) => ({
        _id,
        title,
        description,
        background,
        role,
        createdAt,
        createdBy: `${createdBy?.firstName} ${createdBy?.lastName}`,
      })
    );

    if (req.role) {
      return res.json(
        contentsFormatted.filter(
          content => !content.role || content.role.level <= req.role
        )
      );
    }

    return res.json(contentsFormatted);
  }

  async store(req, res) {
    try {
      const session = await Content.create({
        ...req.body,
        createdBy: req.userId,
      });

      return res.json(session);
    } catch (e) {
      return res.status(400).json(e);
    }
  }

  async update(req, res) {
    const { sessionId } = req.params;

    try {
      const session = await Content.findOneAndUpdate(
        { _id: sessionId },
        req.body
      );

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
