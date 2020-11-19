let cards = {
  /*==========
  Pyromancer cards
  ==========*/
  flameLance: {
    color: 'red',
    cost: {
      any: 1,
    },
    range: '1-2',
    tags: [
      'rangedAttack',
      'fireSkill'
    ],
    body: `
      makeAttackAgainst({
        type: spell,
        range: ranged,
        defense: armor,
      });
      targetEntity({
        range: range(1-2),
      });
      onHit();
      deal();
		damage({
        fire: add(8, ref(spellcastingModifier))
      });
      end();
      end();
    `,
    requirements: {
      fireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  incendiaryBurst: {
    color: 'red',
    cost: {
      any: 1,
    },
    range: '0-1',
    tags: [
      'fireSkill',
    ],
    body: `
        makeAttackAgainst({
            type: spell,
            defense: motorics,
        });
        entityIn({
            noObjects: true,
            limit: 0,
        });
        targetZone({
            range: range(1, 2),
        });
        onHit();
        deal();
		damage({
            fire: add(2, ref(spellcastingModifier)),
        });
        end();
        affect();
        placeTokens({
            tokenType: fire,
        });
        end();
        end();
    `,
    requirements: {
      fireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  fieryGrasp: {
    color: 'red',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'fireSkill',
    ],
    body: `
      makeAttackAgainst({
        range: melee,
        type: spell,
        defense: motorics,
      });
      targetEntity({
        noObjects: true,
        range: range(0),
      });
      onHit();
      deal();
		damage({
        fire: add(4, ref(spellcastingModifier)),
      });
      ifDamaged({});
      set({
        smouldering: 3,
      });
      end();
      end();
    `,
    requirements: {
      fireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  innerFire: {
    color: 'red',
    cost: {
        any: 1,
    },
    range: '0-1',
    tags: [
        'fireSkill',
    ],
    body: `
        affect();
        targetEntity({
            noObjects: true,
            range: range(0,1),
        });
        clear({
            slowed: true,
            drenched: true,
            fatigued: true,
            dazed: true,
        });
        end();
        affect();
        draw({});
        end();
        end();
    `,
    requirements: {
      fireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  heatWave: {
    color: 'red',
    cost: {
      any: 1,
      fire: 1,
    },
    range: '0-1',
    tags: [
      'fireSkill',
    ],
    body: `
        requires();
        self();
        equipped();
        itemByType({
            type: staff,
        });
        newContext();
        makeAttackAgainst({
            type: spell,
            defense: motorics,
        });
        targetEntity({
            noObjects: true,
            limit: 0,
            range: range(0 ,1),
        });
        onHit();
        deal();
		damage({
            fire: ref(spellcastingModifier),
        });
        end();
        newContext();
        affect();
        targetZone({
            limit: 3,
        });
        placeTokens({
            tokenType: fire,
        });
        end();
        end();
    `,
    requirements: {
      fireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  spark: {
    color: 'red',
    cost: {
      any: 0,
    },
    range: '0-1',
    tags: [
      `rangedAttack`,
      `fireSkill`,
    ],
    body: `
        declareContext();
        targetZone({
            range: range(0,1),
        });
        splitContext();
        entityIn({
            limit: 1,
        });
        makeAttackAgainst({
            type: spell,
            range: ranged,
            defense: armor,
        });
        onHit();
        deal();
		damage({
            fire: ref(spellcastingModifier),
        });
        end();
        end();
        same();
        affect();
        replaceTokens({
            limit: 1,
            oldType: oil,
            newType: fire,
        });
        end();
        end();
    `,
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
    cost: {
      any: 1,
    },
    range: '1-2',
    tags: [
      'rangedAttack',
      'airSkill'
    ],
    body: `
        makeAttackAgainst({
            type: spell,
            range: ranged,
            defense: armor,
        });
        targetEntity({
            noObjects: true,
            range: range(0, 1),
        });
        onHit();
        deal();
		damage({
            air: add(6, ref(spellcastingModifier)),
        });
        ifDamaged({});
        invert();
        cardWithTag({
            tags: rangedAttack,
        });
        end();
        end();
    `,
    requirements: {
      airSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  blowback: {
    color: 'white',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'airSkill'
    ],
    body: `
        makeAttackAgainst({
            type: spell,
            range: melee,
            defense: physique,
        });
        targetEntity({
            noObjects: true,
            range: range(0),
        });
        onHit();
        deal();
		damage({
            air: add(2, ref(spellcastingModifier)),
        });
        end();
        newContext();
        affect();
        self();
        shift({
            distance: 1,
        });
        end();
        end();
    `,
    requirements: {
      airSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  knockdownBlasts: {
    color: 'white',
    cost: {
      any: 2,
    },
    range: '1-2',
    tags: [
      'rangedAttack',
      'airSkill',
    ],
    body: `
        makeAttackAgainst({
            type: spell,
            range: ranged,
            defense: physique,
        });
        targetEntity({
            noObjects: true,
            limit: 2,
            range: range(1,2),
        });
        onHit();
        deal();
		damage({
            air: ref(spellcastingModifier),
        });
        ifDamaged({});
        set({
            dazed: 1,
            immobilized: 1,
        });
        end();
        end();
    `,
    requirements: {
      airSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  shiftingGust: {
    color: 'white',
    cost: {
      any: 1,
    },
    range: '0-1',
    tags: [
      'airSkill',
    ],
    body: `
        affect();
        targetEntity({
            range: range(0,1),
            disposition: allied,
            noObjects: true,
        });
        shift({
            distance: 1,
        });
        end();
        affect();
        removeTokens({});
        end();
        end();
    `,
    requirements: {
      airSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  silencingGust: {
    color: 'white',
    cost: {
      air: 1,
    },
    range: '1-2',
    tags: [
      'airSkill',
    ],
    body: `
        requires({});
        self();
        equipped();
        itemByType({
            type: staff,
        });
        newContext();
        makeAttackAgainst({
            type: spell,
            defense: physique,
        });
        targetEntity({
            noObjects: true,
            range: range(1, 2),
        });
        onHit();
        deal();
        damage({
            air: add(7, ref(spellcastingModifier)),
        });
        ifDamaged({});
        invert();
        spell();
        end();
        end();
    `,
    requirements: {
      airSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  disperse: {
    color: 'white',
    cost: {
      any: 0,
    },
    range: '0-2',
    tags: [
      'airSkill',
    ],
    body: `
        affect();
        targetZone({
            range: range(0,2),
        });
        removeTokens({
            limit: 0,
            excludeType: air,
        });
        end();
        end();
    `,
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
    cost: {
      any: 1,
    },
    range: '1-2',
    tags: [
      'rangedAttack',
      'waterSkill'
    ],
    body: `
        makeAttackAgainst({
            type: spell,
            range: ranged,
            defense: armor,
        });
        targetEntity({
            range: range(1, 2),
        });
        onHit();
        deal();
		damage({
            water: add(6, ref(spellcastingModifier)),
        });
        end();
        affect();
        placeTokens({
            tokenType: water,
        });
        end();
        end();
    `,
    requirements: {
      waterSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  chillTouch: {
    color: 'blue',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'waterSkill',
    ],
    body: `
        makeAttackAgainst({
            type: spell,
            range: melee,
            defense: armor,
        });
        targetEntity({
            range: range(0),
        });
        onHit();
        deal();
		damage({
            water: add(2, ref(spellcastingModifier)),
        });
        ifDamaged({});
        twoEffects();
        set({
            drenched: 3,
            slowed: 1,
        });
        discard({
            quantity: 1,
        });
        end();
        end();
    `,
    requirements: {
      waterSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  upswell: {
    color: 'blue',
    cost: {
      any: 1,
    },
    range: '1-2',
    tags: [
      'waterSkill',
    ],
    body: `
        makeAttackAgainst({
            type: spell,
            defense: motorics,
        });
        entityIn({
            noObjects: true,
            limit: 0,
        });
        targetZone({
            range: range(1, 2),
        });
        onHit();
        deal();
		damage({
            water: ref(spellcastingModifier),
        });
        ifDamaged({});
        set({
            drenched: 3,
        });
        end();
        end();
    `,
    requirements: {
      waterSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  soothingWaters: {
    color: 'blue',
    cost: {
      any: 1,
    },
    range: '0-1',
    tags: [
      'waterSkill',
    ],
    body: `
        affect();
        targetEntity({
            range: range(0,1),
            noObjects: true,
        });
        restoreHealth({
            quantity: add(12, ref(spellcastingModifier)),
        });
        end();
        affect();
        clear({
            smouldering: true,
        });
        end();
        end();
    `,
    requirements: {
      waterSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  gush: {
    color: 'blue',
    cost: {
      water: 1,
    },
    range: '0-2',
    tags: [
      'waterSkill',
    ],
    body: `
        requires();
        self();
        equipped();
        itemByType({
            type: staff,
        });
        newContext();
        affect();
        targetToken({
            type: water,
            range: range(0,2),
        });
        move({
            distance: 1,
        });
        end();
        changeContext();
        entityInRangeOf({
            noObjects: true,
        });
        makeAttackAgainst({
            type: spell,
            defense: armor,
        });
        onHit();
        deal();
		damage({
            water: add(6, ref(spellcastingModifier)),
        });
        ifDamaged({});
        set({
            dazed: 1,
        });
        end();
        end();
    `,
    requirements: {
      waterSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
    },
  douse: {
    color: 'blue',
    cost: {
      any: 0,
    },
    range: '0-2',
    tags: [
      'waterSkill',
    ],
    body: `
        affect();
        targetZone({
            limit: 2,
            range: range(0,2),
        });
        placeTokens({
            limit: 1,
            tokenType: water,
        });
        end();
        end();
    `,
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
    cost: {
      any: 1,
    },
    range: '0-1',
    tags: [
      'meleeAttack',
      'earthSkill'
    ],
    body: `
        makeAttackAgainst({
            type: spell,
            range: melee,
            defense: armor,
        });
        targetEntity({
            range: range(0,1),
        });
        onHit();
        deal();
		damage({
            earth: add(6, ref(spellcastingModifier)),
        });
        ifDamaged({});
        invert();
        cardWithTag({
            tags: meleeAttack,
        });
        end();
        end();
    `,
    requirements: {
      earthSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  stonefist:{
    color: 'green',
    cost: {
      any: 1,
    },
    range: '0',
    tags:[
      'meleeAttack',
      'earthSkill',
    ],
    body: `
        makeAttackAgainst({
            type: spell,
            range: melee,
            defense: armor,
        });
        targetEntity({
            range: range(0),
            noObjects: true,
        });
        onHit();
        deal();
		damage({
            earth: add(5, ref(spellcastingModifier)),
        });
        ifDamaged({});
        set({
            immobilized: 1,
        });
        end();
        end();
    `,
    requirements: {
      earthSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  sandspout: {
    color: 'green',
    cost: {
      any: 1,
    },
    range: '1-2',
    tags: [
      'rangedAttack',
      'earthSkill',
    ],
    body: `
        makeAttackAgainst({
            type: spell,
            range: ranged,
            defense: motorics,
        });
        entityIn({
            limit: 0,
            noObjects: true,
        });
        targetZone({
            range: range(1, 2),
        });
        onHit();
        set({
            blinded: 2,
        });
        end();
        end();
    `,
    requirements: {
      earthSkill: 1,
    }, 
    maxCopies: 3,
    artName: 'searingSpear',
  },
  earthenArmor: {
    color: 'green',
    cost: {
      any: 1,
    },
    range: '0-1',
    tags: [
      'earthSkill',
    ],
    body: `
        affect();
        targetEntity({
            range: range(0, 1),
            noObjects: true,
        });
        maxDefense({
            armor: true,
            physique: true,
        });
        end();
        affect();
        set({
            caked: 3,
        });
        end();
        end();
    `,
    requirements: {
      earthSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  gravelBarrage: {
    color: 'green',
    cost: {
      any: 1,
      earth: 1,
    },
    range: '1-2',
    tags: [
      'earthSkill',
    ],
    body: `
        requires();
        self();
        equipped();
        itemByType({
            type: staff,
        });
        newContext();
        repeatable();
        noContext();
        makeAttackAgainst({
            type: spell,
            range: ranged,
            defense: armor,
        });
        targetEntity({
            range: range(1,2),
        });
        onHit();
        deal();
		damage({
            earth: add(3, ref(spellcastingModifier)),
        });
        end();
        end();
        repeat({
            times: 2,
        });
        end();
        end();
        end();
    `,
    requirements: {
      earthSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  oilSlick: {
    color: 'green',
    cost: {
      any: 0,
    },
    range: '1-2',
    tags: [
      'earthSkill',
    ],
    body: `
        affect();
        targetZone({
            range: range(1,2),
        });
        placeTokens({
            tokenType: oil,
        });
        end();
        changeContext();
        entityIn({
            limit: 0,
            noObjects: true,
        });
        makeAttackAgainst({
            type: spell,
            defense: motorics,
        });
        onHit();
        set({
            impaired: 1,
            slowed: 1,
        });
        end();
        end();
    `,
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
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'barbarianSkill',
    ],
    body: `
        affect();
        self();
        buff({
            duration: 4,
        });
        end();
        whileBuffed();
        increaseResistances({
            resistances: list(physical),
            quantity: 5,
        });
        end();
        end();
    `,
    requirements: {
      barbarianSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  suddenReprisal: {
    barColor: 'barbarianSkill',
    cost: {
      any: 0,
    },
    range: '0',
    tags: [
      'barbarianSkill',
    ],
    body: `
        affect();
        self();
        buff({
            duration:1,
        });
        end();
        whileBuffed();
        conditionImmunity({
            conditions: list(slowed, immobilized, enfeebled, fatigued),
        });
        end();
        reaction();
            onConditionSet({
                conditions: list(slowed, immobilized, enfeebled, fatigued),
            });
            end();
        end();
    `,
    requirements: {
      barbarianSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  bodySlam: {
    barColor: 'barbarianSkill',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'barbarianSkill',
    ],
    body: `
        makeAttackAgainst({
            type: weapon,
            range: melee,
            defense: armor,
        });
        targetEntity({
            range: range(0),
        });
        onHit();
        deal();
        damage({
            physical: ref(weaponModifier),
        });
        ifDamaged({});
        set({
            immobilized: 1,
            dazed: 1,
        });
        additional();
        changeContext();
        toSelf();
        areBuffedBy();
        cardWithTag({
            tags: barbarianSkill,
        });
        set({
            enfeebled: 1,
        });
        end();
        end();
    `,
    requirements: {
      barbarianSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  doubleStrike: {
    barColor: 'barbarianSkill',
    cost: {
      any: 2,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'barbarianSkill',
    ],
    body: `
        requires();
        self();
        dualWielding();
        newContext();
        repeatable();
        noContext();
        makeAttackAgainst({
            type: weapon,
            range: melee,
            defense: armor,
        });
        targetEntity({
            range: range(0),
        });
        onHit();
        deal();
        damage({
            physical: add(4, ref(weaponModifier)),
        });
        ifDamagedAnd({});
        changeContext();
        toSelf();
        areBuffedBy();
        cardWithTag({
            tags: barbarianSkill,
        });
        set({
            dazed: 1,
        });
        end();
        end();
        repeat({
            times: 1,
        });
        end();
        end();
        end();
    `,
    requirements: {
      barbarianSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  heavyBlow: {
    barColor: 'barbarianSkill',
    cost: {
      any: 1,
    },  
    range: '0',
    tags: [
      'meleeAttack',
      'barbarianSkill',
    ],
    body: `
        makeAttackAgainst({
            type: weapon,
            range: melee,
            defense: armor,
        });
        targetEntity({
            range: range(0),
        });
        onHit();
        instead();
        changeContext();
        toSelf();
        areBuffedBy();
        cardWithTag({
            tags: barbarianSkill,
        });
        deal();
        damage({
            physical: add(6, ref(weaponModifier)),
        });
        deal();
        damage({
            physical: add(10, ref(weaponModifier)),
        });
        end();
        end();
    `,
    requirements: {
      barbarianSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  cleave: {
    barColor: 'barbarianSkill',
    cost: {
      any: 2,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'barbarianSkill',
    ],
    body: `
        requires();
        self();
        equipped();
        weaponWithProperties({
            properties: list(two-handed, melee),
        });
        newContext();
        makeAttackAgainst({
            type: weapon,
            range: melee,
            defense: armor,
        });
        targetEntity({
            limit: 2,
            range: range(0),
        });
        onHit();
        instead();
        changeContext();
        toSelf();
        areBuffedBy();
        cardWithTag({
            tags: barbarianSkill,
        });
        deal();
        damage({
            physical: add(6, ref(weaponModifier)),
        });
        deal();
		damage({
            physical: add(12, ref(weaponModifier)),
        });
        end();
        end();
    `,
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
    color: 'brown/white',
    cost: {
      any: 1,
    },
    range: '0-1',
    tags: [
      'meleeAttack',
      'barbarianSkill',
      `airSkill`,
    ],
    body: `
        affect();
        targetZone({
            range: range(0, 1),
        });
        shiftTo();
        self();
        end();
        changeContext();
        entityIn({});
        makeAttackAgainst({
            type: weapon,
            range: melee,
            defense: armor,
        });
        onHit();
        deal();
		damage({
            physical: add(4, ref(weaponModifier)),
        });
        additional();
        changeContext();
        toSelf();
        areBuffedBy();
        cardWithTag({
            tags: barbarianSkill,
        });
        deal();
		damage({
            air: 5,
        });
        end();
        end();
    `,
    requirements: {
      barbarianSkill: 1,
      airSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  airAttunement: {
    barColor: 'barbarianSkill',
    color: 'brown/white',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'barbarianSkill',
      `airSkill`,
    ],
    body: `
        affect();
            self();
            shift({
                distance: 1,
            });
        end();
        affect();
        buff({
            duration: 4,
        });
        end();
        whileBuffed();
        increaseResistances({
            resistances: list(air),
            quantity: 5,
        });
        end();
        end();
    `,
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
    color: 'brown/blue',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'barbarianSkill',
      `waterSkill`,
    ],
    body: `
        makeAttackAgainst({
            type: weapon,
            range: melee,
            defense: armor,
        });
        targetEntity({
            range: range (0),
            noObjects: true,
        });
        onHit();
        deal();
		damage({
            physical: add(4, ref(weaponModifier)),
        });
        additional();
        changeContext();
        toSelf();
        areBuffedBy();
        cardWithTag({
            tags: barbarianSkill,
        });
        deal();
		damage({
            water: 5,
        });
        ifDamaged({
            type: water,
        });
        twoEffects();
        set({
            slowed: 1,
        });
        discard({
            quantity: 1,
        });
        end();
        end();
    `,
    requirements: {
      barbarianSkill: 1,
      waterSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  waterAttunement: {
    barColor: 'barbarianSkill',
    color: 'brown/blue',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'barbarianSkill',
      `waterSkill`,
    ],
    body: `
        affect();
        self();
        restoreHealth({
            quantity: ref(spellcastingModifier),
        });
        end();
        affect();
        buff({
            duration: 4,
        });
        end();
        whileBuffed();
        increaseResistances({
            resistances: list(water),
            quantity: 5,
        });
        end();
        end();
    `,
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
    color: 'brown/red',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'barbarianSkill',
      `fireSkill`,
    ],
    body: `
        makeAttackAgainst({
            type: weapon,
            range: melee,
            defense: armor,
        });
        targetEntity({
            range: range (0),
            noObjects: true,
        });
        onHit();
        deal();
		damage({
            physical: add(4, ref(weaponModifier)),
        });
        additional();
        changeContext();
        toSelf();
        areBuffedBy();
        cardWithTag({
            tags: barbarianSkill,
        });
        deal();
		damage({
            fire: 5,
        });
        ifDamaged({
            type: fire,
        });
        set({
            smouldering: 1,
        });
        end();
        end();
    `,
    requirements: {
      barbarianSkill: 1,
      fireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  fireAttunement: {
    barColor: 'barbarianSkill',
    color: 'brown/red',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'barbarianSkill',
      `fireSkill`,
    ],
    body: `
        makeAttackAgainst({
            type: spell,
            defense: physique,
        });
        entityIn({
            limit: 0,
            noObjects: true,
            other: true,
        });
        self();
        onHit();
        deal();
		damage({
            fire: ref(spellcastingModifier),
        });
        end();
        changeContext();
        toSelf();
        affect();
        buff({
            duration: 4,
        });
        end();
        whileBuffed();
        increaseResistances({
            resistances: list(fire),
            quantity: 5,
        });
        end();
        end();
    `,
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
    color: 'brown/green',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'barbarianSkill',
      `earthSkill`,
    ],
    body: `
        makeAttackAgainst({
            type: weapon,
            range: melee,
            defense: armor,
        });
        targetEntity({
            range: range (0),
            noObjects: true,
        });
        onHit();
        deal();
		damage({
            physical: add(4, ref(weaponModifier)),
        });
        additional();
        changeContext();
        toSelf();
        areBuffedBy();
        cardWithTag({
            tags: barbarianSkill,
        });
        deal();
		damage({
            earth: 5,
        });
        ifDamaged({
            type: earth,
        });
        set({
            impaired: 1,
        });
        end();
        end();
    `,
    requirements: {
      barbarianSkill: 1,
      earthSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  earthAttunement: {
    barColor: 'barbarianSkill',
    color: 'brown/green',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'barbarianSkill',
      `earthSkill`,
    ],
    body: `
        affect();
        self();
        maxDefense({
            armor: true,
            physique: true,
        });
        end();
        affect();
        buff({
            duration: 4,
        });
        end();
        whileBuffed();
        increaseResistances({
            resistances: list(earth),
            quantity: 5,
        });
        end();
        end();
    `,
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
  marksman_asShot: {
    barColor: 'marksmanSkill',
    cost: {
      any: 1,
    },
    range: '1-2',
    tags: [
      'rangedAttack',
      'marksmanSkill',
    ],
    body: `
        makeAttackAgainst({
            type: weapon,
            range: ranged,
            defense: armor,
        });
        targetEntity({
            range: range(1,2)
        });
        onHit();
        deal();
		damage({
            physical: add(6, ref(weaponModifier)),
        });
        end();
        end();
    `,
    requirements: {
      marksmanSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  arrowSpray: {
    barColor: 'marksmanSkill',
    cost: {
      any: 2,
    },
    range: '1-2',
    tags: [
      'rangedAttack',
      'marksmanSkill',
    ],
    body: `
        makeAttackAgainst({
            type: weapon,
            range: ranged,
            defense: armor,
            advantage: -1,
        });
        entityIn({
            limit: 0,
        });
        targetZone({
            range: range(1,2)
        });
        onHit();
        deal();
		damage({
            physical: add(8, ref(weaponModifier)),
        });
        end();
        end();
    `,
    requirements: {
      marksmanSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  carefulShot: {
    barColor: 'marksmanSkill',
    cost: {
      any: 1,
    },
    range: '1-2',
    tags: [
      'rangedAttack',
      'marksmanSkill',
    ],
    body: `
        chooseOne();
        noContext();
        quiver({
            effectCount: 2,
        });
        modifyCard();
        applyEffect();
        advantage();
        increaseAttackDamage({
            by: 5,
        });
        makeAttackAgainst({
            type: weapon,
            range: ranged,
            defense: armor,
            advantage: 1,
        });
        targetEntity({
            range: range(0-2),
        });
        onHit();
        deal();
        damage({
            physical: ref(weaponModifier),
        });
        end();
        end();
    `,
    requirements: {
      marksmanSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  calledShot: {
    barColor: 'marksmanSkill',
    cost: {
      any: 1,
    },
    range: '1-2',
    tags: [
      'rangedAttack',
      'marksmanSkill',
    ],
    body: `
        chooseOne();
        noContext();
        quiver({
            effectCount: 2,
        });
        modifyCard({});
        applyEffect();
        disadvantage();
        increaseAttackDamage({
            by: 12,
        });
        makeAttackAgainst({
            type: weapon,
            range: ranged,
            defense: armor,
            advantage: -1,
        });
        targetEntity({
            range: range(0-2),
        });
        onHit();
        deal();
        damage({
            physical: add(8, ref(weaponModifier)),
        });
        end();
        end();
    `,
    requirements: {
      marksmanSkill: 1,
    }, 
    maxCopies: 3,
    artName: 'searingSpear',
  },
  barbedArrow: {
    barColor: 'marksmanSkill',
    cost: {
      any: 0,
    },
    range: '0',
    tags: [
      'marksmanSkill',
    ],
    body: `
        quiver({
            effectCount: 1,
        });
        modifyCard();
        applyEffect();
        ifDamaged({});
        targetEntity({});
        set({
            immobilized: 1,
            enfeebled: 1,
        });
        end();
    `,
    requirements: {
      marksmanSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  hunter_asStride: {
    barColor: 'marksmanSkill',
    cost: {
      any: 0,
    },
    range: '0',
    tags: [
      'marksmanSkill',
    ],
    body: `
        affect();
        self();
        shift({
            distance: 1,
        });
        end();
        end();
    `,
    requirements: {
      marksmanSkill: 1,
    },
    maxCopies: 3, 
    artName: 'searingSpear',
  },
  /*==========
  Marksman cards / Aeromancer
  ==========*/
  curvingShot: {
    barColor: 'marksmanSkill',
    color: 'brown/white',
    cost: {
      air: 1,
    },
    range: '1-2',
    tags: [
      'rangedAttack',
      'marksmanSkill',
      'airSkill',
    ],
    body: `
        makeAttackAgainst({
            type: weapon,
            range: ranged,
            defense: armor,
        });
        targetEntity({
            range: range(1,2),
        });
        onMiss();
        redirect();
        entityInRangeOf({
            range: range(0,1),
            other: true,
        });
        onHit();
        deal();
        damage({
            physical: ref(weaponModifier),
            air: 6,
        });
        end();
        end();
    `,
    requirements: {
      marksmanSkill: 1,
      airSkill: 1,
    },
    maxCopies: 3, 
    artName: 'searingSpear',
  },
  quickShot: {
    barColor: 'marksmanSkill',
    color: 'brown/white',
    cost: {
      any: 0,
    },
    range: '0-1',
    tags: [
      'rangedAttack',
      'marksmanSkill',
      'airSkill',
    ],
    body: `
        makeAttackAgainst({
            type: weapon,
            range: ranged,
            defense: armor,
        });
        targetEntity({
            range: range(0, 1),
        });
        onHit();
        deal();
		damage({
            physical: ref(weaponModifier),
        });
        end();
        end();
    `,
    requirements: {
      marksmanSkill: 1,
      airSkill: 1,
    },
    maxCopies: 3, 
    artName: 'searingSpear',
  },
  /*==========
  Marksman cards / Hydromancer
  ==========*/
  vampiricShot: {
    barColor: 'marksmanSkill',
    color: 'brown/blue',
    cost: {
      water: 1,
    },
    range: '1-2',
    tags: [
      'rangedAttack',
      'marksmanSkill',
      'waterSkill',
    ], 
    body: `
        chooseOne();
        noContext();
        quiver({
            effectCount: 2,
        });
        increaseAttackDamage({
            by: 5,
            type: water,
        });
        modifyCard();
        applyEffect();
        ifDamaged({});
        targetEntity({
            noObjects: true,
        });
        lifesteal({
            type: water,
        });
        self();
        end();
        makeAttackAgainst({
            type: weapon,
            range: ranged,
            defense: armor,
        });
        targetEntity({
            range: range(0-2),
        });
        onHit();
        deal();
        damage({
            physical: ref(weaponModifier),
            water: 5,
        });
        ifDamaged({});
        lifesteal({
            type: water,
        });
        self();
        end();
        end();
    `,
    requirements: {
      marksmanSkill: 1,
      waterSkill: 1,
    },
    maxCopies: 3, 
    artName: 'searingSpear',
  },
  waterArrow: {
    barColor: 'marksmanSkill',
    color: 'brown/blue',
    cost: {
      water: 1,
    },
    range: '1-2',
    tags: [
      'rangedAttack',
      'marksmanSkill',
      'waterSkill',
    ], 
    body: `
        chooseOne();
        noContext();
        quiver({
            effectCount: 1,
        });
        convertDamage({
            toType: water,
            increaseBy: 5,
        });
        makeAttackAgainst({
            type: weapon,
            range: ranged,
            defense: armor,
        });
        targetEntity({
            range: range(1, 2),
        });
        onHit();
        deal();
        damage({
            water: add(6, ref(weaponModifier)),
        });
        end();
        end();
    `,
    requirements: {
      marksmanSkill: 1,
      waterSkill: 1,
    },
    maxCopies: 3, 
    artName: 'searingSpear',
  },
  /*==========
  Marksman cards / Pyromancer
  ==========*/
  incendiaryArrow: {
    barColor: 'marksmanSkill',
    color: 'brown/red',
    cost: {
      fire: 1,
    },
    range: '1-2',
    tags: [
      'rangedAttack',
      'marksmanSkill',
      'fireSkill',
    ], 
    body: `
        chooseOne();
        noContext();
        quiver({
            effectCount: 2,
        });
        increaseAttackDamage({
            type: fire,
            by: 8,
        });
        modifyCard();
        applyEffect();
        ifDamaged({
            type: fire,
        });
        targetEntity({});
        set({
            smouldering: 2,
        });
        end();
        makeAttackAgainst({
            type: weapon,
            range: ranged,
            defense: armor,
        });
        targetEntity({
            range: range(1-2),
        });
        onHit();
        deal();
        damage({
            physical: add(3, ref(weaponModifier)),
            fire: 6,
        });
        ifDamaged({});
        set({
            smouldering: 2,
        });
        end();
        end();
    `,
    requirements: {
      marksmanSkill: 1,
      fireSkill: 1,
    },
    maxCopies: 3, 
    artName: 'searingSpear',
  },
  sparkingArrows: {
    barColor: 'marksmanSkill',
    color: 'brown/red',
    cost: {
      any: 0,
    },
    range: '0',
    tags: [
      'marksmanSkill',
      'fireSkill',
    ], 
    body: `
        affect();
            self();
            buff({
                duration: 3,
            });
        end();
        whileBuffed();
            modifyCards();
            cardWithTag({
                tags: rangedAttack,
                limit: 0,
            });
            applyEffect();
            ifDamagedAnd({
                type: physical,
            });
            targetEntity({
                noObjects: true,
            });
            lucky({
                proc: 1,
                per: 3,
            });
            deal();
            damage({
                fire: 9,
            });
            end();
        end();
        end();
    `,
    requirements: {
      marksmanSkill: 1,
      fireSkill: 1,
    },
    maxCopies: 3, 
    artName: 'searingSpear',
  },
  /*==========
  Marksman cards / Geomancer
  ==========*/
  obsidianArrow: {
    barColor: 'marksmanSkill',
    color: 'brown/green',
    cost: {
      any: 1,
    },
    range: '1-2',
    tags: [
      'marksmanSkill',
      'earthSkill',
    ], 
    body: `
        chooseOne();
        noContext();
        quiver({
            effectCount: 2,
        });
        increaseAttackDamage({
            type: earth,
            by: 4,
        });
        modifyCard();
        applyEffect();
        ifDamaged({
            type: earth
        });
        targetEntity({
            noObjects: true
        });
        set({
            bleed: 5,
        });
        end();
        makeAttackAgainst({
            type: weapon,
            range: ranged,
            defense: armor,
        });
        targetEntity({
            range: range(1, 2),
            noObjects: true,
        });
        onHit();
        deal();
        damage({
            physical: add(2, ref(weaponModifier)),
            earth: 4,
        });
        ifDamaged({
            type: earth,
        });
        set({
            bleed: 3,
        });
        end();
        end();
    `,
    requirements: {
      marksmanSkill: 1,
      earthSkill: 1,
    },
    maxCopies: 3, 
    artName: 'searingSpear',
  },
  digIn: {
    barColor: 'marksmanSkill',
    color: 'brown/green',
    cost: {
      earth: 1,
    },
    range: '0',
    tags: [
      'marksmanSkill',
      'earthSkill',
    ], 
    body: `
        affect();
            self();
            set({
                immobilized: 2,
            });
        end();
        affect();
            buff({
                duration: 2,
            });
        end();
        whileBuffedAnd();
        areAffectedByConditions({
            conditions: immobilized,
        });
        defenseBonus({
            bonus: 2,
            against: ranged,
        });
        end();
        end();
    `,
    requirements: {
      marksmanSkill: 1,
      earthSkill: 1,
    },
    maxCopies: 3, 
    artName: 'searingSpear',
  },
  /*==========
  Swashbuckler cards
  ==========*/
  rakishAssault: {
    barColor: 'swashbuckler',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'swashbucklerSkill',
    ],
    body: `
        flourish({
            cost: 0,
        });
        self();
        end();
        newContext();
        makeAttackAgainst({
            type: weapon,
            range: melee,
            defense: armor,
        });
        targetEntity({
            range: range(0),
        });
        onHit();
        instead();
        changeContext();
        toSelf();
        flourished();
        deal();
        damage({
            physical: add(3, ref(weaponModifier)),
        });
        deal();
        damage({
            physical: add(8, ref(weaponModifier)),
        });
        end();
        end();
    `,
    requirements: {
      swashbucklerSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  flurry: {
    barColor: `swashbuckler`,
    cost: {
      any: 2,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'swashbucklerSkill',
    ],
    body: `
        requires();
        self();
        dualWielding();
        flourish({
            cost: 2,
        });
        end();
        repeatable();
        newContext();
        makeAttackAgainst({
            type: weapon,
            range: melee,
            defense: armor,
        });
        targetEntity({
            range: range(0),
        });
        onHit();
        deal();
        damage({
            physical: add(3, ref(weaponModifier)),
        });
        end();
        end();
        instead();
        flourished();
        repeat({
            times: 1,
        });
        repeat({
            times: 2,
        });
        end();
        end();
    `,
    requirements: {
      swashbucklerSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  knifeThrow: {
    barColor: `swashbuckler`,
    cost: {
      any: 0,
    },
    range: '0-1',
    tags: [
      'rangedAttack',
      'swashbucklerSkill',
    ],
    body: `
        makeAttackAgainst({
            type: weapon,
            range: ranged,
            defense: armor,
        });
        targetEntity({
            range: range(0-1),
        });
        onHit();
        deal();
        damage({
            physical: add(3, ref(weaponModifier)),
        });
        end();
        exhaust();
        end();
    `,
    requirements: {
      swashbucklerSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  parry_sRiposte: {
    barColor: `swashbuckler`,
    cost: {
      any: 1,
    },
    range: '0-3',
    tags: [
      'meleeAttack',
      'swashbucklerSkill',
    ],
    body: `
        flourish({
            cost: 2,
        });
        self();
        end();

        newContext();

        reaction();
        attacking({
            attackType: melee,
            defenseType: armor,
        });
        targetEntity({
            noObjects: true,
            range: range(0 ,3),
        });
        hits();
        self();
        end();

        splitContext();
        toSelf();
        asChild();
        affect();
        ward();
        end();
        end();
        same();

        asChild();
        conditional({
            conditionCount: 2,
        });

        changeContext();
        toSelf();
        flourished();

        isInRangeOf({
            range: range(0),
        });
        self();

        makeAttackAgainst({
            type: weapon,
            range: melee,
            defense: armor,
        });
        onHit();
        deal();
        damage({
            physical: add(5, ref(weaponModifier)),
        });
        end();
        end();
    `,
    requirements: {
      swashbucklerSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  envenomedBlade: {
    barColor: `swashbuckler`,
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'swashbucklerSkill',
    ],
    body: `
        makeAttackAgainst({
            type: weapon,
            range: melee,
            defense: armor,
        });
        targetEntity({
            noObjects: true,
        });
        onHit();
        deal();
        damage({
            physical: ref(weaponModifier),
            poison: 2,
        });
        ifDamaged({
            type: poison,
        });
        set({
            enfeebled: 1,
            poisoned: 3,
        });
        end();
        end();
    `,
    requirements: {
      swashbucklerSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  harry: {
    barColor: `swashbuckler`,
    cost: {
      any: 1,
    },
    range: '0',
    tags: [ 
      'meleeAttack',
      'swashbucklerSkill',
    ],
    body: `
        flourish({
            cost: 2,
        });
        self();
        conditional({});
        flourished();
        draw({});

        newContext();

        reaction();
        moving();
        targetEntity({
            noObjects: true,
            range: range(0),
        });
        provokesOpportunity();
        self();
        end();

        asChild();
        makeAttackAgainst({
            type: weapon,
            range: melee,
            defense: armor,
        });
        onHit();
        deal();
        damage({
            physical: add(8, ref(weaponModifier)),
        });
        end();

        otherwise();
        newContext();

        makeAttackAgainst({
            type: weapon,
            range: melee,
            defense: armor,
        });
        targetEntity({
            noObjects: true,
            range: range(0),
        });
        onHit();
        deal();
        damage({
            physical: add(3, ref(weaponModifier)),
        });
        end();
        end();
    `,
    requirements: {
      swashbucklerSkill: 1,
    },
    maxCopies: 3, 
    artName: 'searingSpear',
  },
  /*==========
  Swashbuckler / Aeromancer cards
  ==========*/
  forcedPull_sPush: {
    color: 'brown/white',
    barColor: `swashbuckler`,
    cost: {
      air: 1,
    },
    range: '0-1',
    tags: [ 
      'rangedAttack',
      'swashbucklerSkill',
      'airSkill',
    ],
    body: `
        flourish({
        cost: 1,
        });
        self();
        end();

        chooseOne();
        makeAttackAgainst({
            type: spell,
            defense: physique,
        });
            targetEntity({
                range: range(0,1),
            });
            onHit();
            pull({
                distance: 1,
            });
            self();
            additional();
            changeContext();
            toSelf();
            flourished();
            deal();
            damage({
                physical: ref(weaponModifier),
            });
        end();
        end();

        makeAttackAgainst({
        type: spell,
        defense: physique,
        });
        targetEntity({
            range: range(0,1),
        });
        onHit();
        push({
            distance: 1,
        });
        self();
        changeContext();
        toSelf();
        asChild();
        conditional();
            flourished();
            affect();
            shift({});
            end();
        end();
        end();
    `,
    requirements: {
      swashbucklerSkill: 1,
      airSkill: 1,
    },
    maxCopies: 3, 
    artName: 'searingSpear',
  },
  whirlwindSlash: {
    color: 'brown/white',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [ 
      'meleeAttack',
      'swashbucklerSkill',
      'airSkill',
    ],
    body: `
        flourish({
            cost: 2,
        });
        self();
        end();

        newContext();

        affect();
        targetEntity({
            range: range(0),
        });
        instead();
        changeContext();
        toSelf();
        flourished();
        makeAttackAgainst({
            type: weapon,
            range: melee,
            defense: armor,
        });
        end();
        end();
        newContext();
        makeAttackAgainst({
            type: weapon,
            range: melee,
            defense: armor,
        });
        targetEntity({
            range: range(0),
            limit: 0,
        });
        end();
        end();
        onHit();
        deal();
        damage({
            physical: ref(weaponModifier),
            air: 5,
        });
        end();
        end();
    `,
    requirements: {
      swashbucklerSkill: 1,
      airSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  /*==========
  Swashbuckler / Hydromancer cards
  ==========*/
  bitingSteel: {
    color: 'brown/blue',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [ 
      'meleeAttack',
      'swashbucklerSkill',
      'waterSkill',
    ],
    body: `
        flourish({
            cost: 0,
        });
        self();
        end();

        newContext();

        makeAttackAgainst({
            type: weapon,
            range: melee,
            defense: armor,
        });
        targetEntity({
            range: range(0),
        });
        onHit();
        deal();
        damage({
            physical: ref(weaponModifier),
            water: 4,
        });
        ifDamagedAnd({
            type: water,
        });
        changeContext();
        toSelf();
        flourished();
        set({
            slowed: 1,
            impaired: 1,
        });
        end();
        end();
    `,
    requirements: {
      swashbucklerSkill: 1,
      waterSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  iceKnife: {
    color: 'brown/blue',
    cost: {
      water: 1,
    },
    range: '0-1',
    tags: [ 
      'rangedAttack',
      'swashbucklerSkill',
      'waterSkill',
    ],
    body: `
        makeAttackAgainst({
            type: weapon,
            range: ranged,
            defense: armor,
        });
        targetEntity({
            range: range(0, 1),
        });
        onHit();
        deal();
        damage({
            water: add(5, ref(weaponModifier)),
        });
        end();
        affect();
        placeTokens({
            tokenType: water,
        });
        end();
        end();
    `,
    requirements: {
      swashbucklerSkill: 1,
      waterSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  /*==========
  Swashbuckler / Pyromancer cards
  ==========*/
  brilliantSlash: {
    color: 'brown/red',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'swashbucklerSkill',
      'fireSkill',
    ],
    body: `
        flourish({
            cost: 1,
        });
        self();
        end();

        newContext();

        makeAttackAgainst({
            type: weapon,
            range: melee,
            defense: armor,
        });
        targetEntity({
            range: range(0),
        });
        onHit();
        deal();
        damage({
            physical: add(4, ref(weaponModifier)),
        });
        additional();
        changeContext();
        toSelf();
        flourished();
        deal();
        damage({
            fire: 4,
        });
        ifDamaged({
            type: fire,
        });
        set({
            blind: 1,
        });
        end();
        end();
    `,
    requirements: {
      swashbucklerSkill: 1,
      fireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  grenado: {
    color: 'brown/red',
    cost: {
      fire: 1,
    },
    range: '0-1',
    tags: [
      'rangedAttack',
      'swashbucklerSkill',
      'fireSkill',
    ],
    body: `
        makeAttackAgainst({
            type: weapon,
            range: ranged,
            defense: motorics,
        });
        entityIn({
            limit: 0,
        });
        targetZone({
            range: range(0, 1),
        });
        onHit();
        deal();
        damage({
            physical: add(2, ref(weaponModifier)),
            fire: 8,
        });
        end();
        exhaust();
        end();
    `,
    requirements: {
      swashbucklerSkill: 1,
      fireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  /*==========
  Swashbuckler / Geomancer cards
  ==========*/
  jaggedEdge: {
    color: 'brown/green',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'swashbucklerSkill',
      'earthSkill',
    ],
    body: `
        flourish({
            cost: 1,
        });
        self();
        end();
        newContext();
        makeAttackAgainst({
            type: weapon,
            range: melee,
            defense: armor,
        });
        targetEntity({
            range: range(0),
        });
        onHit();
        deal();
        damage({
            physical: ref(weaponModifier),
            earth: 5,
        });
        ifDamagedAnd({
            type: earth,
        });
        changeContext();
        toSelf();
        flourished();
        set({
            bleed: 4,
        });
        end();
        end();
    `,
    requirements: {
      swashbucklerSkill: 1,
      earthSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  createPitTrap: {
    color: 'brown/green',
    cost: {
      earth: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'swashbucklerSkill',
      'earthSkill',
    ],
    body: `
        flourish();
            self();
        end();

        newContext();

        reaction();
            moving();
            targetEntity({
                noObjects: true,
                range: range(0),
            });
            entersZoneOf();
            self();
        end();

        asChild();
        makeAttackAgainst({
            type: spell,
            defense: motorics,
        });
            onHit();
            deal();
            damage({
                physical: add(6, ref(spellcastingModifier)),
            });
            ifDamaged();
            set({
                immobilized: 1,
                caked: 3,
            });
        end();
        end();
    `,
    requirements: {
      swashbucklerSkill: 1,
      earthSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  /*==========
  Legionnaire cards
  ==========*/
  guardedThrust: {
    barColor: 'legionnaire',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'legionnaireSkill',
    ],
    body: `
        makeAttackAgainst({
            type: weapon,
            range: melee,
            defense: armor,
        });
        targetEntity({
            range: range(0),
        });
        onHit();
        deal();
        damage({
            physical: add(5, ref(weaponModifier)),
        });
        end();
        newContext();
        affect();
        self();
        plan({
            cards: cardName(block),
        });
        end();
        end();
    `,
    requirements: {
      legionnaireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  block: {
    range: '0',
    tags: [
      'legionnaireSkill',
    ],
    body: `
        enact({
            hasX: true,
        });
        defending({
            attackType: weapon,
            defenseType: list(armor, physique, motorics),
        });
        self();
        whenDamaged();
        end();
        asChild();
            affect();
            reduceDamageTaken({
                by: add(multiply(5, ref(X)), 5),
            });
        end();
        end();
    `,
    maxCopies: 0,
    artName: 'searingSpear',
  },
  relentlessStrikes: {
    barColor: 'legionnaire',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'legionnaireSkill',
    ],
    body: `
        makeAttackAgainst({
            type: weapon,
            range: melee,
            defense: armor,
        });
        targetEntity({
            range: range(0),
        });
        onHit();
        deal();
        damage({
            physical: add(4, ref(weaponModifier)),
        });
        end();
        newContext();
        followthrough({
            hasX: true,
        });
        moving();
        targetEntity({
            noObjects: true,
            hasX: true,
            range: range(0),
        });
        provokesOpportunity();
        self();

        asChild();
        makeAttackAgainst({
            type: weapon,
            defense: armor,
            range: melee,
        });
        onHit();
        deal();
        damage({
            physical: add(multiply(4, ref(X)), ref(weaponModifier)),
        });
        end();
        asChild();
        affect();
        shiftTo({
            distance: 1,
        });
        self();
        end();
        end();
        end();
    `,
    requirements: {
      legionnaireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  persistentGuard: {
    barColor: 'legionnaire',
    cost: {
      any: 0,
    },
    range: '0',
    tags: [
      'legionnaireSkill',
    ],
    body: `
        affect();
            self();
            defend({});
        end();
        affect();
            plan({
                cards: cardName(persistentGuard),
            });
        end();
        enact();
            afterDefenseDieRolled({});
        end();
        asChild();
        affect();
            defend({});
        end();
        asChild();
        affect();
            plan({
                cards: cardName(persistentGuard),
            });
        end();
    end();
    `,
    requirements: {
      legionnaireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  standfast: {
    barColor: 'legionnaire',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'legionnaireSkill',
    ],
    body: `
        requires();
        self();
        equipped();
        weaponWithProperties({
            properties: list(two-handed),
        });
        affect();
        defend();
        end();
        newContext();
        followthrough({
            hasX: true,
        });
        moving();
        targetEntity({
            noObjects: true,
            range: range(0),
        });
        entersZoneOf();
        self();

        asChild();
        makeAttackAgainst({
            type: weapon,
            range: melee,
            defense: armor,
        });
        onHit();
        deal();
        damage({
            physical: add(multiply(7, ref(X)), ref(weaponModifier)),
        });
        end();
        end();
        end();
    `,
    requirements: {
      legionnaireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  driveBack: {
    barColor: 'legionnaire',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'legionnaireSkill',
    ],
    body: `
        requires();
        self();
        equipped();
        itemByType({
            type: shield,
        });
        newContext();
        makeAttackAgainst({
            type: weapon,
            range: melee,
            defense: physique,
        });
        targetEntity({
            range: range(0),
        });
        onHit();
        deal();
        damage({
            physical: add(2, ref(weaponModifier)),
        });
        ifDamaged({});
        push({});
        self();
        end();
        affect();
        shiftTo({
            distance: 1,
        });
        self();
        end();
        end();
    `,
    requirements: {
      legionnaireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  regroup: {
    barColor: 'legionnaire',
    cost: {
      any: 1,
    },
    range: '0-1',
    tags: [
      'legionnaireSkill',
    ],
    body: `
        affect();
        targetEntity({
            disposition: allied,
            limit: 2,
            noObjects: true,
            range: range(0, 1),
        });
        move({
            forced: true,
        });
        end();
        affect();
        defend({});
        end();
        end();
    `,
    requirements: {
      legionnaireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  /*==========
  Legionnaire cards / Aeromancer
  ==========*/
  deflectingGust: {
    color: 'brown/white',
    cost: {
      air: 1,
    },
    range: '0-3',
    tags: [
      'legionnaireSkill',
      'airSkill',
    ],
    body: `
        reaction();
        attacking({
            attackType: ranged,
            defenseType: list(armor, physique, motorics)
        });
        targetEntity({
            noObjects: true,
            range: range(0 ,3),
        });
        hits();
        self();
        end();

        asChild();
        affect();
        redirect();
        forceContext();
        entityInRangeOf({
            noObjects: true,
            range: range(0, 1),
        });
        self();
        end();
        end();
        end();
    `,
    requirements: {
      legionnaireSkill: 1,
      airSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  warmagic_cBreeze: {
    color: 'brown/white',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'legionnaireSkill',
      'airSkill',
      'meleeAttack',
    ],
    body: `
        makeAttackAgainst({
            type: weapon,
            defense: armor,
            range: melee,
        });
        targetEntity({
            noObjects: true,
            range: range(0),
        });
        onHit();
        deal();
        damage({
            physical: ref(weaponModifier),
            air: 8,
        });
        end();
        newContext();
        affect();
        self();
        plan({
            cards: list(cardName(windborneStride), cardName(quell)),
        });
        end();
        end();
    `,
    requirements: {
      legionnaireSkill: 1,
      airSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  windborneStride: {
    color: 'brown/white',
    range: '0',
    tags: [
      'legionnaireSkill',
      'airSkill',
    ],
    body: `
        enact();
        self();
        beforeNextTurn();
        end();
        asChild();
        affect();
        shift({
            distance: 1,
        });
        end();
        end();
    `,
    maxCopies: 0,
    artName: 'searingSpear',
  },
  quell: {
    color: 'brown/white',
    range: '0',
    tags: [
      'legionnaireSkill',
      'airSkill',
    ],
    body: `
        enact();
        self();
        endOfTurn();
        end();
        asChild();
        affect();
        removeTokens({
            limit: ref(X),
        });
        end();
        end();
    `,
    maxCopies: 0,
    artName: 'searingSpear',
  },
  /*==========
  Legionnaire cards / Hydromancer
  ==========*/
  warmagic_cPond: {
    color: 'brown/blue',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'legionnaireSkill',
      'waterSkill',
      'meleeAttack',
    ],
    body: `
        makeAttackAgainst({
            type: weapon,
            defense: armor,
            range: melee,
        });
        targetEntity({
            noObjects: true,
            range: range(0),
        });
        onHit();
        twoEffects();
        deal();
        damage({
            physical: ref(weaponModifier),
            water: 6,
        });
        prime();
        end();
        newContext();
        affect();
        self();
        plan({
            cards: list(cardName(healingBalm), cardName(cleanse)),
        });
        end();
        end();
    `,
    requirements: {
      legionnaireSkill: 1,
      waterSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  healingBalm: {
    color: 'brown/blue',
    range: '0',
    tags: [
      'legionnaireSkill',
      'waterSkill',
    ],
    body: `
        enact();
        self();
        beforeNextTurn();
        end();
        asChild();
        affect();
        restoreHealth({
            quantity: multiply(4, ref(X)),
        });
        end();
        end();
    `,
    maxCopies: 0,
    artName: 'searingSpear',
  },
  cleanse: {
    color: 'brown/blue',
    range: '0',
    tags: [
      'legionnaireSkill',
      'waterSkill',
    ],
    body: `
        enact();
        self();
        endOfTurn();
        end();
        asChild();
        newContext();
        affect();
        primed({
            by: cardName(warmagic_cPond),
        });
        targetEntity({
            range: 0,
            noObjects: true,
        });
        clearEffects({
            quantity: 1,
        });
        end();
        end();
    `,
    maxCopies: 0,
    artName: 'searingSpear',
  },
  mantleOfDew: {
    color: 'brown/blue',
    cost: {
      water: 1,
    },
    range: '0',
    tags: [
      'legionnaireSkill',
      'waterSkill',
    ],
    body: `
        requires();
        self();
        equipped();
        itemByType({
            type: shield,
        });
        affect();
        set({
            drenched: 4
        });
        end();
        affect();
        buff({
            duration: 4,
        });
        end();
        whileBuffedAnd();
        areAffectedByConditions({
            conditions: drenched,
        });
        increaseResistances({
            resistances: list(physical, fire),
            quantity: 5,
        });
        end();
        end();
    `,
    requirements: {
      legionnaireSkill: 1,
      waterSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  /* ===========
  Legionnaire / Pyromancer Cards
  ========== */
  rebukingFlames: {
    color: 'brown/red',
    cost: {
      fire: 1,
    },
    range: '0',
    tags: [
      'legionnaireSkill',
      'fireSkill',
    ],
    body: `
        affect();
        self();
        clear({
            slowed: true,
            drenched: true,
            fatigued: true,
            dazed: true,
        });
        end();
        affect();
        set({
            smouldering: 3,
        });
        end();
        affect();
        plan({
            cards: cardName(fieryRebuke),
        });
        end();
        end();
    `,
    requirements: {
      legionnaireSkill: 1,
      fireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  fieryRebuke: {
    color: 'brown/red',
    range: '0',
    tags: [
      'legionnaireSkill',
      'fireSkill',
    ],
    body: `
        enact({
            hasX: true,
        });
        attacking({
            attackType: melee,
            defenseType: list(armor, physique, motorics),
        });
        targetEntity({
            noObjects: true,
            range: range(0),
        });
        hits();
        self();
        end();
        asChild();
        affect();
        deal();
        damage({
            fire: add(multiply(3, ref(X)), ref(spellcastingModifier)),
        });
        end();
        end();
    `,
    maxCopies: 0,
    artName: 'searingSpear',
  },
  warmagic_cEmber: {
    color: 'brown/red',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'legionnaireSkill',
      'fireSkill',
    ],
    body: `
        makeAttackAgainst({
            type: weapon,
            defense: armor,
            range: melee,
        });
        targetEntity({
            noObjects: true,
            range: range(0),
        });
        onHit();
        twoEffects();
        deal();
        damage({
            physical: ref(weaponModifier),
        });
        prime();
        end();
        newContext();
        affect();
        self();
        plan({
            cards: list(cardName(detonate), cardName(rousingFlames)),
        });
        end();
        end();
    `,
    requirements: {
      legionnaireSkill: 1,
      fireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  detonate: {
    color: 'brown/red',
    range: '0',
    tags: [
      'legionnaireSkill',
      'fireSkill',
    ],
    body: `
        enact({
            hasX: true,
        });
        self();
        endOfTurn();
        end();
        asChild();
        changeTargetTo();
        primed({
            by: cardName(warmagic_cEmber),
        });
        targetEntity({
            noObjects: true,
            range: range(0),
        });
        affect();
        deal();
        damage({
            fire: multiply(6, ref(X)),
        });
        end();
        end();
    `,
    maxCopies: 0,
    artName: 'searingSpear',
  },
  rousingFlames: {
    color: 'brown/red',
    range: '0',
    tags: [
      'legionnaireSkill',
      'fireSkill',
    ],
    body: `
        enact({
            hasX: true,
        });
        self();
        beforeNextTurn();
        end();
        asChild();
        affect();
        draw({
            zone: reserves,
        });
        end();
        end();
    `,
    maxCopies: 0,
    artName: 'searingSpear',
  },
  /* ===========
  Legionnaire / Geomancer Cards
  ========== */
  warmagic_cCopse: {
    color: 'brown/green',
    cost: {
      any: 1,
    },
    range: '0',
    tags: [
      'meleeAttack',
      'legionnaireSkill',
      'earthSkill',
    ],
    body: `
        makeAttackAgainst({
            type: weapon,
            defense: armor,
            range: melee,
        });
        targetEntity({
            noObjects: true,
            range: range(0),
        });
        onHit();
        twoEffects();
        deal();
        damage({
            physical: ref(weaponModifier),
        });
        prime();
        end();
        newContext();
        affect();
        self();
        plan({
            cards: list(cardName(briarthorn), cardName(gnarledHide)),
        });
        end();
        end();
    `,
    requirements: {
      legionnaireSkill: 1,
      earthSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  briarthorn: {
    color: 'brown/green',
    range: '0',
    tags: [
      'legionnaireSkill',
      'earthSkill',
    ],
    body: `
        enact({
            hasX: true,
        });
        self();
        endOfTurn();
        end();
        asChild();
        changeTargetTo();
        primed({
            by: cardName(warmagic_cCopse),
        });
        targetEntity({
            noObjects: true,
            range: range(0),
        });
        affect();
        deal();
        damage({
            earth: multiply(3, ref(X)),
        });
        ifDamaged({
            type: earth,
        });
        set({
            bleed: 3,
        });
        end();
        end();
    `,
    maxCopies: 0,
    artName: 'searingSpear',
  },
  gnarledHide: {
    color: 'brown/green',
    range: '0',
    tags: [
      'legionnaireSkill',
      'earthSkill',
    ],
    body: `
        enact({
            hasX: true,
        });
        self();
        beforeNextTurn();
        end();
        asChild();
        affect();
        maxDefense({
            armor: true,
            physique: true,
        });
        end();
        end();
    `,
    maxCopies: 0,
    artName: 'searingSpear',
  },
  pitch: {
    color: 'brown/green',
    cost: {
      earth: 1,
    },
    range: '0-1',
    tags: [
      'legionnaireSkill',
      'earthSkill',
    ],
    body: `
        makeAttackAgainst({
            type: spell,
            defense: motorics,
            range: ranged,
        });
        targetEntity({
            noObjects: true,
            range: range(0, 1),
        });
        onHit();
        deal();
        damage({
            earth: add(7, ref(spellcastingModifier)),
        });
        ifDamaged({
            type: earth,
        });
        set({
            tarred: 3,
            slowed: 1,
            impaired: 1,
        });
        end();
        end();
    `,
    requirements: {
      legionnaireSkill: 1,
      earthSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  /* ===========
  Aeromancer / Hydromancer Cards
  ========== */
  chillWind: {
    color: 'white/blue',
    cost: {
      air: 1,
      water: 1,
    },
    range: '0-3',
    tags: [
      'airSkill',
      'waterSkill',
    ],
    body: `
        declareContext();
        targetContiguousZones({
            range: range(0, 3),
            limit: 3,
        });
        splitContext();
        entityIn({
            noObjects: true,
            limit: 0,
        });
        makeAttackAgainst({
            type: spell,
            defense: physique,
        });
        onHit();
        deal();
        damage({
            ice: add(2, ref(spellcastingModifier)),
        });
        ifDamaged({
            type: ice,
        });
        twoEffects();
        set({
            slowed: 1,
            impaired: 1,
        });
        discard({
            quantity: 1,
        });
        end();
        end();
        eachOf();
        affect();
        replaceTokens({
            oldType: water,
            newType: ice,
            limit: 1,
        });
        end();
        end();
    `,
    requirements: {
      airSkill: 1,
      waterSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  mistyEscape: {
    color: 'white/blue',
    cost: {
      any: 0,
    },
    range: '0-3',
    tags: [
      'airSkill',
      'waterSkill',
    ],
    body: `
        reaction();
        attacking();
        targetEntity({
            noObjects: true,
            range: range(0 ,3),
        });
        hits();
        self();
        end();
        newContext();
        affect();
        entityInRangeOf({
            noObjects: true,
            range: range(0),
            limit: 0,
        });
        self();
        ward();
        end();
        newContext();
        affect();
        self();
        shift();
        end();
        end();
    `,
    requirements: {
      airSkill: 1,
      waterSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  /* ===========
  Aeromancer / Pyromancer Cards
  ========== */
  backdraft: {
    color: 'white/red',
    cost: {
      air: 1,
    },
    range: '0-2',
    tags: [
      'airSkill',
      'fireSkill',
    ],
    body: `
        declareContext();
        targetZone({
            range: range(0, 2),
        });
        affect();
        removeTokens({
            limit: 0,
            ofType: fire,
        });
        end();
        changeContext();
        entityIn({
            limit: 0,
        });
        makeAttackAgainst({
            type: spell,
            defense: motorics,
        });
        onHit();
        twoEffects();
        deal();
        damage({
            fire: add(3, ref(spellcastingModifier)),
        });
        perTokenRemoved();
        deal();
        damage({
            fire: multiply(4, ref(X)),
        });
        end();
        end();
    `,
    requirements: {
      airSkill: 1,
      fireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  lightningStrike: {
    color: 'white/red',
    cost: {
      fire: 1,
    },
    range: '1-2',
    tags: [
      'airSkill',
      'fireSkill',
    ],
    body: `
        makeAttackAgainst({
            type: spell,
            defense: motorics,
        });
        targetEntity({
            range: range(1, 2),
        });
        onHit();
        deal();
        damage({
            lightning: add(8, ref(spellcastingModifier)),
        });
        end();
        affect();
        replaceTokens({
            oldType: earth,
            newType: fire,
            limit: 1,
        });
        end();
        end();
    `,
    requirements: {
      airSkill: 1,
      fireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  /* ===========
  Aeromancer / Geomancer Cards
  ========== */
  reverberatingBlast: {
    color: 'white/green',
    cost: {
      any: 1,
    },
    range: '1-2',
    tags: [
      'airSkill',
      'earthSkill',
    ],
    body: `
        makeAttackAgainst({
            defense: physique,
            type: spell,
        });
        entityIn({
            limit: 0,
        });
        targetZone({
            range: range(1, 2),
        });
        onHit();
        deal();
        damage({
            vibration: add(3, ref(spellcastingModifier)),
        });
        ifDamaged({
            type: vibration,
        });
        set({
            dazed: 1,
            impaired: 1,
        });
        end();
        end();
    `,
    requirements: {
      airSkill: 1,
      earthSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  chokingSmog: {
    color: 'white/green',
    cost: {
      any: 1,
      earth: 1,
    },
    range: '0-1',
    tags: [
      'airSkill',
      'earthSkill',
    ],
    body: `
        makeAttackAgainst({
            defense: physique,
            type: spell,
        });
        entityIn({
            limit: 0,
            other: true,
            noObjects: true,
        });
        targetTriangle({
            range: range(0, 1),
        });
        onHit();
        deal();
        damage({
            decay: add(2, ref(spellcastingModifier)),
        });
        ifDamaged({
            type: decay,
        });
        set({
            enfeebled: 1,
            poisoned: 4,
        });
        end();
        end();
    `,
    requirements: {
      airSkill: 1,
      earthSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  /* ===========
  Hydromancer / Pyromancer Cards
  ========== */
  hydrothermicSiphon: {
    color: 'blue/red',
    cost: {
      fire: 1,
      water: 1,
    },
    range: '0-2',
    tags: [
      'waterSkill',
      'fireSkill',
    ],
    body: `
        affect();
        targetToken();
        removeToken();
        end();
        splitContext();
        same();
        conditional();
        tokenWasOfType({
            type: fire,
        });
        newContext();
        makeAttackAgainst({
            type: spell,
            range: ranged,
            defense: armor,
        });
        targetEntity({
            range: range(0, 2),
            noObjects: true,
        });
        onHit();
        deal();
        damage({
            fire: add(13, ref(spellcastingModifier)),
        });
        end();
        end();
        same();
        conditional();
        tokenWasOfType({
            type: water,
        });
        newContext();
        affect();
        targetEntity({
            range: range(0, 2),
            noObjects: true,
        });
        restoreHealth({
            quantity: add(13, ref(spellcastingModifier)),
        });
        end();
        end();
    `,
    requirements: {
      waterSkill: 1,
      fireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  circulate: {
    color: 'blue/red',
    cost: {
      any: 0,
    },
    range: '0-2',
    tags: [
      'waterSkill',
      'fireSkill',
    ],
    body: `
        affect();
        targetToken({
            limit: 3,
            type: list(fire, water),
        });
        move();
        end();
        end();
    `,
    requirements: {
      waterSkill: 1,
      fireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  /* ===========
  Hydromancer / Geomancer Cards
  ========== */
  mudball: {
    color: 'blue/green',
    cost: {
      earth: 1,
    },
    range: '1-2',
    tags: [
      'rangedAttack',
      'waterSkill',
      'earthSkill',
    ],
    body: `
        makeAttackAgainst({
            type: spell,
            range: ranged,
            defense: motorics,
        });
        entityIn({
            limit: 0,
            noObjects: true,
        });
        targetZone({
            range: range(1-2),
        });
        onHit();
        deal();
        damage({
            mud: add(3, ref(spellcastingModifier)),
        });
        ifDamaged();
        twoEffects();
        set({
            muddied: 3,
        });
        debuff({
            duration: 3,
        });
        end();
        newContext();
        whileBuffedAnd();
        self();
        areAffectedByConditions({
            conditions: muddied,
        });
        difficultTerrain();
        end();
        end();
    `,
    requirements: {
      waterSkill: 1,
      earthSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  siphonEssence: {
    color: 'blue/green',
    cost: {
      water: 1,
    },
    range: '0-2',
    tags: [
      'rangedAttack',
      'waterSkill',
      'earthSkill',
    ],
    body: `
        makeAttackAgainst({
            type: spell,
            range: ranged,
            defense: physique,
        });
        targetEntity({
            noObjects: true,
            range: range(0-2),
        });
        onHit();
        deal();
        damage({
            decay: add(3, ref(spellcastingModifier)),
        });
        ifDamaged({
            type: decay,
        });
        lifesteal({
            type: decay,
        });
        targetEntity({
            noObjects: true,
            range: range(0, 2),
            disposition: friendly,
        });
        end();
        end();
    `,
    requirements: {
      waterSkill: 1,
      earthSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  /* ===========
  Geomancer / Pyromancer Cards
  ========== */
  lavaBolt: {
    color: 'red/green',
    cost: {
      earth: 1,
      fire: 1,
    },
    range: '1-2',
    tags: [
      'rangedAttack',
      'earthSkill',
      'fireSkill',
    ],
    body: `
        makeAttackAgainst({
            type: spell,
            range: ranged,
            defense: armor,
        });
        targetEntity({
            range: range(1-2),
        });
        onHit();
        deal();
        damage({
            lava: add(15, ref(spellcastingModifier)),
        });
        ifDamaged();
        set({
            smouldering: 3,
        });
        end();
        end();
    `,
    requirements: {
      earthSkill: 1,
      fireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
  sunder: {
    color: 'red/green',
    cost: {
      any: 0,
    },
    range: '0-2',
    tags: [
      'earthSkill',
      'fireSkill',
    ],
    body: `
        affect();
        targetEntity({
            range: range(1-2),
        });
        setDefenseContextDie({
            defenses: armor,
            to: 3,
        });
        end();
        end();
    `,
    requirements: {
      earthSkill: 1,
      fireSkill: 1,
    },
    maxCopies: 3,
    artName: 'searingSpear',
  },
};