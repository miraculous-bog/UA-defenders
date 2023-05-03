const express = require('express');
const router = express.Router();
const { adminCheckMiddleware } = require('../middleware/adminCheckMiddleware');
const { fileEditingMiddleware } = require('../middleware/fileEditingMiddleware');
const { getOffersRequest, getRequestRequest, getPendingRequests, getRequestDetails, addRequest, deleteRequest, updateRequest, acceptRequest, rejectRequest } = require('../controllers/helpRequestController');

router.get('/offers', getOffersRequest);
router.get('/request', getRequestRequest);
router.get('/pending', adminCheckMiddleware, getPendingRequests);
router.get('/:id', getRequestDetails);
router.post('/', addRequest);
router.delete('/:id', deleteRequest);
router.patch('/:id', updateRequest);
router.patch('/accept/:id', adminCheckMiddleware, acceptRequest);
router.patch('/reject/:id', adminCheckMiddleware, rejectRequest);


module.exports = {
	helpRequestRouter: router,
};
