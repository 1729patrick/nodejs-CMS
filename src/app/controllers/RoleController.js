import Role from '../schemas/Role';

class RoleController {
  async index(req, res) {
    const roles = await Role.find({ level: { $lte: req.role } }).sort({
      level: -1,
    });

    return res.json(roles);
  }

  async store(req, res) {
    try {
      const role = await Role.create(req.body);

      return res.json(role);
    } catch (e) {
      return res.status(400).json(e);
    }
  }

  async update(req, res) {
    const { roleId } = req.params;

    try {
      const role = await Role.findOneAndUpdate({ _id: roleId }, req.body);

      return res.json(role);
    } catch (e) {
      return res.status(400).json(e);
    }
  }

  async delete(req, res) {
    const { roleId } = req.params;

    await Role.findOneAndDelete(roleId);

    return res.send();
  }
}

export default new RoleController();
