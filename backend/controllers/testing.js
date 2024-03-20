const testingRouter = require('express').Router();
const blog = require('../models/blog');
const User = require('../models/user');

testingRouter.post('/reset', async (request, response) => {
  await User.deleteMany({});
  await blog.deleteMany({});

  response.status(204).end();
});

module.exports = testingRouter;
