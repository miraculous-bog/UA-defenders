const express = require('express');
const router = express.Router();
const { adminCheckMiddleware } = require('../middleware/adminCheckMiddleware');
const { fileEditingMiddleware } = require('../middleware/fileEditingMiddleware');
const { addWarrior, getWarriors, getWarriorDetails, getPendingWarriors, updateWarrior, deleteWarrior, acceptWarrior, rejectWarrior } = require('../controllers/warriorRehabilitationController');

router.get('/', getWarriors);
router.get('/pending', adminCheckMiddleware, getPendingWarriors);
router.get('/:id', getWarriorDetails);
router.post('/', addWarrior);
router.delete('/:id', deleteWarrior);
router.patch('/:id', updateWarrior);
router.patch('/accept/:id', adminCheckMiddleware, acceptWarrior);
router.patch('/reject/:id', adminCheckMiddleware, rejectWarrior);


module.exports = {
	warriorRehabilitationRouter: router,
};
