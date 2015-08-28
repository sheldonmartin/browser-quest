var Knight = function() {
  var damage = 50;
  var vitality = 1000;
  var defending = false;
  var running = false;

  function attack(target) {
    target.takeDamage(damage);
    running = false;
  }

  function takeDamage(damage) {
    var damageModifier = 1;

    if (defending) {
      damageModifier = 0;
      defending = false;
    } else if (running) {
      damageModifier = 1.5;
    }

    vitality -= (damage * damageModifier);
  }

  function health() {
    return vitality;
  }

  function defend() {
    defending = true;
    running = false;
  }

  function run() {
    running = true;
  }

  return {
    attack: attack,
    takeDamage: takeDamage, 
    health: health,
    defend: defend,
    run: run
  }
}

module.exports = Knight;
