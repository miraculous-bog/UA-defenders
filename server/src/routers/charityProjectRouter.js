const express = require('express');
const router = express.Router();
const { adminCheckMiddleware } = require('../middleware/adminCheckMiddleware');
const { fileEditingMiddleware } = require('../middleware/fileEditingMiddleware');
const { addProject, getProjects, getProjectDetails, getPendingProjects, updateProject, deleteProject, acceptProject, rejectProject } = require('../controllers/charityProjectController');

router.get('/', getProjects);
router.get('/pending', adminCheckMiddleware, getPendingProjects);
router.get('/:id', getProjectDetails);
router.post('/', addProject);
router.delete('/:id', fileEditingMiddleware, deleteProject);
router.patch('/:id', fileEditingMiddleware, updateProject);
router.patch('/accept/:id', adminCheckMiddleware, acceptProject);
router.patch('/reject/:id', adminCheckMiddleware, rejectProject);


module.exports = {
	charityProjectRouter: router,
};
