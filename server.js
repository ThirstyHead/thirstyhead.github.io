const {provision} = require('./private/server');

const start = async () => {
  await provision();
};

start();
