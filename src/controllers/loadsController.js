const { loadJoiSchema } = require('../models/Load.js');
const { saveLoad } = require('../services/loadsService');

// const getTrucks = async (req, res, next) => {
// 	const created_by = req.user._id;
// 	const allDriversTrucks = await getTrucksDb(created_by);
// 	return res.status(200).json({ trucks: allDriversTrucks });
// }
const addLoad = async (req, res, next) => {
	const created_by = req.user._id;
	const { name, payload, pickup_address, delivery_address, dimensions } = req.body;
	await loadJoiSchema.validateAsync({
		name, payload, pickup_address, delivery_address, dimensions
	});

	await saveLoad({
		name, payload, pickup_address, delivery_address, dimensions, created_by
	});
	return res.status(200).json({ message: `Load created successfully` });
}
module.exports = {
	addLoad,
}