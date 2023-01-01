const uuid = require("uuid");
const path = require("path");

const ApiError = require("../error/ApiError");
const { Device, DeviceInfo } = require("../models/index");

class DeviceController {
  async create(req, res, next) {
    try {
      let { name, price, brand_id, type_id, info } = req.body;
      const { img } = req.files;
      const fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const device = await Device.create({
        name,
        price,
        brand_id,
        type_id,
        img: fileName,
      });
 
      if (info) {
        info = JSON.parse(info); // new formDate returns string we have to convert to json
        info.forEach((i) => {
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            device_id: device.id,
          });
        });
      }

      // TODO: add validation for this fields

      return res.json({ data: device });
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    let { brand_id, type_id, limit, page } = req.body;
    // for pagination
    page = page || 1;
    limit = limit || 9;
    const offset = page * limit - limit;
    // end pagination
    let devices;

    if (!brand_id && !type_id) {
      devices = await Device.findAndCountAll({ limit, offset });
    }

    if (brand_id && !type_id) {
      devices = await Device.findAndCountAll(
        { where: { brand_id } },
        limit,
        offset
      );
    }

    if (!brand_id && type_id) {
      devices = await Device.findAndCountAll(
        { where: { type_id } },
        limit,
        offset
      );
    }

    if (brand_id && type_id) {
      devices = await Device.findAndCountAll({
        where: { brand_id, type_id },
        limit,
        offset,
      });
    }

    // TODO: add response format
    res.json({ data: devices });
  }

  async getOne(req, res) {
    const { id } = req.params;
   console.log('ID', id);
    const device = await Device.findOne({ 
      where: { id },
      // model, fieldName
      include: [{model: DeviceInfo, as:'info'}]
    });

    res.json({ data: device });
  }
}

module.exports = new DeviceController();
