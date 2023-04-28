const express = require('express');
const router = express.Router();
const { adddefencer } = require('../controllers/defencerController');

// router.get('/', getdefencer);

// router.get('/active',);
// router.patch('/active/defencer',);
// router.get('/:id',);
// router.put('/:id',);
// router.delete('/:id',);
// router.post('/:id/post',);
// router.get('/:id/defencer_info',);


module.exports = {
	defencerRouter: router,
};
