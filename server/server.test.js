const app = require('./index')
const supertest = require('supertest')
const request = supertest(app)



it('Testing get endpoint', async done => {
  const res = await request.get('/getList')

  expect(res.status).toBe(200)
  done()
})

it('get request returns json', done => {
  request.get('/getList')
         .set('Accept', 'application/json')
         .expect('Content-Type', /json/)
         .expect(200,done)

})

it('get request returns json', done => {
  request.get('/getList')
         .set('Accept', 'application/json')
         .expect('Content-Type', /json/)
         .expect(200,done)

})

it('post request returns json', done => {
  data = 'habit 1'
  const res = request.post('/habits')
         .send(data)
         .set('Accept', 'application/json')
         .expect('Content-Type', /json/)
         .expect(201)
         .end((err, res) => {
           if(err) return done(err)
           done()
         })
  

})


it('post request returns json', done => {
  data = 'habit 1'
  const res = request.post('/habits')
         .send(data)
         .set('Accept', 'application/json')
         .expect('Content-Type', /json/)
         .expect(201)
  console.log(res)

  done()
  

})