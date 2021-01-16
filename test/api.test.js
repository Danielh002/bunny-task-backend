var expect  = require('chai').expect;
var request = require('supertest');
const app = require('../server')


afterEach(() => {
})


describe('Testing API', () => {
    let userIdCreated;
    let taskIdCreate;
    beforeEach(() => {

    });

    it('About page content', (done) => {
        request(app).get('/about')
            .then((res) => {
                const body = res.body
                expect(body).to.contain.property('name');
                expect(body).to.contain.property('version');
                done();
            },)
            .catch((err) => done(err))
    })
    
    it('Add user', (done) => {
        request(app).post('/user')

            .send({ name: 'test'})
            .then((res) => {
                const user = res.body.result
                userIdCreated = user._id
                expect(user).to.contain.property('_id');
                expect(user).to.contain.property('name');
                done();
            },)
            .catch((err) => done(err))
    })
    
    it('Update user', (done) => {
        request(app).patch('/user/'+ userIdCreated)
            .send([{ propName: "name", value: "test"}])
            .then((res) => {
                const result = res.body
                expect(result).to.contain.property('result');
                done();
            },)
            .catch((err) => done(err))
    })

    it('Delete user', (done) => {
        request(app).delete('/user/'+ userIdCreated)
            .then((res) => {
                const result = res.body
                expect(result).to.contain.property('result');
                done();
            },)
            .catch((err) => done(err))
    })

    
    it('Add task', (done) => {
        request(app).post('/userTask')
            .send({ 
                description : "TAREA 1",
	            state: "TO-DO",
	            userId: "5fffbe0dc6f60e2c34fcabac"
            })
            .then((res) => {
                const task = res.body.result
                taskIdCreate = task._id
                expect(task).to.contain.property('_id');
                expect(task).to.contain.property('description');
                expect(task).to.contain.property('userId');
                done();
            },)
            .catch((err) => done(err))
    })
    
    it('Update task', (done) => {
        request(app).patch('/userTask/'+ taskIdCreate)
            .send([{ propName: "description", value: "test"}])
            .then((res) => {
                const result = res.body
                expect(result).to.contain.property('result');
                done();
            },)
            .catch((err) => done(err))
    })

    it('Delete user', (done) => {
        request(app).delete('/userTask/'+ taskIdCreate)
            .then((res) => {
                const result = res.body
                expect(result).to.contain.property('result');
                done();
            },)
            .catch((err) => done(err))
    })

    it('get Users and Task', (done) => {
        request(app).get('/getUsersAndTasks/')
            .then((res) => {
                const result = res.body
                expect(result).to.contain.property('result');
                done();
            },)
            .catch((err) => done(err))
    })
})

