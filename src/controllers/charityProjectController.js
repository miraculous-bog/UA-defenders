// const { charityProjectJoiSchema } = require('../models/CharityProject.js');
const { saveCharityProjectDB, getPendingCharityProjectsDB, getCharityProjectsDB, getCharityProjectByIdDB, deleteCharityProjectsDB, acceptProjectDB, rejectProjectDB } = require('../services/charityProjectService');


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

	const requiredFields = ['title', 'email', 'description', 'details', 'category', 'contact', 'location'];
	const areFieldsMissing = !requiredFields.every(field => req.body[field]);
	if (areFieldsMissing) {
		return res.status(400).json({ message: 'Missing required fields' });
	}

	const asyncSave = await saveCharityProjectDB({
		created_by,
		title,
		email,
		description,
		details,
		category,
		location,
		contact
	});
	if (!asyncSave) {
		return res.status(500).json({ message: 'Charity Project creation failed' });
	}
	return res.status(200).json({ message: `Charity Project created successfully` });
}


const getProjects = async (req, res, next) => {
	try {
		const query = req.query;
		const receivedCharityProjects = await getCharityProjectsDB(query);
		return res.status(200).json({ receivedCharityProjects });
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};


const getProjectDetails = async (req, res, next) => {
	const id = req.params.id;
	try {
		const recievedCharityProjectDetails = await getCharityProjectByIdDB(id);
		return res.status(200).json(recievedCharityProjectDetails);
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
}


const getPendingProjects = async (req, res, next) => {
	try {
		const pendingProjects = await getPendingCharityProjectsDB();
		return res.status(200).json({ pendingProjects });
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

const updateProject = async (req, res, next) => {
	return;
}

const deleteProject = async (req, res, next) => {
	try {
		const requestBy = req.user._id;
		const desiredDelete = req.params.id;

		const desiredDeleteProject = await getCharityProjectByIdDB(desiredDelete);
		if (desiredDeleteProject.created_by === requestBy || req.user.role === 'admin') {
			const projectDeleted = await deleteCharityProjectsDB(desiredDelete);
			!projectDeleted ? res.status(500).json({ message: err.message }) : res.status(200).json({ message: "Charity Project deleted successfully" });
		} else {
			return res.status(403).json({ message: "Forbidden" });
		}
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Internal server error" });
	}
}

const acceptProject = async (req, res, next) => {
	const projectId = req.params.id;
	try {
		await acceptProjectDB(projectId);
		return res.status(200).json({ message: "Charity Project accepted successfully" });
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
}
const rejectProject = async (req, res, next) => {
	const projectId = req.params.id;
	try {
		await rejectProjectDB(projectId);
		return res.status(200).json({ message: "Charity Project rejected successfully" });
	} catch (error) {
		next(error);
	}
}

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