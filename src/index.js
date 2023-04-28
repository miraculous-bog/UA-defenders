const express = require('express');
const morgan = require('morgan');

const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Bohdan:pXKoI655Sxh06IPc@atlascluster.3mwlsl6.mongodb.net/?retryWrites=true&w=majority');

const { authMiddleware } = require('./middleware/authMiddleware.js');
const { volonteerCheckMiddleware } = require("./middleware/volonteerCheckMiddleware");
const { defencerCheckMiddleware } = require("./middleware/defencerCheckMiddleware");

const { usersRouter } = require('./routers/userRouter.js');
const { authRouter } = require('./routers/authRouter');
const { volonteerRouter } = require('./routers/volonteerRouter');
const { defencerRouter } = require('./routers/defencerRouter');


app.use(express.json());
app.use(morgan('tiny'));

app.use('/api/users/me', authMiddleware, usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/volonteer', authMiddleware, volonteerCheckMiddleware, volonteerRouter);
app.use('/api/defencer', authMiddleware, defencerCheckMiddleware, defencerRouter);

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
