const express = require('express');
const router = express.Router();
const { getVolonteer, addVolonteer, getVolonteer, changeVolonteer, deleteVolonteer, assignVolonteer } = require('../controllers/volonteerController');

router.get('/', getVolonteer);
router.post('/', addVolonteer);
router.get('/:id', getVolonteer);
router.put('/:id', changeVolonteer);
router.delete('/:id', deleteVolonteer);
router.post('/:id/assign', assignVolonteer);

module.exports = {
	VolonteerRouter: router,
};
