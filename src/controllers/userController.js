const bcrypt = require('bcryptjs');
const { User } = require('../models/Users.js');


const getUser = async (req, res, next) => {
	console.log(req.user)
	if (req.user) {
		const userId = req.user._id;
		const { _id, type, email, created_date } = await User.findById(userId);
		res.json({ user: { _id, type, email, created_date } });
	} else {
		res.status(400);
	}
};

const deleteUser = async (req, res, next) => {
	const { userId } = req.user;
	const user = await User.findById(userId);

	try {

		await user.delete();

		res.json({
			message: "Success",
		});

	} catch (error) {
		res.status(400)
	}

}

const changeUser = async (req, res, next) => {
	const userId = req.user._id;
	const user = await User.findById(userId);

	const { oldPassword, newPassword } = req.body;

	const checkPassword = await bcrypt.compare(String(oldPassword), String(user.password));

	if (checkPassword && newPassword) {
		const passwordForDb = await bcrypt.hash(newPassword, 10);
		user.password = passwordForDb;
		await user.save();
		res.json({
			message: "Success",
		})
	} else res.status(400).json({ "message": "Bed Request" });

}

module.exports = {
	getUser,
	deleteUser,
	changeUser
};
