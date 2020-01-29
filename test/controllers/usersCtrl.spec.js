"use strict";
const chai = require("chai");
const sandbox = require('sinon').createSandbox();
const sinonChai = require("sinon-chai");
const expect = chai.expect;

chai.use(sinonChai);

const usersCtrl = require('../../controllers/usersCtrl')

let res = {
  json: () => {},
  status: function(responseStatus) {
      return this; 
  }
}

describe("Users Controller", function () {
    afterEach(function () {
        // completely restore all fakes created through the sandbox
        sandbox.restore();
    });

    it("should return a list of users", function () {
        sandbox.spy(res, 'status')
        sandbox.spy(res, 'json')

        usersCtrl.getAllUsers({}, res)

        expect(res.status).to.have.been.calledOnce;
        expect(res.json).to.have.been.calledWith([])
    });

    it("should return an individual user", function () {
      sandbox.spy(res, 'status')
      sandbox.spy(res, 'json')
      const req = {
        params: {
          userId: 100
        }
      }

      usersCtrl.getUserbyId(req, res)

      expect(res.status).to.have.been.calledOnce;
      expect(res.json).to.have.been.calledWith({})
  });
});