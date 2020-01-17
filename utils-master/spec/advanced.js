/* globals expect, _, beforeEach, sinon, setTimeout, clock  */
(function() {
  'use strict';

  var checkForNativeMethods = function(runVanillaUtilsFunction) {
    it('should not use the native version of any utils methods in its implementation', function() {
      // These spies are set up in testSupport.js
      runVanillaUtilsFunction();
      expect(Array.prototype.map.called).to.equal(false);
      expect(Array.prototype.indexOf.called).to.equal(false);
      expect(Array.prototype.forEach.called).to.equal(false);
      expect(Array.prototype.filter.called).to.equal(false);
      expect(Array.prototype.reduce.called).to.equal(false);
      expect(Array.prototype.every.called).to.equal(false);
      expect(Array.prototype.some.called).to.equal(false);
    });
  };

  describe('Advanced', function() {

    describe('sortBy', function() {
      checkForNativeMethods(function() {
        _.sortBy([{name: 'curly', age: 50}, {name: 'moe', age: 30}], function(person) {
          return person.age;
        });
      });

      it('should sort by age', function() {
        var people = [{name: 'curly', age: 50}, {name: 'moe', age: 30}];
        people = _.sortBy(people, function(person) {
          return person.age;
        });

        expect(_.pluck(people, 'name')).to.eql(['moe', 'curly']);
      });

      it('should handle undefined values', function() {
        var list = [undefined, 4, 1, undefined, 3, 2];
        var result = _.sortBy(list, function(i) { return i; });

        expect(result).to.eql([1, 2, 3, 4, undefined, undefined]);
      });

      it('should sort by length', function() {
        var list = ['one', 'two', 'three', 'four', 'five'];
        var sorted = _.sortBy(list, 'length');

        expect(sorted).to.eql(['one', 'two', 'four', 'five', 'three']);
      });

      it('should produce results that change the order of the list as little as possible', function() {
        var Pair = function(x, y) {
          this.x = x;
          this.y = y;
        };

        var collection = [
          new Pair(1, 1), new Pair(1, 2),
          new Pair(1, 3), new Pair(1, 4),
          new Pair(1, 5), new Pair(1, 6),
          new Pair(2, 1), new Pair(2, 2),
          new Pair(2, 3), new Pair(2, 4),
          new Pair(2, 5), new Pair(2, 6),
          new Pair(undefined, 1), new Pair(undefined, 2),
          new Pair(undefined, 3), new Pair(undefined, 4),
          new Pair(undefined, 5), new Pair(undefined, 6)
        ];

        var actual = _.sortBy(collection, function(pair) {
          return pair.x;
        });

        expect(actual).to.eql(collection);
      });
    });

    describe('throttle, when given a wait of 100ms', function() {
      var callback;

      beforeEach(function() {
        callback = sinon.spy();
      });

      checkForNativeMethods(function() {
        _.throttle(callback, 100);
      });

      it('should return a function callable twice in the first 200ms', function() {
        var fn = _.throttle(callback, 100);
        fn(); // called
        setTimeout(fn, 50);
        setTimeout(fn, 100); // called
        setTimeout(fn, 150);
        setTimeout(fn, 199);
        clock.tick(200);
        /* jshint ignore:start */
        expect(callback).to.have.been.calledTwice;
        /* jshint ignore:end */

      });

    });

  });

}());
