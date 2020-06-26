let cards = {
  /*==========
  Pyromancer cards
  ==========*/
  flameLance: {
    color: 'red',
    name: 'Flame Lance',
    cost: {
      any: 1,
    },
    range: '1-2',
    tags: [
      'rangedAttack',
      'fireSkill'
    ],
    body: [
      `Make a ranged spell attack against target creature's armor defense.`,
      `@child On a hit, deal 8 + @spellcastingModifier fire damage.`,
    ],
    requirements: {
      fireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  incendiaryBurst: {
    color: 'red',
    name: 'Incendiary Burst',
    cost: {
      any: 1,
    },
    range: '0-1',
    tags: [
      'fireSkill',
    ],
    body: [
      `Make a spell attack against each creature's motoric defense in target zone.`,
      `@child On a hit, deal 2 + @spellcastingModifier damage.`,
      `Place a @fireSkill token in the targeted zone.`,
    ],
    requirements: {
      fireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  fieryGrasp: {
    color: 'red',
    name: 'Fiery Grasp',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'fireSkill',
    ],
    body: [
      `Make a melee spell attack against target creature's motoric defense.`,
      `@child On a hit, deal 4 + @spellcastingModifier fire damage.`,
      `@child If a creature took damage from this, set smouldering 3 on it.`,
    ],
    requirements: {
      fireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  innerFire: {
    color: 'red',
    name: 'Inner Fire',
    cost: {
      any: 1,
    },
    range: '0-1',
    tags: [
      'fireSkill',
    ],
    body: [
      `Clear slowed, wet, fatigued, and dazed from yourself or target creature.`,
      `The targeted creature may also draw a card.`,
    ],
    requirements: {
      fireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  heatWave: {
    color: 'red',
    name: 'Heat Wave',
    cost: {
      any: 1,
      fire: 1,
    },
    range: '0-1',
    tags: [
      'fireSkill',
    ],
    body: [
      `__Requires__: An equipped staff.`,
      `Make a spell attack against any number of target creatures' motorics defense.`,
      `@child On a hit, deal @spellcastingModifier fire damage.`,
      `You may place a @fireSkill token in up to three target zones.`,
    ],
    requirements: {
      fireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  spark: {
    color: 'red',
    name: 'Spark',
    cost: {
      any: 0,
    },
    range: '0-1',
    tags: [,
      `rangedAttack`,
      `fireSkill`,
    ],
    body: [
      `Target zone.`,
      `@child You may make a spell attack against one creature's armor defense in the targeted zone.`,
      `@child On a hit, deal @spellcastingModifier fire damage.`,
      `You may replace up to one oil token in the targeted zone with a @fireSkill token.`,
    ],
    requirements: {
      fireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  /*==========
  Aeromancer cards
  ==========*/
  windBolt: {
    color: 'white',
    name: 'Wind Bolt',
    cost: {
      any: 1,
    },
    range: '1-2',
    tags: [
      'rangedAttack',
      'airSkill'
    ],
    body: [
      `Make a ranged spell attack against target creature's armor defense.`,
      `@child On a hit, deal 6 + @spellcastingModifier air damage.`,
      `@child If a creature took damage from this, it must invert a card with the @rangedAttack tag.`,
    ],
    requirements: {
      airSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  blowback: {
    color: 'white',
    name: 'Blowback',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'airSkill'
    ],
    body: [
      `Make a melee spell attack against target creature's physique defense.`,
      `@child On a hit deal 2 + @spellcastingModifier air damage.`,
      `You may shift 1 zone.`,
    ],
    requirements: {
      airSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  knockdownBlasts: {
    color: 'white',
    name: 'Knockdown Blasts',
    cost: {
      any: 2,
    },
    range: '1-2',
    tags: [
      'rangedAttack',
      'airSkill',
    ],
    body: [
      `Make a spell attack roll against each of up to two target creatures' physique defense.`,
      `@child On a hit deal @spellcastingModifier air damage.`,
      `@child If a creature took damage from this, set dazed 1 and immobilized 1 on it.`,
    ],
    requirements: {
      airSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  shiftingGust: {
    color: 'white',
    name: 'Shifting Gust',
    cost: {
      any: 1,
    },
    range: '0-1',
    tags: [
      'airSkill',
    ],
    body: [
      `You may shift yourself or target allied creature 1 zone.`,
      `@child Remove one token from the targeted creature's zone.`,
    ],
    requirements: {
      airSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  silencingGust: {
    color: 'white',
    name: 'Silencing Gust',
    cost: {
      air: 1,
    },
    range: '1-2',
    tags: [
      'airSkill',
    ],
    body: [
      `__Requires__: An equipped staff.`,
      `Make an attack against target creature's physique defense.`,
      `@child On a hit, deal 7 + @spellcastingModifier air damage.`,
      `@child If a creature took damage from this, it must invert a spell.`,
    ],
    requirements: {
      airSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  disperse: {
    color: 'white',
    name: 'Disperse',
    cost: {
      any: 0,
    },
    range: '0-2',
    tags: [
      'airSkill',
    ],
    body: [
      `Remove all tokens besides @airSkill tokens from target zone.`,
    ],
    requirements: {
      airSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  /*==========
  Hydromancer cards
  ==========*/
  waterGun: {
    color: 'blue',
    name: 'Water Gun',
    cost: {
      any: 1,
    },
    range: '1-2',
    tags: [
      'rangedAttack',
      'waterSkill'
    ],
    body: [
      `Make a ranged spell attack against target creature's armor defense.`,
      `@child On a hit, deal 6 + @spellcastingModifier water damage.`,
      `Place a @waterSkill token in the targeted creature's zone.`,
    ],
    requirements: {
      waterSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  chillTouch: {
    color: 'blue',
    name: 'Chill Touch',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'waterSkill',
    ],
    body: [
      `Make a melee spell attack against target creature's armor defense.`,
      `@child On a hit, deal 2 + @spellcastingModifier water damage.`,
      `@child If a creature took damage from this, set wet 3 and slowed 1 on it. In addition, it must discard a card.`,
    ],
    requirements: {
      waterSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  upswell: {
    color: 'blue',
    name: 'Upswell',
    cost: {
      any: 1,
    },
    range: '1-2',
    tags: [
      'waterSkill',
    ],
    body: [
      `Make a spell attack roll against each creature's motorics defense in target zone.`,
      `@child On a hit, deal @spellcastingModifier damage.`,
      `@child If a creature took damage from this, set wet 3 on it.`,
    ],
    requirements: {
      waterSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  soothingWaters: {
    color: 'blue',
    name: 'Soothing Waters',
    cost: {
      any: 1,
    },
    range: '0-1',
    tags: [
      'waterSkill',
    ],
    body: [
      `Restore 12 + @spellcastingModifier health to yourself or target creature.`,
      `Clear smouldering on the targeted creature.`,
    ],
    requirements: {
      waterSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  gush: {
    color: 'blue',
    name: 'Gush',
    cost: {
      water: 1,
    },
    range: '1-2',
    tags: [
      'waterSkill',
    ],
    body: [
      `__Requires__: An equipped staff.`,
      `Target @waterSkill token and move it 1.`,
      `@child You may make a spell attack against one creature's armor defense in the targeted @waterSkill token's zone.`,
      `@child On a hit, deal 6 + @spellcastingModifier water damage.`,
      `@child If a creature took damage from this effect, set impaired 1 on it.`,
    ],
    requirements: {
      waterSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
    devNote: 'weird',
  },
  douse: {
    color: 'blue',
    name: 'Douse',
    cost: {
      any: 0,
    },
    range: '0-2',
    tags: [
      'waterSkill',
    ],
    body: [
      `Place a @waterSkill token in up to two target zones.`,
    ],
    requirements: {
      waterSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  /*==========
  Geomancer cards
  ==========*/
  vineWhip: {
    color: 'green',
    name: 'Vine Whip',
    cost: {
      any: 1,
    },
    range: '0-1',
    tags: [
      'meleeAttack',
      'earthSkill'
    ],
    body: [
      `Make a melee spell attack against target creature's armor defense.`,
      `@child On a hit, deal 6 + @spellcastingModifier earth damage.`,
      `@child If a creature took damage from this, it must invert a card with the @meleeAttack tag.`,
    ],
    requirements: {
      earthSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  stonefist:{
    color: 'green',
    name: 'Stonefist',
    cost: {
      any: 1,
    },
    range: '0',
    tags:[
      'meleeAttack',
      'earthSkill',
    ],
    body: [
      `Make a melee spell attack against target creature's armor defense.`,
      `@child On a hit, deal 5 + @spellcastingModifier earth damage.`,
      `@child If a creature took damage from this, set immobilized 1 on it.`,
    ],
    requirements: {
      earthSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  sandspout: {
    color: 'green',
    name: 'Sandspout',
    cost: {
      any: 1,
    },
    range: '1-2',
    tags: [
      'rangedAttack',
      'earthSkill',
    ],
    body: [
      `Make a spell attack against each creatures' motorics defense in target zone.`,
      `@child On a hit, set blinded 2 on the hit creature.`,
    ],
    requirements: {
      earthSkill: 1,
    }, 
    maxCopies: 3,
    artName: 'searingSpear',
  },
  earthenArmor: {
    color: 'green',
    name: 'Earthen Armor',
    cost: {
      any: 1,
    },
    range: '0-1',
    tags: [
      'earthSkill',
    ],
    body: [
      `Set your or target creature's armor and physique defense dice to their maximum value. Set caked 3 on it as well.`,
    ],
    requirements: {
      earthSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  gravelBarrage: {
    color: 'green',
    name: 'Gravel Barrage',
    cost: {
      any: 1,
      earth: 1,
    },
    range: '1-2',
    tags: [
      'earthSkill',
    ],
    body: [
      `__Requires__: An equipped staff.`,
      `Make an attack roll against target creature's armor defense.`,
      `@child On a hit, deal 3 + @spellcastingModifier earth damage.`,
      `You may repeat this process up to two more times.`,
    ],
    requirements: {
      earthSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  oilSlick: {
    color: 'green',
    name: 'Oil Slick',
    cost: {
      any: 0,
    },
    range: '1-2',
    tags: [
      'earthSkill',
    ],
    body: [
      `Place an oil token in target zone.`,
      `@child Make an attack roll against each creatures' motorics defense.`,
      `@child On a hit, set impaired 1 and slowed 1 on the hit creature.`,
    ],
    requirements: {
      earthSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  /*==========
  Barbarian cards
  ==========*/
  battleTrance:{
    barColor: 'barbarianSkill',
    name: 'Battle Trance',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'barbarianSkill',
    ],
    body: [
      `__Buff__, self, 4 turns.`,
      `While you are affected by this card, your physical resistance is increased by 5.`,
    ],
    requirements: {
      barbarianSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  suddenReprisal: {
    barColor: 'barbarianSkill',
    name: 'Sudden Reprisal',
    cost: {
      any: 0,
    },
    range: '0',
    tags: [
      'barbarianSkill',
    ],
    body: [
      `__Reaction__: After the slowed, immobilized, impaired, or fatigued condition is set on you.`,
      `__Buff__, self, 1 turns.`,
      `While you are affected by this card, you have immunity to slowed, immobilized, impaired, and fatigued.`,
    ],
    requirements: {
      barbarianSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  bodySlam: {
    barColor: 'barbarianSkill',
    name: 'Body Slam',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'barbarianSkill',
    ],
    body: [
      `Make a melee attack against target creature's armor defense.`,
      `@child On a hit, deal @weaponModifier physical damage.`,
      `@child If a creature took damage from this, set immobilized 1 and dazed 1 on it. If you are under the effects of a @barbarianSkill card, set impaired 1 on it as well.`,
    ],
    requirements: {
      barbarianSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  doubleStrike: {
    barColor: 'barbarianSkill',
    name: 'Double Strike',
    cost: {
      any: 2,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'barbarianSkill',
    ],
    body: [
      `__Requires__: Two weapons equipped`,
      `Make a melee weapon attack against target creature's armor defense.`,
      `@child On a hit, deal 4 + @weaponModifier damage.`,
      `@child If a creature took damage from this attack and you are under the effects of a @barbarianSkill card, set dazed 1 on it.`,
      `You may repeat this process once more.`,
    ],
    requirements: {
      barbarianSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  heavyBlow: {
    barColor: 'barbarianSkill',
    name: 'Heavy Blow',
    cost: {
      any: 1,
    },  
    range: '0',
    tags: [
      'meleeAttack',
      'barbarianSkill',
    ],
    body: [
      `Make a melee weapon attack against target creature's armor defense.`,
      `@child On a hit deal 6 + @weaponModifier physical damage. If you are under the effects of a @barbarianSkill card, deal 10 + @weaponModifier damage instead.`,
    ],
    requirements: {
      barbarianSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  cleave: {
    barColor: 'barbarianSkill',
    name: 'Cleave',
    cost: {
      any: 2,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'barbarianSkill',
    ],
    body: [
      `__Requires__: A two-handed melee weapon equipped`,
      `Make a melee attack against up to two target creatures' armor defense.`,
      `@child On a hit, deal 6 + @weaponModifier physical damage. If you are under the effects of a @barbarianSkill card, deal 12 + @weaponModifier physical damage instead.`,
    ],
    requirements: {
      barbarianSkill: 1, 
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  /*==========
  Barbarian/Aeromancer cards
  ==========*/
  rushingBlow: {
    barColor: 'barbarianSkill',
    name: `Rushing Blow`,
    cost: {
      any: 1,
    },
    range: '0-1',
    tags: [
      'meleeAttack',
      'barbarianSkill',
      `airSkill`,
    ],
    body: [
      `Shift to target zone.`,
      `@child You may make a melee weapon attack against one creature's armor defense in the targeted zone.`,
      `@child On a hit, deal 4 + @weaponModifier physical damage. If you are under the effects of a @barbarianSkill card, deal an additional 5 air damage.`,
    ],
    requirements: {
      barbarianSkill: 1,
      airSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  airAttunement: {
    barColor: 'barbarianSkill',
    name: `Air Attunement`,
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'barbarianSkill',
      `airSkill`,
    ],
    body: [
      `__Buff__, self, 4 turns.`,
      `While you are affected by this card, your air resistance is increased by 5.`,
      `When you play this card, you may shift 1.`,
    ],
    requirements: {
      barbarianSkill: 1,
      airSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  /*==========
  Barbarian/Hydromancer cards
  ==========*/
  chillingBlow: {
    barColor: 'barbarianSkill',
    name: `Chilling Blow`,
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'barbarianSkill',
      `waterSkill`,
    ],
    body: [
      `Make a melee weapon attack against target creature's armor defense.`,
      `@child On a hit, deal 4 + @weaponModifier physical damage. If you are under the effects of a @barbarianSkill card, deal an additional 5 water damage.`,
      `@child If a creature took water damage from this, set slowed 1 on it. In addition, it must discard a card.`,
    ],
    requirements: {
      barbarianSkill: 1,
      waterSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  waterAttunement: {
    barColor: 'barbarianSkill',
    name: `Water Attunement`,
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'barbarianSkill',
      `waterSkill`,
    ],
    body: [
      `__Buff__, self, 4 turns.`,
      `While you are affected by this card, your water resistance is increased by 5.`,
      `When you play this card, restore @spellcastingModifier health.`,
    ],
    requirements: {
      barbarianSkill: 1,
      waterSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  /*==========
  Barbarian/Pyromancer cards
  ==========*/
  searingBlow: {
    barColor: 'barbarianSkill',
    name: `Searing Blow`,
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'barbarianSkill',
      `fireSkill`,
    ],
    body: [
      `Make a melee weapon attack against target creature's armor defense.`,
      `@child On a hit, deal 4 + @weaponModifier physical damage. If you are under the effects of a @barbarianSkill card, deal 5 fire damage to the hit creature.`,
      `@child If a creature took damage from this effect, set smouldering 2 on it.`,
    ],
    requirements: {
      barbarianSkill: 1,
      fireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  fireAttunement: {
    barColor: 'barbarianSkill',
    name: `Fire Attunement`,
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'barbarianSkill',
      `fireSkill`,
    ],
    body: [
      `__Buff__, self, 4 turns.`,
      `While you are affected by this card, your fire resistance is increased by 5.`,
      `When you play this card, make an attack against each creatures' physique defense in target zone.`,
      `On a hit, deal @spellcastingModifier fire damage.`
    ],
    requirements: {
      barbarianSkill: 1,
      fireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  /*==========
  Barbarian/Geomancer cards
  ==========*/
  leadenBlow: {
    barColor: 'barbarianSkill',
    name: `Leaden Blow`,
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'barbarianSkill',
      `earthSkill`,
    ],
    body: [
      `Make a melee weapon attack against target creature's armor defense.`,
      `@child On a hit, deal 4 + @weaponModifier physical damage. If you are under the effects of a @barbarianSkill card, deal 5 earth damage to the hit creature.`,
      `@child If a creature took damage from this effect, set impaired 1 on it.`,
    ],
    requirements: {
      barbarianSkill: 1,
      earthSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  earthAttunement: {
    barColor: 'barbarianSkill',
    name: `Earth Attunement`,
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'barbarianSkill',
      `earthSkill`,
    ],
    body: [
      `__Buff__, self, 4 turns.`,
      `While you are affected by this card, your earth resistance is increased by 5.`,
      `When you play this card, set your armor and physique defense dice to their maximum value.`,
    ],
    requirements: {
      barbarianSkill: 1,
      earthSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  /*==========
  Marksman cards
  ==========*/
  marksmansShot: {
    barColor: 'marksmanSkill',
    name: `Marksman's Shot`,
    cost: {
      any: 1,
    },
    range: '1-2',
    tags: [
      'rangedAttack',
      'marksmanSkill',
    ],
    body: [
      `Make a ranged attack against target creature's armor defense.`,
      `@child On a hit, deal 6 + @weaponModifier physical damage.`,
    ],
    requirements: {
      marksmanSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  arrowSpray: {
    barColor: 'marksmanSkill',
    name: `Arrow Spray`,
    cost: {
      any: 2,
    },
    range: '1-2',
    tags: [
      'rangedAttack',
      'marksmanSkill',
    ],
    body: [
      `Make a ranged attack with disadvantage against each creatures' armor defense in target zone.`,
      `@child On a hit, deal 8 + @weaponModifier damage.`,
    ],
    requirements: {
      marksmanSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  carefulShot: {
    barColor: 'marksmanSkill',
    name: `Careful Shot`,
    cost: {
      any: 1,
    },
    range: '1-2',
    tags: [
      'rangedAttack',
      'marksmanSkill',
    ],
    body: [
      `Choose one:`,
      `@option __Quiver__: This attack gains a rank of advantage. If this attack deals damage, increase the damage dealt by 4.`,
      `@option Make a ranged attack with advantage against target creature's armor defense.`,
      `@child On a hit, deal 4 + @weaponModifier damage.`,
    ],
    requirements: {
      marksmanSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  calledShot: {
    barColor: 'marksmanSkill',
    name: `Called Shot`,
    cost: {
      any: 1,
    },
    range: '1-2',
    tags: [
      'rangedAttack',
      'marksmanSkill',
    ],
    body: [
      `Choose one:`,
      `@option __Quiver__: This attack gains a rank of disadvantage. If this attack deals damage, increase the damage dealt by 12.`,
      `@option Make a ranged attack with disadvantage against target creature's armor defense.`,
      `@child On a hit, deal 12 + @weaponModifier damage.`,
    ],
    requirements: {
      marksmanSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  barbedArrow: {
    barColor: 'marksmanSkill',
    name: `Barbed Arrow`,
    cost: {
      any: 0,
    },
    range: '0',
    tags: [
      'marksmanSkill',
    ],
    body: [
      `__Quiver__: If a creature takes damage from this attack, set immobilized 1 and impaired 1 on it.`,
    ],
    requirements: {
      marksmanSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  huntersStride: {
    barColor: 'marksmanSkill',
    name: `Hunter's Stride`,
    cost: {
      any: 0,
    },
    range: '0',
    tags: [
      'marksmanSkill',
    ],
    body: [
      `Shift 1`,
    ],
    requirements: {
      marksmanSkill: 1,
    },
    maxCopies: 3, 
    artName: 'searingSpear',
  },
  /*==========
  Swashbuckler cards
  ==========*/
  rakishAssault: {
    barColor: 'swashbuckler',
    name: `Rakish Assault`,
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'swashbucklerSkill',
    ],
    body: [
      `__Flourish__ 0`,
      `Make an attack roll against target creature.`,
      `@child On a hit, deal 3 + @weaponModifier damage. If you flourished, deal 8 + @weaponModifier instead.`,
    ],
    requirements: {
      swashbucklerSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  flurry: {
    barColor: `swashbuckler`,
    name: `Flurry`,
    cost: {
      any: 2,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'swashbucklerSkill',
    ],
    body: [
      `__Requires__: Two weapons equipped`,
      `__Flourish__ 2`,
      `Make an attack roll against target creature.`,
      `@child On a hit, deal 3 + @weaponModifier damage.`,
      `You may repeat this process once. If you flourished, repeat it twice instead.`,
    ],
    requirements: {
      swashbucklerSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  knifeThrow: {
    barColor: `swashbuckler`,
    name: `Knife Throw`,
    cost: {
      any: 0,
    },
    range: '1',
    tags: [
      'rangedAttack',
      'swashbucklerSkill',
    ],
    body: [
      `Make an attack roll against target creature.`,
      `@child On a hit, deal 3 + @weaponModifier damage.`,
      `Exhaust.`,
    ],
    requirements: {
      swashbucklerSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  parryRiposte: {
    barColor: `swashbuckler`,
    name: `Parry / Riposte`,
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'swashbucklerSkill',
    ],
    body: [
      `__Reaction-only__: When a creature would hit you with a melee attack against your armor defense.`,
      `__Flourish__ 1`,
      `Redetermine if the triggering attack would hit, treating your armor defense die as a 5.`,
      `If you flourished and the triggering attack missed, you may make an attack roll against the attacking creature's armor defense, if it is range.`,
      `@child On a hit, deal 11 + @weaponModifier physical damage.`,
    ],
    requirements: {
      swashbucklerSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  envenomedBlade: {
    barColor: `swashbuckler`,
    name: `Envenomed Blade`,
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'swashbucklerSkill',
    ],
    body: [
      `Make an attack roll against target creature's armor defense.`,
      `@child On a hit deal 2 + @weaponModifier damage.`,
      `@child If a creature took damage from this, set impaired 1 on it and bleed 3.`,
    ],
    requirements: {
      swashbucklerSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  harry: {
    barColor: `swashbuckler`,
    name: `Harry`,
    cost: {
      any: 1,
    },
    range: '0',
    tags: [ 
      'meleeAttack',
      'swashbucklerSkill',
    ],
    body: [
      `__Reaction__: When a creature provokes an opportunity attack.`,
      `__Flourish__ 2. If you flourished draw a card.`,
      `If this card was played as a reaction, make an attack roll against the triggering creature's armor defense, if it is in range.`,
      `@child On a hit, deal 8 + @weaponModifier damage.`,
      `If this card was played on your turn, make an attack roll against target creature's armor defense.`,
      `@child On a hit, deal 3 + @weaponModifier damage.`,
    ],
    requirements: {
      swashbucklerSkill: 1,
    },
    maxCopies: 3, 
    artName: 'searingSpear',
  },
  /*==========
  Legionnaire cards
  ==========*/
  guardedThrust: {
    barColor: 'legionnaire',
    name: 'Guarded Thrust',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'legionnaireSkill',
    ],
    body: [
      `Make a melee attack against target creature's armor defense.`,
      `@child On a hit, deal 5 + @weaponModifier physical damage.`,
      `__Followthrough__ X: When you are dealt damage by an attack that targeted your armor, physique or motorics defense.`,
      `@child Reduce the triggering damage by 5 * X.`,
    ],
    requirements: {
      legionnaireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  relentlessStrikes: {
    barColor: 'legionnaire',
    name: 'Relentless Strikes',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'legionnaireSkill',
    ],
    body: [
      `Make a melee weapon attack against target creature's armor defense.`,
      `@child On a hit, deal 4 + @weaponModifier physical damage.`,
      `__Followthrough__ X: When a creature provokes an opportunity attack.`,
      `@child You may make a melee weapon attack against the triggering creature's armor defense, if it is in range.`,
      `@child On a hit, deal (4 * X) + @weaponModifier physical damage.`,
      `@child You may shift 1.`,
    ],
    requirements: {
      legionnaireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  persistentGuard: {
    barColor: 'legionnaire',
    name: 'Persistent Guard',
    cost: {
      any: 0,
    },
    range: '0',
    tags: [
      'legionnaireSkill',
    ],
    body: [
      `__Defend__ 1.`,
      `__Followthrough__: After you roll a defense die.`,
      `@child __Defend__ 1.`,
    ],
    requirements: {
      legionnaireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  standfast: {
    barColor: 'legionnaire',
    name: 'Standfast',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'legionnaireSkill',
    ],
    body: [
      `__Requires__: An equipped two-handed weapon.`,
      `__Defend__ 1.`,
      `__Followthrough__ X: When a hostile creature moves or is pushed into your zone.`,
      `@child Make an melee attack against the triggering creature's armor defense.`,
      `@child On a hit, deal (7 * X) + @weaponModifier physical damage.`,
    ],
    requirements: {
      legionnaireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  driveBack: {
    barColor: 'legionnaire',
    name: 'Drive Back',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'legionnaireSkill',
    ],
    body: [
      `__Requires__: An equipped shield.`,
      `Make a melee weapon attack against target creature's physique defense.`,
      `@child On a hit, deal 2 + @weaponModifier physical damage.`,
      `@child If a creature took damage from this effect, push them 1.`,
      `@child If you chose to push a creature you may shift 1 towards them.`,
    ],
    requirements: {
      legionnaireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  regroup: {
    barColor: 'legionnaire',
    name: 'Regroup',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'legionnaireSkill',
    ],
    body: [
      `You and up to one other target allied creature may move 1.`,
      `@child If a creature used this movement, it may __defend__ 1.`,
    ],
    requirements: {
      legionnaireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
};