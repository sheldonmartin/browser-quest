describe('Dragon', function() {
  var Dragon = require('../../lib/models/dragon.js');
  var Enemy = require('../../lib/models/dragon.js');

  beforeEach(function() {
    var dragon = Dragon();
    var enemy = Enemy();
  });

  it("should be able to attack and cause damage to enemies", function() {
    dragon.attack(enemy);

    expect(dragon.health()).toEqual(4950);
  });
});
