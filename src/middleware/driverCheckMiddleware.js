const { User } = require('../models/Users');

const volonteerCheckMiddleware = async (req, res, next) => {
	const userId = req.user._id;
	console.log(userId);
	const currentUser = await User.findById(userId);
	console.log(currentUser);
	const { role } = currentUser;
	role === 'VOLONTEER' ? next() : res.status(403).json({ message: `Forbidden. You are not volonteer!` });
}

module.exports = {
	volonteerCheckMiddleware,
};
