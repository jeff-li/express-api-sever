const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');

const { expect } = chai;
const sandbox = require('sinon').createSandbox();

chai.use(sinonChai);

module.exports = {
  req: {},
  res: {
    status() {
      return this;
    },
    send: () => {},
    json: () => {},
  },
  sinon,
  sandbox,
  expect,
  next: () => {},
};
