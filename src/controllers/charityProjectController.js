// const { charityProjectJoiSchema } = require('../models/CharityProject.js');
const { saveCharityProjectDB, getPendingCharityProjectsDB, getCharityProjectsDB, getCharityProjectByIdDB } = require('../services/charityProjectService');


const addProject = async (req, res, next) => {
	const created_by = req.user._id;

	const {
		title,
		email,
		description,
		details,
		category,
		contact,
		location } = req.body;



	await saveCharityProjectDB({
		created_by,
		title,
		email,
		description,
		details,
		category,
		location,
		contact
	});
	return res.status(200).json({ message: `Charity Project created successfully` });
}

const getProjects = async (req, res, next) => {
	const query = req.query;
	const recievedCharityProjects = await getCharityProjectsDB(query);
	return res.status(200).json({ recievedCharityProjects });
}

const getProjectDetails = async (req, res, next) => {
	const id = req.query.id;
	const recievedCharityProjectDetails = await getCharityProjectByIdDB(id);
	return res.status(200).json(recievedCharityProjectDetails);
}


const getPendingProjects = async (req, res, next) => {
	const query = req.query;
	const pendingProjects = await getPendingCharityProjectsDB(query);
	return res.status(200).json({ pendingProjects });
}


const updateProject = async (req, res, next) => {
	return;
}

const deleteProject = async (req, res, next) => {
	return;
}

const acceptProject = async (req, res, next) => {
	return;
}

const rejectProject = async (req, res, next) => {
	return;
}
// const getTrucks = async (req, res, next) => {
// 	const created_by = req.user._id;
// 	const allDriversTrucks = await getTrucksDb(created_by);
// 	return res.status(200).json({ trucks: allDriversTrucks });
// }
// const addTruck = async (req, res, next) => {
// 	const created_by = req.user._id;
// 	const { type } = req.body;
// 	await truckJoiSchema.validateAsync({
// 		type
// 	});

// 	await saveTruck({
// 		created_by,
// 		type
// 	});
// 	return res.status(200).json({ message: `Truck created successfully` });
// }
// const getTruck = async (req, res, next) => {
// 	const created_by = req.user._id;
// 	const serached_truck_id = req.params.id;
// 	const searchedDriversTruck = await getTruckById(created_by, serached_truck_id);
// 	return res.status(200).json({ truck: searchedDriversTruck[0] });
// }
// const changeTruck = async (req, res, next) => {
// 	const created_by = req.user._id;
// 	const { type } = req.body;
// 	const serached_truck_id = req.params.id;
// 	await changeTruckById(created_by, serached_truck_id, type);
// 	return res.status(200).json({ message: "Truck details changed successfully" });
// }

// const deleteTruck = async (req, res, next) => {
// 	const created_by = req.user._id;
// 	const serached_truck_id = req.params.id;
// 	await deleteTruckById(created_by, serached_truck_id);
// 	return res.status(200).json({ message: "Truck deleted successfully" });
// }

// const assignTruck = async (req, res, next) => {
// 	const created_by = req.user._id;
// 	const serached_truck_id = req.params.id;
// 	await assignTruckById(created_by, serached_truck_id);
// 	return res.status(200).json({ message: "Truck assigned successfully" });
// }

module.exports = {
	addProject,
	getProjects,
	getProjectDetails,
	getPendingProjects,
	updateProject,
	deleteProject,
	acceptProject,
	rejectProject
}