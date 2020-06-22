import Role from '../schemas/Role';

class RoleController {
  async index(_, res) {
    const roles = await Role.find();

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
      const role = await Role.findOneAndUpdate(roleId, req.body);

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
