var Dragon = function() {
  var damage = 50;
  var vitality = 5000;

  function attack(target, attackName) {
    if (attackName === 'fire breath') {
      target.takeDamage(damage * 3);
    } else {
      target.takeDamage(damage);  
    }
  }

  function takeDamage(damage) {
    vitality -= damage;
  }

  function health() {
    return vitality;
  }

  return {
    attack: attack,
    takeDamage: takeDamage,
    health: health
  }
}

module.exports = Dragon;
