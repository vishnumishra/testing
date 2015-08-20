var request = require('supertest');

describe('UsersController', function() {

  describe('#login()', function() {
    it('should redirect to /mypage', function (done) {
      request(sails.hooks.http.app)
        .post('/user/login')
        .send({ name: 'test', password: 'test' })
        .expect(302)
        .expect('location','/mypage', done);
    });
    it('should give user or password not matching', function (done) {
      request(sails.hooks.http.app)
        .post('/user/login')
        .send({ name: 'vishnu', password: 'test' })
        .expect(501)
        .expect('Content-Type', /json/)
        .expect('sucess',false,done)
        // .expect('err',"user or password not matching",done)
        // .expect('json',{sucess:false,err:'user or password not matching'},done)
    });
  });

});