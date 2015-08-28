var Knight = function() {
  var damage = 50;
  var vitality = 1000;
  var defending = false;

  function attack(target) {
    target.takeDamage(damage);
  }

  function takeDamage(damage) {
    if (defending) {
      defending = false;
      return;
    }

    vitality -= damage;
  }

  function health() {
    return vitality;
  }

  function defend() {
    defending = true;
  }

  return {
    attack: attack,
    takeDamage: takeDamage, 
    health: health,
    defend: defend
  }
}

module.exports = Knight;
