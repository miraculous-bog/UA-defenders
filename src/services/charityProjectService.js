const { CharityProject } = require('../models/CharityProject');

// const getTrucksDb = async (driverId) => await Truck.find({ created_by: driverId });

const saveCharityProjectDB = async ({
	created_by, title, email, description, details, category, contact, location
}) => {
	const project = new CharityProject({
		created_by,
		title,
		email,
		description,
		details,
		category,
		contact,
		location,
		status: 'pending',
		created_date: new Date().toISOString(),
	});
	const asyncSave = await project.save();
	return asyncSave;
};
const getCharityProjectByIdDB = async (charityProjectId) => await CharityProject.find({ _id: charityProjectId });

const getPendingCharityProjectsDB = async () => {
	await CharityProject.find({ status: { $in: ['pending', 'rejected'] } });
}

const getCharityProjectsDB = async (query) => {
	const filter = {}

	if (query.location) {
		filter.location = query.location
	}

	if (query.category) {
		filter.category = query.category
	}

	return await CharityProject.find({
		$and: [
			{ status: 'accepted' },
			{
				$or: [
					{ location: filter.location },
					{ category: filter.category }
				]
			}
		]
	})
};
// const getTruckById = async (driverId, truckId) => await Truck.find({ created_by: driverId, _id: truckId });

// const changeTruckById = async (driverId, truckId, type) => await Truck.findByIdAndUpdate({ created_by: driverId, _id: truckId }, { $set: { type } });

// const deleteTruckById = async (driverId, truckId) => await Truck.findByIdAndDelete({ created_by: driverId, _id: truckId });

// const assignTruckById = async (driverId, truckId) => await Truck.findByIdAndUpdate({ _id: truckId }, { $set: { assigned_to: driverId } });

module.exports = {
	saveCharityProjectDB,
	getPendingCharityProjectsDB,
	getCharityProjectsDB,
	getCharityProjectByIdDB,
	// getTrucksDb,
	// getTruckById,
	// changeTruckById,
	// deleteTruckById,
	// assignTruckById
};
