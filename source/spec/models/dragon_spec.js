describe('Dragon', function() {
  var Dragon = require('../../lib/models/dragon.js');
  var Enemy = require('../../lib/models/dragon.js');
  var dragon;
  var enemy;

  beforeEach(function() {
    dragon = Dragon();
    enemy = Enemy();
  });

  it("should be able to attack and cause damage to enemies", function() {
    dragon.attack(enemy);

    expect(enemy.health()).toEqual(4950);
  });

  it("should be able to take damage from enemies when attacked", function() {
    enemy.attack(dragon);

    expect(enemy.health()).toEqual(4950);
  })
});
