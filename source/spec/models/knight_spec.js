describe('Knight', function() {
  var Knight = require('../../lib/models/knight.js');
  var Enemy = require('../../lib/models/knight.js');

  beforeEach(function() {
    knight = Knight();
    enemy = Enemy();
  });

  it("should be able to attack and cause damage to enemies", function() {
    knight.attack(enemy);

    expect(enemy.health()).toEqual(950);
  });
});
