/**
 * Created by lianxu-admin on 2015/7/11.
 */
var add = require('../mod/add');
var should = require('chai').should();
var except = require('chai').expect;
var assert = require('chai').assert;



describe("test",function(){
    it("should return 1+2 =3 ",function(){
        add(1,2).should.equal(3);
        except(add(1,2)).to.equal(3);
        assert.equal(add(1,2), 4);
    })
});

var assert = require("assert")
describe('Array', function() {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        });
    });
});


describe('a suite of tests', function() {
    this.timeout(500);

    it('should take less than 500ms', function(done){
        setTimeout(done, 300);
    })

    it('should take less than 500ms as well', function(done){
        setTimeout(done, 200);
    })
})




/*
var foo = 'bar';
var  tea= [ 'chai', 'matcha', 'flavors' ] ;
// should
foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.length(3);
tea.should.have.property('flavors').with.length(3);

//expect
expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.length(3);
expect(tea).to.have.property('flavors').with.length(3);

//assert
assert.typeOf(foo, 'string');
assert.equal(foo, 'bar');
assert.lengthOf(foo, 3);
assert.property(tea, 'flavors');
assert.lengthOf(tea.flavors, 3);*/
