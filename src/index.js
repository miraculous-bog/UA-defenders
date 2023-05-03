const express = require('express');
const morgan = require('morgan');

const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://developer:BUgVjhMDhOUWmUWu@cluster0.9aocvfd.mongodb.net/test');

const { authMiddleware } = require('./middleware/authMiddleware.js');

const { usersRouter } = require('./routers/userRouter.js');
const { authRouter } = require('./routers/authRouter');
const { charityProjectRouter } = require('./routers/charityProjectRouter');
const { warriorRehabilitationRouter } = require('./routers/warriorRehabilitationRouter');
const { helpRequestRouter } = require('./routers/helpRequestRouter');

app.use(express.json());
app.use(morgan('tiny'));

app.use('/api/users/me', authMiddleware, usersRouter);
app.use('/api/auth', authRouter);

app.use('/api/charityProject', authMiddleware, charityProjectRouter);
app.use('/api/warriorRehabilitation', authMiddleware, warriorRehabilitationRouter);
app.use('/api/helpRequest', authMiddleware, helpRequestRouter);
// app.use('/api/feedback', feedbackRouter);

const start = async () => {
  try {
    app.listen(8080);
  } catch (err) {
    console.error(`Error on server startup: ${err.message}`);
  }
};

start();

// ERROR HANDLER
app.use(errorHandler);

function errorHandler(err, req, res, next) {
  res.status(500).send({ message: err.message });
}
