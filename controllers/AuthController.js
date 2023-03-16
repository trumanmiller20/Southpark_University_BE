const { User } = require("../models");
const middleware = require("../middleware");

const Register = async (req, res) => {
  console.log('authController')
	try {
		const { email, password } = req.body;
		let passwordDigest = await middleware.hashPassword(password);
		const user = await User.create({ email, password: passwordDigest });
		res.send(user);
	} catch (err) {
		throw err;
	}
};

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      raw: true,
    });
   
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      req.body.password
    );

    if (matched) {
      let payload = {
        id: user.id,
        email: user.email,
        name: user.name
      };

      let token = middleware.createToken(payload);
      return res.send({ user: payload, token });
    }
    res.status(401).send({ status: "Error", msg: "Unauthorized" });
  } catch (error) {
    console.log(error);
    res.status(401).send({ status: "Error", msg: "An error has occurred!" });
  }
};


const CheckSession = async (req, res) => {
  const { payload } = res.locals;
  res.send(payload);
};

module.exports = {
  Register,
  Login,
  CheckSession,
};