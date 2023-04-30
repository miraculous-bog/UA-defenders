const express = require('express');
const morgan = require('morgan');

const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://developer:BUgVjhMDhOUWmUWu@cluster0.9aocvfd.mongodb.net/test');

const { authMiddleware } = require('./middleware/authMiddleware.js');
// const { driverCheckMiddleware } = require("./middleware/driverCheckMiddleware");
// const { shipperCheckMiddleware } = require("./middleware/shipperCheckMiddleware");

const { usersRouter } = require('./routers/userRouter.js');
const { authRouter } = require('./routers/authRouter');
const { charityProjectRouter } = require('./routers/charityProjectRouter');
// const { trucksRouter } = require('./routers/trucksRouter');
// const { loadsRouter } = require('./routers/loadsRouter');
// const { testRouter } = require('./routers/testRouter');
app.use(express.json());
app.use(morgan('tiny'));

app.use('/api/users/me', authMiddleware, usersRouter);
app.use('/api/auth', authRouter);

app.use('/api/charityProject', authMiddleware, charityProjectRouter);
// app.use('/api/warriorRehabilitation', warriorRehabilitationRouter);
// app.use('/api/helpRequest', helpRequestRouter);
// app.use('/api/feedback', feedbackRouter);



// app.use('/api/trucks', authMiddleware, driverCheckMiddleware, trucksRouter);
// app.use('/api/loads', authMiddleware, shipperCheckMiddleware, loadsRouter);
// app.use('/api/tests', testRouter);

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
