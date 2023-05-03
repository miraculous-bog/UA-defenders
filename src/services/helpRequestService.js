const { HelpRequest } = require('../models/HelpRequest');

// getHelpRequestsDB getPendingHelpRequstDB, getHelpRequestByIdDB, saveHelpRequestDB, deleteHelpRequestsDB, acceptRequestDB, rejectRequest 


const getHelpRequestsDB = async (query, type) => {
	try {
		const filter = {
			status: 'accepted',
			type
		};

		if (query.location) {
			filter.location = query.location;
		}


		if (query.category) {
			filter.category = query.category;
		}
		const requests = await HelpRequest.find(filter);
		if (!requests) {
			throw new Error('No requests found');
		}

		return requests;

	} catch (error) {
		throw new Error('Error retrieving requests');
	}
};

const getPendingHelpRequstDB = async () => {
	try {
		const pendingRequests = await HelpRequest.find({ status: { $in: ['pending', 'rejected'] } });
		return pendingRequests;
	} catch (err) {
		console.error(err);
		throw new Error('Failed to fetch Requests');
	}
};

const getHelpRequestByIdDB = async (helpRequestId) => {
	try {
		const request = await HelpRequest.findById(helpRequestId);
		if (!request) {
			throw new Error(`request with ID ${helpRequestId} not found`);
		}
		return request;
	} catch (request) {
		throw new Error(`Error getting request: ${error.message}`);
	}
};

const saveHelpRequestDB = async ({
	created_by, email, location, title, description, category, contact, type,
}) => {
	const request = new HelpRequest({
		created_by, email, location, title, description, category, contact, type, status: 'pending', created_date: new Date().toISOString(),
	});
	const asyncSave = await request.save();
	return asyncSave;
};





const deleteHelpRequestsDB = async (requestId) => await HelpRequest.findByIdAndDelete({ _id: requestId });

const acceptRequestDB = async (requestId) => {
	try {
		return await HelpRequest.findByIdAndUpdate({ _id: requestId }, { $set: { status: "accepted" } });
	} catch (err) {
		throw new Error("Error accepting Request");
	}
}

const rejectRequest = async (requestId) => {
	try {
		return await HelpRequest.findByIdAndUpdate({ _id: requestId }, { $set: { status: "rejected" } });
	} catch (err) {
		throw new Error("Error accepting Request");
	}
}

module.exports = {
	getHelpRequestsDB, getPendingHelpRequstDB, getHelpRequestByIdDB, saveHelpRequestDB, deleteHelpRequestsDB, acceptRequestDB, rejectRequest
};
