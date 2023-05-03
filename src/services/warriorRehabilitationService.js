const { WarriorRehabilitation } = require('../models/WarriorRehabilitation');


const saveWarriorRehabilitationDB = async ({
	created_by, email, name, location, militaryPoint, history, medicine, cost, details, contact,
}) => {
	const warrior = new WarriorRehabilitation({
		created_by,
		email,
		name,
		location,
		militaryPoint,
		history,
		medicine,
		cost,
		details,
		contact,
		status: 'pending',
		created_date: new Date().toISOString(),
	});
	const asyncSave = await warrior.save();
	return asyncSave;
};

const getWarriorRehabilitationByIdDB = async (warriorRehabilitationId) => {
	try {
		const warrior = await WarriorRehabilitation.findById(warriorRehabilitationId);
		if (!warrior) {
			throw new Error(`Warrior with ID ${warriorRehabilitationId} not found`);
		}
		return warrior;
	} catch (error) {
		throw new Error(`Error getting Warrior: ${error.message}`);
	}
};
const getPendingWarriorRehabilitationsDB = async () => {
	try {
		const pendingWarriors = await WarriorRehabilitation.find({ status: { $in: ['pending', 'rejected'] } });
		return pendingWarriors;
	} catch (err) {
		console.error(err);
		throw new Error('Failed to fetch Warriors');
	}
};

const getWarriorRehabilitationsDB = async (query) => {
	try {
		const filter = {
			status: 'accepted'
		};

		if (query.name) {
			filter.name = query.name;
		}

		const warriors = await WarriorRehabilitation.find(filter);

		if (!warriors) {
			throw new Error('No warriors found');
		}

		return warriors;

	} catch (error) {
		throw new Error('Error retrieving warriors');
	}
};


const deleteWarriorRehabilitationsDB = async (warriorId) => await WarriorRehabilitation.findByIdAndDelete({ _id: warriorId });

const acceptWarriorDB = async (warriorId) => {
	try {
		return await WarriorRehabilitation.findByIdAndUpdate({ _id: warriorId }, { $set: { status: "accepted" } });
	} catch (err) {
		throw new Error("Error accepting Warriors");
	}
}

const rejectWarriorDB = async (warriorId) => {
	try {
		return await WarriorRehabilitation.findByIdAndUpdate({ _id: warriorId }, { $set: { status: "rejected" } });
	} catch (err) {
		throw new Error("Error accepting Warriors");
	}
}

// const changeTruckById = async (driverId, truckId, type) => await Truck.findByIdAndUpdate({ created_by: driverId, _id: truckId }, { $set: { type } });



// const assignTruckById = async (driverId, truckId) => await Truck.findByIdAndUpdate({ _id: truckId }, { $set: { assigned_to: driverId } });

module.exports = {
	saveWarriorRehabilitationDB,
	getPendingWarriorRehabilitationsDB,
	getWarriorRehabilitationsDB,
	getWarriorRehabilitationByIdDB,
	deleteWarriorRehabilitationsDB,
	acceptWarriorDB,
	rejectWarriorDB,

};
