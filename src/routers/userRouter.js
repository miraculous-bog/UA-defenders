const express = require('express');

const router = express.Router();
const { getUser, deleteUser, changeUser } = require('../controllers/userController');

router.get('/', getUser);
router.delete('/', deleteUser);
router.patch('/password', changeUser);

module.exports = {
	usersRouter: router,
};
