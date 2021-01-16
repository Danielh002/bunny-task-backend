const sinon = require('sinon');
const chai = require('chai');
const User = require('../api/models/user');
const addUser = require('../api/controllers/user/addUserFunction');

const expect = chai.expect;

afterEach(() => {
    sinon.restore()
})


describe('Test addUserFunction', () => {
    let status, json, res;
    beforeEach(() => {
        status = sinon.stub();
        json = sinon.spy();
        res = { json, status };
        status.returns(res);
    });

    it("Create a user", function () {
        let req = { body: { name: "test" } }
        let saveUserMock = sinon.stub(User.prototype, "save")
        saveUserMock.resolves({
            _id: 123,
            name: "test",
        });
        addUser(req, res)
        expect(saveUserMock.calledOnce).to.be.true;
    })
})