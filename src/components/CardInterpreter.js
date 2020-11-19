import {parseCardName} from 'components/CardUtilities'

//these functions are mostly used in the construction of other lexical functions
let greed = (next) =>
    (current) =>
        (typeof current === 'function' && !current.completed)
            ? (...args) =>
                greed(next)(current(...args))
            : next(current);

let contextual = (next) => 
    (context) =>
    context
        ? greed((finishedContext) =>
            next(finishedContext)
        )(context)
        : greed((val) => next(val));

let continuable = (context) =>
    greed((content) =>
    (continuedContent) =>
        greed((resolvedContinuedContent) => {
            return `${content}${resolvedContinuedContent?` ${resolvedContinuedContent}`:''}`;
        }
        )( (typeof continuedContent === 'function')
            ? continuedContent(pastContext(context))
            : continuedContent
        )
);

let activeContext = (context) =>
    context
    ? {
        ...context,
        target: context.target
            ? {
                ...context.target,
                 preferred: context.target.active,
                 preferredPossessive: context.target.possessive,
            } : undefined,
        zone: context.zone
            ? {
                ...context.zone,
                preferred: context.zone.active,
            } : undefined,
        token: context.token
            ? {
                ...context.token,
                preferred: context.token.active,
            } : undefined,
    } : undefined;

let pastContext = (context) => {
    if (!context) return;
    return {
        ...context,
        target: context.target
            ? {
                ...context.target,
                 preferred: context.target.historical,
                 preferredPossessive: context.target.historicalPossessive,
            } : undefined,
        zone: context.zone
            ? {
                ...context.zone,
                preferred: context.zone.historical,
            } : undefined,
        token: context.token
            ? {
                ...context.token,
                preferred: context.token.historical,
            } : undefined,
    }
}

let repetitionContext = (context) => {
    if (!context) return;
    return {
        ...context,
        target: context.target
            ? {
                ...context.target,
                 preferred: context.target.repetition,
                 preferredPossessive: context.target.repetitionPossessive,
            } : undefined,
        zone: context.zone
            ? {
                ...context.zone,
                preferred: context.zone.repetition,
            } : undefined,
        token: context.token
            ? {
                ...context.token,
                preferred: context.token.repetition,
            } : undefined,
    }
}

let line = () =>
    (context) =>
    greed((line) =>
    (newLine) => {
        return greed((resolvedNewLine)=>{
            return `${line}${resolvedNewLine?`\n${resolvedNewLine}`:''}`;
        })((typeof newLine === 'function')
            ? newLine(pastContext(context))
            : newLine
        );
    }
);

let capitalizeFirst = (s) => {
    let newStart = s.match(/([a-zA-Z]+)/);
    if (!newStart) return;
    newStart = newStart[1].charAt(0).toLocaleUpperCase() + newStart[1].slice(1);
    return s.replace(/([a-zA-Z]+)/, newStart);
}

let lowercaseFirst = (s) => {
    let newStart = s.match(/([a-zA-Z]+)/);
    if (!newStart) return;
    newStart = newStart[1].charAt(0).toLocaleLowerCase() + newStart[1].slice(1);
    return s.replace(/([a-zA-Z]+)/, newStart);
}

let inline = (s='') => lowercaseFirst(s.replace(/^\n?(@child )/, '').replace(/\.$/,''));

let entityForms = ({noObjects, limit}) => {
    if (noObjects && limit === 1) return {
        singular: 'creature',
        base: 'creature',
        possessive: 'creature\'s',
        type: 'creature',
    }
    if (!noObjects && limit === 1 ) return {
        singular: 'creature or object',
        base: 'creature or object',
        possessive: 'creature or object\'s',
        type: 'creature or object',
    }
    if (!noObjects && limit !== 1) return {
        singular: 'creature or object',
        base: 'creatures or objects',
        plural: 'creatures or objects',
        possessive: 'creatures or objects\'',
        type: 'creature or object',
    }
    if (noObjects && limit !== 1) return {
        singular: 'creature',
        base: 'creatures',
        plural: 'creatures',
        possessive: 'creatures\'',
        type: 'creature',
    }
};

let targetingForm = ({limit, lessThanLimit=true}) => {
    return limit===0 ?
        `any number of target`
        : limit === 1
            ? `target`
            : `${lessThanLimit?`up to `:``}${limit} target`;
};

let targetingImperative = (s) => 'target '+s.replace(/target\s/gi, '');

let enumerate = (list, word='and') =>
    Array.isArray(list)
        ? list.reduce((acc, val, index, array) =>
        `${acc}${array.length!==2?',':''}${index===array.length-1?` ${word}`:''} ${val}`)
        : list;

//functions able to be used when creating cards
const lexical = new (class LexicalFunctions{
    /* ==========
    Targeter Functions
    ========== */
    targetEntity = ({range=0, limit=1, disposition=undefined, noObjects=false}) => {
        let entity = entityForms({noObjects, limit});
        let target = targetingForm({limit});
        return activeContext({
            target: {
                active: `${target} ${disposition?`${disposition} `:''}${entity.base}`,
                historical: `the targeted ${entity.base}`,

                typeEnforcement: `${entity.type}`,
                repetition: limit===1?'it':'them',
                possessive: `${target} ${disposition?`${disposition} `:''}${entity.possessive}`,
                historicalPossessive: `targeted ${entity.possessive}`,
                repetitionPossessive: 'its',
                is: limit===1?'is':'are',
                has: limit===1?'has':'have',
                verbS: limit===1?'s':'', 
            },
            zone: {
                active: `${target} ${disposition?`${disposition} `:''}${entity.possessive} zone${limit!==1?'s':''}`,
                historical: `targeted ${entity.possessive} zone${limit!==1?'s':''}`,
                typeEnforcement: 'zone',
                repetition: limit===1?'it':'them',
            }
        });
    };

    attacking = ({attackType, defenseType}) => greed((entity) => {
        entity.attack = {
            attackType,
            defenseType: enumerate(defenseType, 'or'),
        };
        return entity;
    });

    defending = ({attackType, defenseType}) => greed((entity) => {
        entity.defendingFrom = {
            attackType,
            defenseType,
            damageDealt: 'triggering damage',
        }
        return entity;
    });

    primed = ({by}) => greed((entity) => {
        entity.target.active = entity.target.active + ` primed by "${by}"`
        return activeContext(entity);
    });

    moving = () => greed((entity) => {
        entity.movementInfo = {};
        return entity;
    });

    targetZone = ({range=0, limit=1}) => {
        let target = targetingForm({limit});
        return activeContext({
            zone: {
                active: `${target} zone${limit===1?'':'s'}`,
                historical: `the targeted zone${limit===1?'':'s'}`,
                typeEnforcement: 'zone',
                repetition: limit===1?'it':'them',
            }
        });
    };

    targetContiguousZones = ({range=0, limit=2}) => {
        if (limit===1) throw new Error('Contiguous zone targeter cannot target a zone');
        let target = targetingForm({limit, lessThanLimit: false});
        return activeContext({
            zone: {
                active: `${target} contiguous zone${limit===1?'':'s'}`,
                historical: `the targeted zone${limit===1?'':'s'}`,
                typeEnforcement: 'zone',
                repetition: limit===1?'it':'them',
            }
        });
    };

    targetTriangle = ({range=0}) => {
        let target = targetingForm({limit: 3, lessThanLimit: false});
        return activeContext({
            zone: {
                active: `3 target mutually adjacent zones`,
                historical: `the targeted zones`,
                typeEnforcement: 'zone',
                repetition: 'them',
            }
        });
    };

    targetToken = ({range=0, limit=1, type}) => {
        let target = targetingForm({limit});
        if (Array.isArray(type)) type = type.map(x => `@${x}Token`)
        else type = type && `@${type}Token`
        return activeContext({
            token: {
                active: `${target} ${type?`${enumerate(type, 'or')} `:''}token${limit===1?``:`s`}`,
                historical: `the targeted ${type?`${enumerate(type, 'or')} `:''}token${limit===1?``:`s`}`,
                typeEnforcement: `${type?`${enumerate(type, 'or')} `:''}token`,
                repetiton: limit===1?'it':'them',
            },
            zone: {
                active: `${target} ${type?`${enumerate(type, 'or')} `:''}token${limit===1?`'s`:`s`} zone${limit===1?'':'s'}`,
                historical: `targeted ${type?`${enumerate(type, 'or')} `:''}token${limit===1?`'s`:`s'`} zone${limit!==1?'s':''}`,
                typeEnforcement: 'zone',
                repetition: limit===1?'it':'they',
            }
        });
    };

    self = () => activeContext({
        target: {
            active: 'yourself',
            ref: 'you',
            historical: 'yourself',
            repetition: 'you',
            possessive: 'your',
            historicalPossessive: 'your',
            is: 'are',
            has: 'have',
            verbS: '',
        },
        zone: {
            active: 'your zone',
            historical: 'your zone',
            repetiton: 'it',
        }
    });

    entityIn = ({limit=1, noObjects=false, other=false}) => {
        let entity = entityForms({noObjects, limit});
        return greed((context) => {
            return activeContext({
                target: {
                    active: (limit
                        ? `up to ${limit} ${other?'other ':''}${entity.base} in ${context.zone.preferred}`
                        : `each ${other?'other ':''}${entity.singular} in ${context.zone.preferred}`),
                    historical: `targeted ${entity.base}`,
                    typeEnforcement: `${entity.type}`,
                    repetition: limit===1?'it':'they',
                    is: limit===1?'is':'are',
                    has: limit===1?'has':'have',
                    verbS: limit===1?'s':'', 
                },
                zone: {...context.zone},
            })
        });
    };

    entityInRangeOf = ({limit=1, noObjects, range=this.range(0), other=false}) => {
        let entity = entityForms({noObjects, limit});
        return greed((context) => {
            return activeContext({
                target: {
                    active: (limit
                        ? `up to ${limit} ${other?'other ':''}${entity.base} within ${range} of ${context.target?context.target.preferred:context.token.preferred}`
                        : `each ${other?'other ':''}${entity.singular} within ${range} of ${context.target?context.target.preferred:context.token.preferred}`),
                    historical: `targeted ${entity.base}`,
                    typeEnforcement: `${entity.type}`,
                    repetition: limit===1?'it':'they',
                },
                token: {...context.token},
                zone: {...context.zone},
            })
        });
    };

    /* ==========
    Conditionals
    ========== */

    equipped = () => contextual((context) => greed((item) =>
        `${context.target.ref || context.target.preferred} ${context.target.has} an equipped ${item}`
    ));

    noCondition = () => contextual((context) => null);

    dualWielding = () => contextual((context) =>
        `${context.target.ref || context.target.preferred} ${context.target.is} dual-wielding`
    );

    areBuffedBy = () => contextual((context) => 
        greed((cardSelector) =>
            `${context.target.ref||context.target.preferred} ${context.target.is} under the effects of ${cardSelector}`
        )
    );

    areAffectedByConditions = ({conditions}) => contextual((context) =>
        `${context.target.ref||context.target.preferred} ${context.target.is} ${enumerate(conditions, 'or')}`
    );

    lucky = ({proc=1, per=3}) => () => 
        `you are __lucky__ (${parseFloat((proc/per)*100).toFixed()}% chance)`;

    flourished = () => contextual((context) =>
        `${context.target.ref||context.target.preferred} flourished`
    );

    isInRangeOf = ({range}) => contextual((original) => contextual((secondary) =>
        `${original.target.preferred} is in ${range} of ${secondary.target.ref||secondary.target.preferred}`
    ));

    tokenWasOfType = ({type}) => contextual((context) =>
        `${context.token.preferred} was a @${type}Token token`
    );

    /* ==========
    Unique line functions
    ========== */
    affect = () =>
        contextual((context) =>
            (effect) => 
            greed((resolvedEffect) =>
                line()(context)(
                    continuable(context)(capitalizeFirst(`${resolvedEffect}.`))
                )
            )(effect(context))
        );

    requires = () => contextual((context) => (check) => greed((resolvedCheck) =>
        line()(context)(`__Requires__: ${capitalizeFirst(resolvedCheck)}.`)
    )(check(context)));

    reaction = () =>
        contextual((context) =>
            (check) =>
            greed((resolvedCheck) => 
                line()(context)(continuable(context)(`__Reaction__: ${resolvedCheck}.`))
            )(check(context))
        );

    followthrough = ({hasX=true}) => contextual((context) => {
        if (hasX) {
            context.variables = context.variables||{};
            context.variables.x = 'X';
        }
        return (check) =>
        greed((resolvedCheck) =>
            line()(context)(continuable(context)(`__Enact__${
                hasX
                ?' @xCard'
                :''
            }: ${resolvedCheck}.`))
    )(check(context))});

    enact = this.followthrough;

    buff = ({duration=1}) => contextual((context) => 
        `__buff__ ${context.target.preferred} for ${duration} turn${duration===1?'':'s'}`
    );

    debuff = ({duration=1}) => contextual((context) => 
        `__debuff__ ${context.target.preferred} for ${duration} turn${duration===1?'':'s'}`
    );

    whileBuffed = ({and}) => contextual((context) =>
        (effect) =>
        greed((resolvedEffect) =>
            line()(context)(continuable(context)(`While ${context.target.ref||context.target.preferred} ${context.target.is} affected by this card${and?` and ${and}`:''}, ${resolvedEffect}.`)
            )
        )(effect(context))
    );

    whileBuffedAnd = (args) =>
        contextual((context) =>
        (condition) =>
        greed((resolvedCondtion) =>
            this.whileBuffed({...args, and: resolvedCondtion})(context)
    )(condition(repetitionContext(context))));

    makeAttackAgainst = ({type, range, advantage, defense}) => {
        advantage = Math.abs(advantage) > 0
            ? ` with ${Math.abs(advantage)} rank${Math.abs(advantage)>1?'s':''} of ${advantage>0?'advantage':'disadvantage'}`
            : ``;
        return contextual((context) => {
            return line()(context)(
                continuable(context)(`Make a${range?` ${range}`:''}${type?` ${type}`:''} attack${advantage} against the ${defense} defense of ${context.target.preferred}.`)
            );
        })
    };

    quiver = ({effectCount, isRecurring}) => greed((effect) =>
        !isRecurring
            ? (effectCount === 1
                ? `__Quiver__: ${effect}`
                : greed((subQuiver) =>
                    `__Quiver__: ${effect} \n@child${subQuiver}`
                )(this.quiver({effectCount: effectCount-1, isRecurring: true}))
            )
            : (effectCount === 1
                ? ` ${effect}`
                : greed((subQuiver) =>
                    `${effect} \n@child${subQuiver}`
                )(this.quiver({effectCount: effectCount-1, isRecurring: true}))
            )
    );

    flourish = ({cost}) => contextual((context) =>
        line()(context)(continuable(context)(`__Flourish__${cost!==undefined?` ${cost}`:''}.`))
    );

    exhaust = () => contextual((context) =>
        line()(context)(`__Exhaust__.`)
    );

    defend = ({quantity=1}) => contextual((context) =>
        context.target.ref
            ? `__defend__ ${quantity}`
            : `${context.target.preferred} __defend__ ${quantity}`
    );

    /* ==========
    Card Mutators
    ========== */

    modifyCard = () => greed((effect) =>
        `${effect}.`
    );

    modifyCards = () => contextual((context) => greed((cardType) => greed((effect) => 
        `${context.target.possessive} ${cardType} gain ‘${effect}’`
    )));

    advantage = () => `If this card makes an attack, it gains a rank of advantage`;

    disadvantage = () => `If this card makes an attack, it gains a rank of disadvantage`;

    applyEffect = () => greed((effect) => `${capitalizeFirst(inline(effect))}`);

    increaseAttackDamage = ({by, type}) => 
        type
            ? `If this card deals damage, it deals an additional ${by} ${type} damage.`
            : `If this card deals damage, increase one type of damage dealt by ${by}.`;

    convertDamage = ({toType, increaseBy}) =>
        `If this card deals damage, convert all damage dealt to ${toType} damage${increaseBy?` and deal an additional ${increaseBy} ${toType} damage`:''}.`;

    /* ==========
    Reaction Triggers
    ========== */

    onConditionSet = ({conditions}) => contextual((context) =>
        `After the ${enumerate(conditions, 'or')} condition is set on ${context.target.ref}`
    );

    hits = () => contextual((attacker) => contextual((recipient) =>
        `Before ${attacker.target.preferred} would hit ${recipient.target.ref || recipient.target.preferred} with a ${attacker.attack.attackType?`${enumerate(attacker.attack.attackType, 'or')} `:''}attack${attacker.attack.defenseType?` against ${recipient.target.possessive} ${attacker.attack.defenseType} defense`:''}`
    ));

    misses = () => contextual((attacker) => contextual((recipient) =>
        `When ${attacker.target.preferred} would miss ${recipient.target.ref || recipient.target.preferred} with a${attacker.attack.attackType?'':'n'} ${attacker.attack.attackType?`${enumerate(attacker.attack.attackType, 'or')} `:''}attack${attacker.attack.defenseType?` against ${recipient.target.possessive} ${attacker.attack.defenseType} defense`:''}`
    ));

    provokesOpportunity = () => contextual((movingCreature) => contextual((from) =>
        `When ${movingCreature.target.preferred} ${movingCreature.target.has} moved out of ${from.zone.preferred}`
    ));

    endOfTurn = () => contextual((context) => 
        `At the end of ${context.target.possessive} turn`
    );

    beforeNextTurn = () => contextual((context) => 
        `Before the start of ${context.target.possessive} turn`
    );

    entersZoneOf = () => contextual((movingCreature) => contextual((target) =>
        `After ${movingCreature.target.preferred} ${movingCreature.target.has} moved into ${target.zone.preferred}`
    ));

    afterDefenseDieRolled = ({type}) => contextual((context) => 
        `After ${context.target.ref||context.target.preferred} ${context.target.has} rolled a ${type?type:''}defense die`
    );

    whenDamaged = ({type}) => contextual((context) =>
        `Before ${context.target.ref||context.target.preferred} would be dealt ${type?`${enumerate(type, 'or')} `:''}damage by a${context.defendingFrom.attackType?` ${context.defendingFrom.attackType}`:'n'} attack${context.defendingFrom.defenseType?` that targeted ${context.target.possessive} ${enumerate(context.defendingFrom.defenseType, 'or')} defense`:''}`
    );

    /* ==========
    Functions for core attack flow stages
    ========== */

    onHit = () =>
        contextual((context) => {
            let hitContext = pastContext({
                target: {
                    historical: `the hit ${context.target.typeEnforcement}`,
                    typeEnforcement: context.target.typeEnforcement,
                    repetition: `it`
                }
            });
            return (effect) =>
                greed((resolvedEffect) =>
                    continuable(hitContext)(`\n@child On hit, ${resolvedEffect}.`)
                )(effect(hitContext))
        });

    ifDamaged = ({type, and}) => {
        return contextual((context) => {
            const itContext = pastContext({
                target: {
                    historical: `it`,
                    typeEnforcement: context.target.typeEnforcement,
                    repetition: `it`
                }
            });
            return (effect) => {
                return greed((resolvedEffect) => {
                    return continuable(itContext)(`\n@child If a ${context.target.typeEnforcement} took ${type?`${type} `:''}damage from this${and?` and ${and}`:''}, ${resolvedEffect}.`);
                })(effect(itContext));
            };
        });
    };

    ifDamagedAnd = (args) =>
        contextual((context) =>
        (condition) =>
        greed((resolvedCondtion) =>
            this.ifDamaged({...args, and: resolvedCondtion})(context)
    )(condition(context)));

    /* ==========
    Combinators
    ========== */

    conditional = ({conditionCount, isRecurring}) => contextual((context) => greed((conditions) => (effect) => greed((resolvedEffect) =>
            `If ${conditions}, ${inline(resolvedEffect)}.`
     )(effect(context)))(this.fetchConditons({conditionCount})(context)));

    fetchConditons = ({conditionCount=1, isRecurring, commas=conditionCount>2}) =>
        contextual((context) =>
        (conditionFunction) => {
        return greed((condition) =>
        !isRecurring
            ? (conditionCount === 1
                ? `${condition}`
                : greed((subCondition) =>
                    `${condition}${commas?',':''} ${subCondition}`
                )(this.fetchConditons({conditionCount: conditionCount-1, isRecurring: true,commas,})(context))
            )
            : (conditionCount === 1
                ? `and ${condition}`
                : greed((subCondition) =>
                    `${condition}${commas?',':''} ${subCondition}`
                )(this.fetchConditons({conditionCount: conditionCount-1, isRecurring: true, commas})(context))
            )
        )(conditionFunction(context))
    });

    chooseOne = () => (context) => greed((path1) => greed((path2) =>
        `__Choose__ 1:\n@option ${path1}\n@option ${path2}`
    ));

    asChild = () => contextual((context) => (content) => greed((resolvedContent) => {
            return `\n@child ${resolvedContent}`
    })(content(context)));

    otherwise = () => contextual((context) => (content) => greed((resolvedContent) => {
            return `__Otherwise__: ${resolvedContent}`
    })(content(context)));

    changeContext = () => contextual((oldContext) => (newContext) => (content) => {
        newContext = newContext(oldContext);
        if (newContext) newContext.prevContext = oldContext;
        return content(newContext);
    });

    changeTargetTo = () => contextual((oldContext) => greed((newContext) => (content) => {
        if (oldContext) oldContext.prevContext = {...oldContext};
        oldContext.target = newContext.target;
        oldContext.zone = newContext.zone;
        
        return content(activeContext(oldContext));
    }));

    lastContext = () => contextual((oldContext) => (content) =>
        content(oldContext.prevContext)
    );

    splitContext = () =>
        contextual((oldContext) =>
        (newContext1) =>
        (content1) =>
        greed((resolvedContent1) =>
        (newContext2) =>
        line()(newContext2(oldContext))(resolvedContent1)
        )(content1(newContext1(oldContext))));

    none = () => () => undefined;

    same = () => x => x;

    toSelf = () => _ => this.self();

    eachOf = () => (oldContext) => ({
        ...oldContext,
        target: oldContext.target
            ? {
                ...oldContext.target,
                active: 'each of ' + oldContext.target.active,
                historical: 'each of ' + oldContext.target.historical,
                preferred: 'each of ' + oldContext.target.preferred,
            } : undefined,
        zone: oldContext.zone
            ? {
                ...oldContext.zone,
                active: 'each of ' + oldContext.zone.active,
                historical: 'each of ' + oldContext.zone.historical,
                preferred: 'each of ' + oldContext.zone.preferred,
            } : undefined,
        token: oldContext.token
            ? {
                ...oldContext.token,
                active: 'each of ' + oldContext.token.active,
                historical: 'each of ' + oldContext.token.historical,
                preferred: 'each of ' + oldContext.token.preferred,
            } : undefined,
    });

    newContext = () => contextual((oldContext) =>
        this.changeContext()(oldContext)(this.none())
    );

    forceContext = () => () => greed((newContext) => newContext);

    noContext = () => undefined;

    declareContext = () => contextual((context)=>{
        let phrase = context.target
            ? context.target.preferred
            : context.zone.preferred;
        return line()(pastContext(context))(capitalizeFirst(`${targetingImperative( phrase)}.`));
    });

    twoEffects = () =>
        contextual((context) =>
            (effect1) =>
            greed((resolvedEffect1) =>
                (effect2) =>
                greed((resolvedEffect2) =>
                    `${resolvedEffect1}. In addition, ${resolvedEffect2}`
                )(effect2(context))
            )(effect1(context))
        );

    repeatable = () =>
        contextual((context) =>
        (content) =>
        greed((resolvedEffect) =>
        (repeat) =>
        greed((resolvedRepeat) =>
            line()(context)(continuable(context)(`${resolvedEffect}\n${capitalizeFirst(resolvedRepeat)}.`))
        )(repeat(context))
        )(content(context))
        );

    repeat = ({times=1, forced}) => contextual((context)=>
        `repeat this process ${forced?'':'up to '}${times} more time${times===1?'':'s'}`
    );

    additional = () =>
        contextual((context) =>
        (condition) =>
        greed((resolvedCondition) =>
        (content) =>
        greed((resolvedContent) => 
        continuable(context)(`In addition,${resolvedCondition?` if ${resolvedCondition},`:''} ${resolvedContent}.`)
    )(content(context))
    )(condition(context)));

    instead = () => contextual((context) =>
        (condition) =>
        greed((resolvedCondition) =>
            (content1) =>
            greed((resolvedContent1) =>
                (content2) =>
                greed((resolvedContent2) =>
                    `${inline(resolvedContent1)}. If ${resolvedCondition}, ${inline(resolvedContent2)} instead`
                )(content2(repetitionContext(context)))
            )(content1(context))
        )(condition(context))
    );

    /* ==========
    Instant Effect Functions
    ========== */
    move = ({distance=1, forced}) => contextual((context) =>
        `move ${context.target?context.target.preferred:context.token.preferred} ${forced?'':'up to '}${distance} zone${distance===1?'':'s'}`
    );

    prime = () => contextual((context) =>
        `__prime__ ${context.target.preferred}`
    );

    onMiss = () =>
        contextual(context =>
        (nextFunction) =>
        greed(resolvedFunction =>
            `\n@child On miss, ${resolvedFunction}.`
        )(nextFunction(context)));

    //todo update to include attack in context information
    redirect = () => contextual((context) =>
        (changeContext) =>
        greed((resolvedChangedContext) =>
            continuable(resolvedChangedContext)(`__redirect__ this attack at ${resolvedChangedContext.target.preferred}`)
        )(changeContext(context)));

    shift = ({distance=1, forced}) => contextual((context) => {
        return `shift ${context.target.preferred} ${forced?'':'up to '}${distance} zone${distance===1?'':'s'}`;
    });

    shiftTo = ({distance=0, forced}) => contextual((destinationContext) => contextual((entityContext) =>
        `shift ${entityContext.target.preferred} ${(forced||!distance)?'':'up to '}${distance?`${distance} zone${distance===1?'':'s'} `:''}${distance?'towards':'to'} ${destinationContext.target?destinationContext.target.preferred:destinationContext.zone.preferred}`
    ));

    deal = () =>
        contextual((context) =>
            (damage) =>
            greed((resolvedDamage) =>
                `deal ${
                    Object.entries(resolvedDamage||{}).map(([key, value]) =>
                        `${value} ${key} damage`
                    ).reduce((acc, val, index, array) =>
                        `${acc}${array.length!==2?',':''}${index===array.length-1?' and':''} ${val}`
                    )
                }${context?` to ${context.target.preferred}`:''}`
            )(damage(context))
        );

    damage = (damageValues) => contextual((context) => 
        damageValues
    );

    restoreHealth = ({quantity, isDynamic}) => contextual((context) =>
        `restore ${quantity} health to ${context.target.preferred}`
    );

    lifesteal = ({type}) =>
        contextual((context) =>
        (recipientContext) =>
            this.dynamic({
                descriptor: `the ${type?`${type} `:''}damage dealt`,
                quantity: null,
            })
            (recipientContext)
            (this.restoreHealth({quantity: this.ref('X')}))
        );

    dynamic = ({descriptor, quantity}) =>
        contextual((context) =>
        (dynamicFunction) =>
        greed((resolvedDynamicFunction) => 
            `${resolvedDynamicFunction}, where X is ${descriptor}`
        )(dynamicFunction(context)),
    );

    maxDefense = (defenses) => contextual((context) =>
        `set ${context.target.preferredPossessive} ${Object.entries(defenses||{}).map(([key, value]) => {
                return `${key}`;
            }).reduce((acc, val, index, array)=> {
                return `${acc}${array.length!==2?',':''}${index===array.length-1?' and':''} ${val}`
            })} defense dice to their maximum value`
    );

    setDefenseContextDie = ({defenses, to}) => contextual((context) =>
        `set ${context.target.preferredPossessive} ${enumerate(defenses)} defense dice to ${to}`
    );

    set = (conditions) => {
        return contextual((context) =>
            `set ${
                Object.entries(conditions||{}).map(([key, value]) => {
                    return `${key} ${value}`;
                }).reduce((acc, val, index, array)=> {
                    return `${acc}${array.length!==2?',':''}${index===array.length-1?' and':''} ${val}`
                })
            }${context?` on ${context.target.preferred}`:''}`
        );
    };

    plan = ({cards}) => contextual(context =>
        `__Plan__: ${enumerate(Array.isArray(cards)
            ? cards.map(x=> `"${x}"`)
            : `"${cards}"`)}`
    );

    ward = () => contextual((context) => 
        `__Ward__ ${context.target.preferred}`
    );

    clear = (conditions) => contextual((context) =>
        `clear ${
                enumerate(Object.entries(conditions||{}).map(([key, value]) => {
                    return `${key}`;
                }))
            }${context?` from ${context.target.preferred}`:''}`
    );

    clearEffects = ({quantity}) => contextual((context) => 
        `remove up to ${quantity} effect${quantity===1?'':'s'} from ${context.target.preferred}`
    );

    draw = ({quantity=1, zone}) => contextual((context) => {
        return `${context.target.ref?'draw':`${context.target.preferred} draws`} ${quantity===1?'a':quantity} card${quantity===1?'':'s'}${zone?` from your ${zone}`:''}`;
    });

    discard = ({quantity=1}) => contextual((context) =>
        `${context.target.preferred} must discard ${quantity===1?'a':quantity} card${quantity===1?'':'s'}`
    );

    placeTokens = ({tokenType, limit=1}) => contextual((context) => {
        return `place ${limit===1?'a':`${limit}`} @${tokenType}Token token${limit===1?'':'s'} in ${context.zone.preferred}`;
    });

    replaceTokens = ({oldType, newType, limit=1}) => contextual((context) => {
        return `replace up to ${limit} @${oldType}Token token${limit===1?'':'s'} in ${context.zone.preferred} with ${limit==1?`a @${newType}Token token`:`@${newType}Token tokens`}`;
    });

    removeToken = () => contextual((context) =>
        `remove ${context.token.preferred}`
    );

    removeTokens = ({limit=1, excludeType, ofType}) =>
        contextual((context) =>
        limit === 0
            ? `remove all ${ofType?`@${ofType}Token `:''}tokens ${excludeType?`besides @${excludeType}Token tokens `:''}from ${context.zone.preferred}`
            : `remove up to ${limit} ${ofType?`@${ofType}Token `:''}token${limit===1?'':'s'} from ${context.zone.preferred}`
    );

    perTokenRemoved = () =>
        contextual((context) =>
        (nextFunction) =>
            this.dynamic({
                descriptor: `the number of tokens removed`,
                quantity: null,
            })
            (context)
            (nextFunction)
    );

    invert = () => {
        return contextual((context)=>{
            return greed((cardSelector) => {
                return `${context.target.preferred} must invert ${cardSelector} if possible`;
            });
        });
    };

    pull = ({distance=1}) => contextual((context) => contextual((towards) =>
            `pull ${context.target.preferred} up to ${distance} zone${distance===1?'':''} towards ${towards.target.ref||towards.target.preferred}`
    ));

    push = ({distance=1}) => contextual((context) => contextual((from) =>
            `push ${context.target.preferred} up to ${distance} zone${distance===1?'':''} away from ${from.target.ref||from.target.preferred}`
    ));
    /* ========== 
    Persistent Effect Functions
    ========== */

    increaseResistances = ({resistances, quantity}) => contextual((context) =>
        `${context.target.possessive} ${enumerate(resistances.map(x => `${x} resistance`))} ${resistances.length===1?'is':'are'} increased by ${quantity}`
    );

    conditionImmunity = ({conditions}) => contextual((context) =>
        `${context.target.ref||context.target.preferred} ${context.target.is} immune to ${enumerate(conditions)}`
    );

    are = ({conditions}) => contextual((context) =>
        `${context.target.ref||context.target.preferred} ${context.target.is} ${enumerate(conditions)}`
    );

    defenseBonus = ({against, bonus}) => contextual((context) =>
        `${context.target.ref||context.target.preferred} ${context.target.has} a ${bonus>0?'+':''}${bonus} ${bonus>0?'bonus':'penalty'} to ${context.target.possessive} defensive context dice for determining if ${against?`${against} `:''}attacks would hit`
    );

    difficultTerrain = () => contextual((context) =>
        `${context.target.ref||context.target.preferred} move${context.target.verbS} as if ${context.target.repetition} ${context.target.is} in difficult terrain`
    );

    /* ==========
    Card Selector
    ========== */
    spell = () => {
        return `a __spell__`;
    };

    cardWithTag = ({tags, limit=1}) => 
        limit === 1
            ? `a ${Array.isArray(tags)?tags.map(tag => `@${tag}`).reduce((acc, val) => `${acc} ${val}`):`@${tags}`} card`
            : `${limit?`${limit} `:''}${Array.isArray(tags)?tags.map(tag => `@${tag}`).reduce((acc, val) => `${acc} ${val}`):`@${tags}`} cards`;

    reduceDamageTaken = ({by}) => contextual((context) =>
        context.target.ref
            ? `__Block__ ${by} damage`
            : `${context.target.preferred} __blocks__ ${by} damage`
    );

    /* ==========
    Item selectors
    ========== */
    itemByType = ({type}) => `${type}`;

    weaponWithProperties = ({properties}) => {
        return `${properties.reduce((acc,val) => `${acc} ${val}`)} weapon`
    };

    /* ==========
    Sub functions for evaluating card parameters
    ========== */

    add = (...args) => {
        return args.reduce((acc, val) => {
            return `${acc} + ${val}`;
        });
    };

    multiply = (...args) =>
        `(${args.reduce((acc, val) =>
            `${acc} * ${val}`
        )})`;

    cardName = (cardName) => parseCardName(cardName);

    range = (min, max) => {
        return `@range ${min}${max?`-${max}`:``}`;
    };

    list = (...args) => [...args];

    ref = (val) => val.length!==1?`@${val}`:val;

    end = () => undefined;
})();



const interpret = (text) => {
    let result = x=>x;
    while(text.length) {
        let [current, ...remainder] = text;
        text = remainder;

        let currentFunctionName = current.match(/\w+/)
        currentFunctionName = currentFunctionName
            ? currentFunctionName[0]
            : undefined;
        let currentInner  = current.match(/\(.*\)/)
        currentInner = currentInner
            ? currentInner[0]
            : undefined;
        if (currentInner) currentInner = interpretInner(currentInner);
        currentInner = currentInner || {};
        result = result(lexical[currentFunctionName](currentInner));
    }

    return result;
};

const blobify = (content) => {
    let blobs = [];
    let functionArgs = content.match(/\w+\(.*\)/);
    while (functionArgs) {
        let start = content.indexOf('(');
        let current = start + 1;
        let count = 1;
        let end;
        loop: {
            while(current < content.length) {
                if (content.charAt(current)==='(') count += 1;
                if (content.charAt(current)===')') count -= 1;

                if(!count) {
                    end = current;
                    break loop;
                }

                current += 1;
            }
            throw new Error('Unbalanced parentheses');
        }
        let index = blobs.length;
        blobs.push(content.slice(start,end+1));
        content = content.slice(0,start) + `$\{${index}}` + content.slice(end+1);

        functionArgs = content.match(/\w+\(.*\)/);
    }
    return [
        content,
        blobs,
    ]
};

const unblobify = ({content, blobs}) => {
    blobs.forEach((val, index) => {
        content = content.replace(`$\{${index}}`, val);
    });
    return content;
};

//todo update to handle nested dictionaries
const interpretInner = (text) => {
    if(!text) return;
    if(text.match(/\(\)/)) return;
    let content = text.match(/{(.*)}/);
    content = content
        ? content[1]
        : undefined;
    if(!content) return {};
    let blobs;

    ([content, blobs] = blobify(content));
    content = content.replace(/,/g, '\n');
    content = unblobify({content, blobs});

    let dict = {};
    content = content.split(/\s/g);
    content.forEach((val) => {
        let [key, value] = val.split(/(?<!\\):/);
        if(!key) return;
        dict[key] = interpretFunctionChain(value);
    })
    return dict;
};

const interpretFunctionChain = (text) => {
    if (!text.match(/^\w+\(.*\)/)) {
        if (!isNaN(Number(text))) return Number(text);
        return text;
    }
    let functionName = text.match(/^(\w+)\(.*\)/)[1];
    let args = text.match(/^\w+\((.*)\)/)[1];
    let blobs;
    ([args, blobs] = blobify(args));
    args = args.replace(/,/g, '\n');
    args = unblobify({content: args, blobs,});
    args = args.split(/\s/);
    args = args.map((val) => interpretFunctionChain(val));
    return lexical[functionName](...args);
};

export default (s) => {
    if(Array.isArray(s)) return s;
    return interpret(
        s.replace(/\s/g,'')
        .split(/;/g)
        .filter(x=>x)
    ).split(/\n/)
    .filter(x=>x);
};