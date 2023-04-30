const express = require('express');
const router = express.Router();
const { addLoad } = require('../controllers/loadsController');

// router.get('/', getLoads);
router.post('/', addLoad);
// router.get('/active',);
// router.patch('/active/state',);
// router.get('/:id',);
// router.put('/:id',);
// router.delete('/:id',);
// router.post('/:id/post',);
// router.get('/:id/shipping_info',);


module.exports = {
	loadsRouter: router,
};
