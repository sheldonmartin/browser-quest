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

  describe("when defending", function() {
    beforeEach(function() {
      knight.defend();
    });
    
    it("should take no damage from attacks", function() {
      enemy.attack(knight);

      expect(knight.health()).toEqual(1000);
    });

    it("should take damage on subsequent attacks, after successfully blocking an attack", function() {
      enemy.attack(knight);
      enemy.attack(knight);

      expect(knight.health()).toEqual(950);
    });
  });

  describe("when running", function() {
    beforeEach(function() {
      knight.run();
    });

    it("should take 50% more damage", function() {
      enemy.attack(knight);

      expect(knight.health()).toEqual(925);
    });

    it("should stop running and take normal damage when they attack", function() {
      knight.attack(enemy);
      enemy.attack(knight);

      expect(knight.health()).toEqual(950);
    });

    it("should stop running and take normal damage when they defend", function() {
      knight.defend();
      enemy.attack(knight);

      expect(knight.health()).toEqual(950);
    });
  });
});
