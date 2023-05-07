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
router.put('/:id', updateWarrior);
router.put('/accept/:id', adminCheckMiddleware, acceptWarrior);
router.put('/reject/:id', adminCheckMiddleware, rejectWarrior);


module.exports = {
	warriorRehabilitationRouter: router,
};
