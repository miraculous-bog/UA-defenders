const express = require('express');
const router = express.Router();
const { getTest, postTest } = require('../controllers/testController');
// router.get('/', getLoads);
router.get('/', getTest);
// router.get('/active',);
// router.patch('/active/state',);
// router.get('/:id',);
// router.put('/:id',);
// router.delete('/:id',);
// router.post('/:id/post',);
// router.get('/:id/shipping_info',);


module.exports = {
	testRouter: router,
};
