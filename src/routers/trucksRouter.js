const express = require('express');
const router = express.Router();
const { getTrucks, addTruck, getTruck, changeTruck, deleteTruck, assignTruck } = require('../controllers/trucksController');

router.get('/', getTrucks);
router.post('/', addTruck);
router.get('/:id', getTruck);
router.put('/:id', changeTruck);
router.delete('/:id', deleteTruck);
router.post('/:id/assign', assignTruck);

module.exports = {
	trucksRouter: router,
};
