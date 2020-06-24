import File from '../schemas/File';

class FileController {
  async create(req, res) {
    const { originalname: name, filename: path } = req.file;
    console.log(name, path);
    const file = await File.create({ name, path });

    return res.json(file);
  }
}

export default new FileController();
