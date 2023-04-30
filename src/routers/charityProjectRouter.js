const express = require('express');
const router = express.Router();
const { adminCheckMiddleware } = require('../middleware/adminCheckMiddleware');
const { addProject, getProjects, getProjectDetails, getPendingProjects, updateProject, deleteProject, acceptProject, rejectProject } = require('../controllers/charityProjectController');

router.get('/', getProjects);
router.get('/pending', adminCheckMiddleware, getPendingProjects);
router.get('/:id', getProjectDetails);
router.post('/', addProject);
router.delete('/:id', deleteProject);
router.patch('/:id', updateProject);
router.patch('/accept/:id', acceptProject);
router.patch('/reject/:id', rejectProject);



// router.get('/', getLoads);
// router.post('/', addLoad);
// router.get('/active',);
// router.patch('/active/state',);
// router.get('/:id',);
// router.put('/:id',);
// router.delete('/:id',);
// router.post('/:id/post',);
// router.get('/:id/shipping_info',);


module.exports = {
	charityProjectRouter: router,
};
