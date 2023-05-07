// const { charityProjectJoiSchema } = require('../models/CharityProject.js');
const { saveWarriorRehabilitationDB, getWarriorRehabilitationByIdDB, getPendingWarriorRehabilitationsDB, getWarriorRehabilitationsDB, deleteWarriorRehabilitationsDB, acceptWarriorDB, rejectWarriorDB } = require('../services/warriorRehabilitationService');


const addWarrior = async (req, res, next) => {
	const {
		email,
		name,
		location,
		militaryPoint,
		history,
		medicine,
		cost,
		details,
		contact,
	} = req.body;
	const created_by = req.user._id;

	const requiredFields = ['email', 'name', 'location', 'militaryPoint', 'history', 'medicine', 'cost', 'details', 'contact'];
	const areFieldsMissing = !requiredFields.every(field => req.body[field]);
	if (areFieldsMissing) {
		return res.status(400).json({ message: 'Missing required fields' });
	}

	const asyncSave = await saveWarriorRehabilitationDB({
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
	});
	if (!asyncSave) {
		return res.status(500).json({ message: 'Warrior Rehabilitatio creation failed' });
	}
	return res.status(200).json({ message: `Warrior Rehabilitation created successfully` });
}


const getWarriors = async (req, res, next) => {
	try {
		const query = req.query;
		const receivedwarriorRehabilitation = await getWarriorRehabilitationsDB(query);
		return res.status(200).json({ receivedwarriorRehabilitation });
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};


const getWarriorDetails = async (req, res, next) => {
	const id = req.params.id;
	try {
		const recievedWarriorRehabilitationDetails = await getWarriorRehabilitationByIdDB(id);
		return res.status(200).json(recievedWarriorRehabilitationDetails);
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
}


const getPendingWarriors = async (req, res, next) => {
	try {
		const pendingWarriors = await getPendingWarriorRehabilitationsDB();
		return res.status(200).json({ pendingWarriors });
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

const updateWarrior = async (req, res, next) => {
	return;
}

const deleteWarrior = async (req, res, next) => {
	try {
		const requestBy = req.user._id;
		const desiredDelete = req.params.id;

		const desiredDeleteWarrior = await getWarriorRehabilitationByIdDB(desiredDelete);

		if (desiredDeleteWarrior.created_by === requestBy || req.user.role === 'admin') {
			const warriorDeleted = await deleteWarriorRehabilitationsDB(desiredDelete);
			!warriorDeleted ? res.status(500).json({ message: err.message }) : res.status(200).json({ message: "Warrior Rehabilitation deleted successfully" });
		} else {
			return res.status(403).json({ message: "Forbidden" });
		}
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Internal server error" });
	}
}

const acceptWarrior = async (req, res, next) => {
	const warrioirId = req.params.id;
	try {
		await acceptWarriorDB(warrioirId);
		return res.status(200).json({ message: "Warrior Rehabilitation accepted successfully" });
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
}

const rejectWarrior = async (req, res, next) => {
	const warrioirId = req.params.id;
	try {
		await rejectWarriorDB(warrioirId);
		return res.status(200).json({ message: "Warrior Rehabilitation rejected successfully" });
	} catch (error) {
		next(error);
	}
}

module.exports = {
	addWarrior,
	getWarriors,
	getWarriorDetails,
	getPendingWarriors,
	updateWarrior,
	deleteWarrior,
	acceptWarrior,
	rejectWarrior
}