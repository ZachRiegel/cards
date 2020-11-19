import CardInterpreter from '../src/components/CardInterpreter.js'

console.log(CardInterpreter(`
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
        self();
        end();
        end();
`));
console.log('======');

/* ==========

Mantle of Dew: Cost 1 hydro. Requires a shield set wet on self, while buffed by this card (4 turns) and wet gain 5 phys resist + fire resist.

========== */


       