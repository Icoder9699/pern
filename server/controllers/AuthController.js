const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const ApiError = require("../error/ApiError");
const { User, Basket } = require("../models");

const generateJwt = (id, email, role) => {
  return jwt.sign({ id: id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};
class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;

    if (!email || !password) {
      return next(ApiError.badRequest("Некорректный емаил или пароль!"));
    }

    const candidate = await User.findOne({ where: { email } });

    if (candidate) {
      return next(
        ApiError.badRequest("Пользовател с таким емаилом уже существует!")
      );
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = await User.create({
      email,
      role,
      password: hashedPassword,
    });

    const basket = await Basket.create({
      user_id: newUser.id,
    });

    const token = generateJwt(newUser.id, newUser.email, newUser.role);

    return res.json(token);
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    console.log(email, password);

    if (!email && !password) {
      return next(new ApiError.badRequest('Пожалуйста введите нужные данные!'))
    }

    const user = await User.findOne({where: {email}})

    if (!user) {
      return next(
        ApiError.badRequest("Пользовател с таким емаилом не найден!")
      );
    }

    const comparePassword = bcrypt.compareSync(password, user.password);

    if (!comparePassword) {
      return next(ApiError.badRequest("Указан неправильный пароль!"));
    }

    const token = generateJwt(user.email, user.id, user.role);

    return res.json(token);
  }

  async check(req, res, next) {
   const token = generateJwt(req.user.id, req.user.email, req.user.email)

    res.json({token});
  }

  async getAll(req,res,next) {
    const users = await User.findAll()
    return res.json({users})
  }
}

module.exports = new UserController();
