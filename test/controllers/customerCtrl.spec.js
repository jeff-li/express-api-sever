const customerCtrl = require('../../controllers/customerCtrl');
const db = require('../../models/index');
const fixtures = require('../fixtures');

const Customer = db.Customer;

const { res, expect, sandbox } = fixtures;
let { req } = fixtures;

describe('Customers Controller', function () {
  beforeEach(function () {
    // completely restore all fakes created through the sandbox
    sandbox.restore();
    req = {
      params: {},
      body: {},
      user: {},
      query: {},
    };
    sandbox.stub(res, 'send');
    sandbox.stub(res, 'json');
    sandbox.spy(res, 'status');
  });

  it('should return a list of customers', async function () {
    sandbox.stub(Customer, 'findAll').resolves(['data1', 'data2']);
    await customerCtrl.getAllCustomers({}, res);

    expect(Customer.findAll).to.have.been.calledOnce;
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(['data1', 'data2']);
  });

  it('should return an individual customer', async function () {
    sandbox.stub(Customer, 'findByPk').resolves({ id: 1 });
    req = {
      params: {
        customerId: 1,
      },
    };

    await customerCtrl.getCustomerById(req, res);
    expect(Customer.findByPk).to.have.calledWith(1);
    expect(res.status).to.have.been.calledOnce;
    expect(res.json).to.have.been.calledWith({ id: 1 });
  });
});
