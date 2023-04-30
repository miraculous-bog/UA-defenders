const { User } = require('../models/Users');

const driverCheckMiddleware = async (req, res, next) => {
	const userId = req.user._id;
	console.log(userId);
	const currentUser = await User.findById(userId);
	console.log(currentUser);
	const { type } = currentUser;
	type === 'DRIVER' ? next() : res.status(403).json({ message: `Forbidden. You are not driver!` });
}

module.exports = {
	driverCheckMiddleware,
};
