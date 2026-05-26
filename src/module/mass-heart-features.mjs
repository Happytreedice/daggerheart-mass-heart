import { action, armor, armorBonus, armorTierBonus, effect, feature, featureValuesFromText, hope, icons, primaryAttackBonus, primaryDamageBonus, stress, uses } from './feature-builders.mjs';

export const massHeartWeaponFeatures = {
  dhsAkimbo2: feature('Akimbo', '+2 to primary weapon damage in this weapon range.', {
    actions: [action('Akimbo', '+2 to primary weapon damage in this weapon range.')]
  }),
  dhsAkimbo3: feature('Akimbo', '+3 to primary weapon damage in this weapon range.', {
    actions: [action('Akimbo', '+3 to primary weapon damage in this weapon range.')]
  }),
  dhsAmmo1: feature('Ammo 1', 'This weapon can hold up to 1 Ammo token.', {
    actions: [action('Ammo 1', 'Remove an Ammo token when you attack with this weapon.', { img: icons.reload, uses: uses(1) })]
  }),
  dhsAmmo2: feature('Ammo 2', 'This weapon can hold up to 2 Ammo tokens.', {
    actions: [action('Ammo 2', 'Remove an Ammo token when you attack with this weapon.', { img: icons.reload, uses: uses(2) })]
  }),
  dhsAmmo3: feature('Ammo 3', 'This weapon can hold up to 3 Ammo tokens.', {
    actions: [action('Ammo 3', 'Remove an Ammo token when you attack with this weapon.', { img: icons.reload, uses: uses(3) })]
  }),
  dhsAmmo4: feature('Ammo 4', 'This weapon can hold up to 4 Ammo tokens.', {
    actions: [action('Ammo 4', 'Remove an Ammo token when you attack with this weapon.', { img: icons.reload, uses: uses(4) })]
  }),
  dhsAmmo6: feature('Ammo 6', 'This weapon can hold up to 6 Ammo tokens.', {
    actions: [action('Ammo 6', 'Remove an Ammo token when you attack with this weapon.', { img: icons.reload, uses: uses(6) })]
  }),
  dhsBarrierMass: feature('Barrier', '+Tier to Armor Score; -1 to Evasion.', {
    effects: [
      effect('Barrier', '+Tier to Armor Score; -1 to Evasion.', [
        armorTierBonus(),
        { key: 'system.evasion', mode: 2, value: '-1' }
      ], icons.shield)
    ]
  }),
  dhsBeacon: feature('Beacon', 'After a successful attack, your next Spellcast Roll against that target automatically succeeds.', {
    actions: [action('Beacon', 'After a successful attack, your next Spellcast Roll against that target automatically succeeds.', { img: icons.precision })]
  }),
  dhsBioticMastery: feature('Biotic Mastery', 'Once per session, turn a failure into a Success with Fear on a roll related to using biotics.', {
    actions: [action('Biotic Mastery', 'Once per session, turn a failure into a Success with Fear on a roll related to using biotics.', { uses: { value: 0, max: 1, recovery: null } })]
  }),
  dhsBrittle: feature('Brittle', 'The next Physical attack against the target deals double damage.', {
    actions: [action('Brittle', 'The next Physical attack against the target deals double damage.', { img: icons.energy })]
  }),
  dhsBrutal: feature('Brutal', 'If you roll maximum damage on a damage die, roll an additional damage die.', {
    actions: [action('Brutal', 'If you roll maximum damage on a damage die, roll an additional damage die.')]
  }),
  dhsCalculated: feature('Calculated', 'Before a Knowledge Roll, mark a Stress to gain a +Tier bonus to the result.', {
    actions: [action('Calculated', 'Before a Knowledge Roll, mark a Stress to gain a +Tier bonus to the result.', { cost: stress(1) })]
  }),
  dhsChaining: feature('Chaining', 'On a successful attack, use the same roll against another nearby target until no new targets remain. Every target hit marks a Stress.', {
    actions: [action('Chaining', 'On a successful attack, use the same roll against another target within Very Close range of the previous target until no new targets remain. Every target hit marks a Stress.', { img: icons.energy })]
  }),
  dhsCharged: feature('Charged', 'Mark a Stress to gain +1 Proficiency on your next attack with this weapon.', {
    actions: [action('Charged', 'Mark a Stress to gain +1 Proficiency on your next attack with this weapon.', { cost: stress(1), img: icons.energy })]
  }),
  dhsConcussive: feature('Concussive', 'On a successful attack, spend a Hope to knock the target back to Far range.', {
    actions: [action('Concussive', 'On a successful attack, spend a Hope to knock the target back to Far range.', { cost: hope(1) })]
  }),
  dhsCumbersome: feature('Cumbersome', '-1 to Finesse.', {
    effects: [effect('Cumbersome', '-1 to Finesse.', [{ key: 'system.traits.finesse.value', mode: 2, value: '-1' }])]
  }),
  dhsDeflectingShield: feature('Deflecting', 'When attacked, mark a Shield Slot to gain an Evasion bonus equal to your unmarked Shield Slots against the attack.', {
    actions: [action('Deflecting', 'When attacked, mark a Shield Slot to gain an Evasion bonus equal to your unmarked Shield Slots against the attack.', { cost: armor(1), img: icons.shield })]
  }),
  dhsDestructive: feature('Destructive', '-1 to Agility; on a successful attack, nearby adversaries mark a Stress.', {
    effects: [effect('Destructive', '-1 to Agility.', [{ key: 'system.traits.agility.value', mode: 2, value: '-1' }])],
    actions: [action('Destructive', 'On a successful attack, all adversaries within Very Close range of the target must mark a Stress.', { img: icons.blast })]
  }),
  dhsDevastating: feature('Devastating', 'Mark a Stress before attacking to change the range to Melee and use a d20 as the damage die.', {
    actions: [action('Devastating', 'Mark a Stress before attacking to change the range to Melee and use a d20 as the damage die.', { cost: stress(1) })]
  }),
  dhsDisrupt: feature('Disrupt', 'On a successful attack, gain a +Tier bonus to the next Spellcast Roll against the target.', {
    actions: [action('Disrupt', 'On a successful attack, gain a +Tier bonus to the next Spellcast Roll against the target.', { img: icons.energy })]
  }),
  dhsDoubleDuty2: feature('Double Duty', '+2 Armor Score; +2 to primary weapon damage within Melee range.', {
    effects: [
      effect('Double Duty', '+2 Armor Score; +2 to primary weapon damage.', [armorBonus(2), primaryDamageBonus(2)], icons.shield)
    ]
  }),
  dhsDoubleDuty3: feature('Double Duty', '+3 Armor Score; +3 to primary weapon damage within Melee range.', {
    effects: [
      effect('Double Duty', '+3 Armor Score; +3 to primary weapon damage.', [armorBonus(3), primaryDamageBonus(3)], icons.shield)
    ]
  }),
  dhsDualBarrel: feature('Dual-Barrel', 'When you fail an attack with Hope, you may reroll it once.', {
    actions: [action('Dual-Barrel', 'When you fail an attack with Hope, you may reroll it once.')]
  }),
  dhsEruptive: feature('Eruptive', 'On a successful attack, nearby adversaries must succeed on a Reaction Roll (13) or take half damage.', {
    actions: [action('Eruptive', 'On a successful attack, all other adversaries within Very Close range of the target must succeed on a Reaction Roll (13) or take half damage.', { img: icons.blast })]
  }),
  dhsExplosive: feature('Explosive', 'Mark a Stress to use the attack roll against a group of targets.', {
    actions: [action('Explosive', 'Mark a Stress to use the attack roll against a group of targets.', { cost: stress(1), img: icons.blast })]
  }),
  dhsGravityWarping: feature('Gravity-Warping', 'On a successful attack, the target and nearby allies may float and become Restrained until damaged.', {
    actions: [action('Gravity-Warping', 'On a successful attack, the target and their allies in Very Close range must succeed on a Reaction Roll (16) or start floating and become Restrained until damaged.', { img: icons.restraint })]
  }),
  dhsHeavy: feature('Heavy', '-1 to Evasion.', {
    effects: [effect('Heavy', '-1 to Evasion.', [{ key: 'system.evasion', mode: 2, value: '-1' }])]
  }),
  dhsHooked: feature('Hooked', 'On a successful attack, pull the target into Melee range.', {
    actions: [action('Hooked', 'On a successful attack, pull the target into Melee range.', { img: icons.movement })]
  }),
  dhsHot: feature('Hot', 'This weapon cuts through solid material and can attack targets in a line.', {
    actions: [action('Hot', 'This weapon cuts through solid material and can attack targets in a line.', { img: icons.energy })]
  }),
  dhsKarma: feature('Karma', 'When you are attacked, roll a d6. On a 6, the target must mark a HP.', {
    actions: [action('Karma', 'When you are attacked, roll a d6. On a 6, the target must mark a HP.')]
  }),
  dhsLightweight: feature('Lightweight', '+1 to Evasion.', {
    effects: [effect('Lightweight', '+1 to Evasion.', [{ key: 'system.evasion', mode: 2, value: '1' }])]
  }),
  dhsMassField: feature('Mass Field', 'Mark 2 Stress to attack everyone near a point; successful targets are Restrained, Vulnerable, and floating until damaged.', {
    actions: [action('Mass Field', 'Mark 2 Stress to attack everyone within Very Close range of a point in Close range. Successful targets are Restrained, Vulnerable, and floating until damaged.', { cost: stress(2), img: icons.restraint })]
  }),
  dhsMassive: feature('Massive', '-1 to Evasion; on a successful attack, roll an additional damage die and discard the lowest result.', {
    effects: [effect('Massive', '-1 to Evasion.', [{ key: 'system.evasion', mode: 2, value: '-1' }])],
    actions: [action('Massive', 'On a successful attack, roll an additional damage die and discard the lowest result.')]
  }),
  dhsMomentum: feature('Momentum', 'Spend a Hope to add your Instinct Modifier to primary weapon damage.', {
    actions: [action('Momentum', 'Spend a Hope to add your Instinct Modifier to the damage of a primary weapon attack.', { cost: hope(1) })]
  }),
  dhsMultilock: feature('Multilock', 'Mark Stress when you attack to target additional enemies within range.', {
    actions: [action('Multilock', 'Mark 1 or more Stress when you attack to target that many additional enemies within range.', { cost: stress(1), img: icons.precision })]
  }),
  dhsOrganic: feature('Organic', 'Unaffected by tech effects. +1 to Spellcast Trait.', {
    effects: [effect('Organic', '+1 to Spellcast Rolls.', [{ key: 'system.bonuses.roll.spellcast', mode: 2, value: '1' }])]
  }),
  dhsOverheat2: feature('Overheat 2', 'Track Heat tokens. If this weapon has more than 2 Heat, it cannot be used.', {
    actions: [action('Overheat 2', 'When you attack, add a Heat token. If this weapon has more than 2 Heat, it cannot be used. Mark a Stress to clear all Heat.', { cost: stress(1), img: icons.energy, uses: uses(2) })]
  }),
  dhsOverheat3: feature('Overheat 3', 'Track Heat tokens. If this weapon has more than 3 Heat, it cannot be used.', {
    actions: [action('Overheat 3', 'When you attack, add a Heat token. If this weapon has more than 3 Heat, it cannot be used. Mark a Stress to clear all Heat.', { cost: stress(1), img: icons.energy, uses: uses(3) })]
  }),
  dhsOverheat4: feature('Overheat 4', 'Track Heat tokens. If this weapon has more than 4 Heat, it cannot be used.', {
    actions: [action('Overheat 4', 'When you attack, add a Heat token. If this weapon has more than 4 Heat, it cannot be used. Mark a Stress to clear all Heat.', { cost: stress(1), img: icons.energy, uses: uses(4) })]
  }),
  dhsOverload: feature('Overload', 'On a successful attack, the target must mark a Stress.', {
    actions: [action('Overload', 'On a successful attack, the target must mark a Stress.', { img: icons.energy })]
  }),
  dhsPaired: feature('Paired', '1+Tier to primary weapon damage to targets within Melee range.', {
    effects: [
      effect('Paired', '1+Tier to primary weapon damage to targets within Melee range.', [
        { key: 'system.bonuses.damage.primaryWeapon.bonus', mode: 2, value: 'ITEM.@system.tier + 1' }
      ])
    ]
  }),
  dhsPowerful: feature('Powerful', 'On a successful attack, roll an additional damage die and discard the lowest result.', {
    actions: [action('Powerful', 'On a successful attack, roll an additional damage die and discard the lowest result.')]
  }),
  dhsQuick: feature('Quick', 'Mark a Stress to attack another adversary in range.', {
    actions: [action('Quick', 'Mark a Stress to attack another adversary in range.', { cost: stress(1), img: icons.movement })]
  }),
  dhsRampUp: feature('Ramp-up', 'Overheat 3; for each Heat token, increase the damage die one step.', {
    actions: [action('Ramp-up', 'Overheat 3; for each Heat token, increase the damage die one step (d6 > d8 > d10 > d12).', { cost: stress(1), img: icons.energy, uses: uses(3) })]
  }),
  dhsRecharging: feature('Recharging', 'On rest, if you have less than 2 Ammo remaining, regain 1 Ammo token.', {
    actions: [action('Recharging', 'On rest, if you have less than 2 Ammo remaining on this weapon, regain 1 Ammo token.', { img: icons.reload })]
  }),
  dhsRecoil: feature('Recoil', '-1 to attack rolls.', {
    effects: [effect('Recoil', '-1 to attack rolls.', [primaryAttackBonus(-1)])]
  }),
  dhsReelIn: feature('Reel In', 'On a successful attack, spend a Hope to Restrain the target and pull them into Melee range with you.', {
    actions: [action('Reel In', 'On a successful attack, spend a Hope to Restrain the target and pull them into Melee range with you.', { cost: hope(1), img: icons.restraint })]
  }),
  dhsRejuvenating: feature('Rejuvenating', 'On a successful attack, roll a d6. On a 6, clear one HP or Stress.', {
    actions: [action('Rejuvenating', 'On a successful attack, roll a d6. On a 6, clear one HP or Stress.')]
  }),
  dhsReliable: feature('Reliable', '+1 to attack rolls.', {
    effects: [effect('Reliable', '+1 to attack rolls.', [primaryAttackBonus(1)], icons.precision)]
  }),
  dhsReloading: feature('Reloading', 'After an attack, roll a d6. On a 1, mark a Stress to reload before firing again.', {
    actions: [action('Reloading', 'After an attack, roll a d6. On a 1, mark a Stress to reload before firing again.', { cost: stress(1), img: icons.reload })]
  }),
  dhsScatter: feature('Scatter', 'When you make an attack, target all creatures in front of you within range.', {
    actions: [action('Scatter', 'When you make an attack, target all creatures in front of you within range.', { img: icons.blast })]
  }),
  dhsSeeker: feature('Seeker', 'Attacks against Flying targets have Advantage.', {
    actions: [action('Seeker', 'Attacks against Flying targets have Advantage.', { img: icons.precision })]
  }),
  dhsSelfCorrecting8: feature('Self-Correcting', 'When you roll a 1 on a damage die, it deals 8 damage instead.', {
    actions: [action('Self-Correcting', 'When you roll a 1 on a damage die, it deals 8 damage instead.')]
  }),
  dhsSidearmD4: feature('Sidearm d4', 'When a primary attack would miss in this weapon range, add 1d4 to the attack roll. If that succeeds, deal this weapon damage.', {
    actions: [action('Sidearm d4', 'When a primary attack would miss in this weapon range, add 1d4 to the attack roll. If that succeeds, deal this weapon damage.')]
  }),
  dhsSidearmD6: feature('Sidearm d6', 'When a primary attack would miss in this weapon range, add 1d6 to the attack roll. If that succeeds, deal this weapon damage.', {
    actions: [action('Sidearm d6', 'When a primary attack would miss in this weapon range, add 1d6 to the attack roll. If that succeeds, deal this weapon damage.')]
  }),
  dhsSlugger: feature('Slugger', 'On a successful attack, the target marks Stress. Spend Hope to knock them back to Far range.', {
    actions: [action('Slugger', 'On a successful attack, the target marks Stress. Spend Hope to knock them back to Far range.', { cost: hope(1) })]
  }),
  dhsSpecialist: feature('Specialist', 'Damage dice that roll 1 deal 6 damage instead. Severe damage marks one additional HP.', {
    actions: [action('Specialist', 'Every damage die that rolls a 1 deals 6 damage instead. If you deal Severe damage, the target must mark an additional HP.')]
  }),
  dhsStartling: feature('Startling', 'Mark a Stress to force all adversaries within Melee range back to Close range.', {
    actions: [action('Startling', 'Mark a Stress to force all adversaries within Melee range back to Close range.', { cost: stress(1), img: icons.stress })]
  }),
  dhsStunning: feature('Stunning', 'On a successful attack, temporarily Restrain the target until the end of their next spotlight.', {
    actions: [action('Stunning', 'On a successful attack, temporarily Restrain the target until the end of their next spotlight.', { img: icons.restraint })]
  }),
  dhsSurge: feature('Surge', 'Mark a Shield Slot to double a damage die on a primary weapon attack.', {
    actions: [action('Surge', 'Mark a Shield Slot to double a damage die on a primary weapon attack.', { cost: armor(1), img: icons.energy })]
  }),
  dhsTacNuke: feature('Tac. Nuke', 'Mark 3 Stress to attack everything within Close range of a point in Far range. Missed targets take half damage.', {
    actions: [action('Tac. Nuke', 'Mark 3 Stress to attack everything within Close range of a point in Far range. Missed targets take half damage.', { cost: stress(3), img: icons.blast })]
  }),
  dhsTechMastery: feature('Tech Mastery', 'Once per session, turn a failure into a Success with Fear on a roll related to using tech.', {
    actions: [action('Tech Mastery', 'Once per session, turn a failure into a Success with Fear on a roll related to using tech.', { uses: { value: 0, max: 1, recovery: null } })]
  }),
  dhsUnwieldyBunkerDown: feature('Unwieldy', '-1 to Evasion, -1 to Finesse. Bunker Down: mark Stress to gain Resistance to Physical damage until you move.', {
    effects: [
      effect('Unwieldy', '-1 to Evasion, -1 to Finesse.', [
        { key: 'system.evasion', mode: 2, value: '-1' },
        { key: 'system.traits.finesse.value', mode: 2, value: '-1' }
      ])
    ],
    actions: [action('Bunker Down', 'Mark a Stress to gain Resistance to Physical damage until you move willingly or unwillingly.', { cost: stress(1), img: icons.shield })]
  }),
  dhsVersatileAgility: feature('Versatile', 'Can also be used with Agility, d6, Far.', {
    actions: [action('Versatile', 'Can also be used with Agility, d6, Far.')]
  }),
  dhsVersatileFinesse: feature('Versatile', 'Can also be used with Finesse, d6, Very Far.', {
    actions: [action('Versatile', 'Can also be used with Finesse, d6, Very Far.')]
  }),
  dhsVersatileStrength: feature('Versatile', 'Can also be used with Strength, Melee, d12.', {
    actions: [action('Versatile', 'Can also be used with Strength, Melee, d12.')]
  }),
  dhsSupermassive: feature('Supermassive', '-2 to Evasion, -1 Agility. On a successful attack, reroll any amount of damage dice once.', {
  effects: [
    effect('Supermassive', '-2 to Evasion, -1 Agility.', [
      { key: 'system.evasion', mode: 2, value: '-2' },
      { key: 'system.traits.agility.value', mode: 2, value: '-1' }
    ])
  ],
  actions: [action('Supermassive', 'On a successful attack, reroll any amount of damage dice once.')]
})
};

export const massHeartArmorFeatures = {};

const weaponMatchers = [
  [/^Akimbo: \+2/i, ['dhsAkimbo2']],
  [/^Akimbo: \+3/i, ['dhsAkimbo3']],
  [/^Ammo 1\. Mass Field:/i, ['dhsAmmo1', 'dhsMassField']],
  [/^Ammo 1\. Tac\. Nuke:/i, ['dhsAmmo1', 'dhsTacNuke']],
  [/^Ammo 2\. Gravity-Warping:/i, ['dhsAmmo2', 'dhsGravityWarping']],
  [/^Ammo 2\. Multilock:/i, ['dhsAmmo2', 'dhsMultilock']],
  [/^Ammo 3\. Brittle:/i, ['dhsAmmo3', 'dhsBrittle']],
  [/^Ammo 3\. Chaining:/i, ['dhsAmmo3', 'dhsChaining']],
  [/^Ammo 3\. Supermassive:/i, ['dhsAmmo3', 'dhsSupermassive']],
  [/^Ammo 4\. Eruptive:/i, ['dhsAmmo4', 'dhsEruptive']],
  [/^Ammo 4\. Scatter:/i, ['dhsAmmo4', 'dhsScatter']],
  [/^Ammo 4\. Seeker:/i, ['dhsAmmo4', 'dhsSeeker']],
  [/^Ammo 6\. Recharging:/i, ['dhsAmmo6', 'dhsRecharging']],
  [/^Barrier:/i, ['dhsBarrierMass']],
  [/^Beacon:/i, ['dhsBeacon']],
  [/^Biotic Mastery:/i, ['dhsBioticMastery']],
  [/^Brutal:/i, ['dhsBrutal']],
  [/^Calculated:/i, ['dhsCalculated']],
  [/^Charged:/i, ['dhsCharged']],
  [/^Concussive:/i, ['dhsConcussive']],
  [/^Cumbersome:/i, ['dhsCumbersome']],
  [/^Deflecting: When you are attacked/i, ['dhsDeflectingShield']],
  [/^Destructive:/i, ['dhsDestructive']],
  [/^Devastating:/i, ['dhsDevastating']],
  [/^Disrupt:/i, ['dhsDisrupt']],
  [/^Double Duty: \+2/i, ['dhsDoubleDuty2']],
  [/^Double Duty: \+3/i, ['dhsDoubleDuty3']],
  [/^Dual-Barrel:/i, ['dhsDualBarrel']],
  [/^Explosive:/i, ['dhsExplosive']],
  [/^Heavy:/i, ['dhsHeavy']],
  [/^Hooked:/i, ['dhsHooked']],
  [/^Hot:/i, ['dhsHot']],
  [/^Karma:/i, ['dhsKarma']],
  [/^Lightweight:/i, ['dhsLightweight']],
  [/^Massive:/i, ['dhsMassive']],
  [/^Momentum:/i, ['dhsMomentum']],
  [/^Organic:/i, ['dhsOrganic']],
  [/^Overheat 2$/i, ['dhsOverheat2']],
  [/^Overheat 3$/i, ['dhsOverheat3']],
  [/^Overheat 4$/i, ['dhsOverheat4']],
  [/^Overload:/i, ['dhsOverload']],
  [/^Paired:/i, ['dhsPaired']],
  [/^Powerful:/i, ['dhsPowerful']],
  [/^Quick$/i, ['dhsQuick']],
  [/^Ramp-up:/i, ['dhsRampUp']],
  [/^Recoil:/i, ['dhsRecoil']],
  [/^Reel In:/i, ['dhsReelIn']],
  [/^Rejuvenating:/i, ['dhsRejuvenating']],
  [/^Reliable:/i, ['dhsReliable']],
  [/^Reloading$/i, ['dhsReloading']],
  [/^Scatter:/i, ['dhsScatter']],
  [/^Self-Correcting:/i, ['dhsSelfCorrecting8']],
  [/^Sidearm d4$/i, ['dhsSidearmD4']],
  [/^Sidearm d6$/i, ['dhsSidearmD6']],
  [/^Slugger:/i, ['dhsSlugger']],
  [/^Specialist:/i, ['dhsSpecialist']],
  [/^Startling:/i, ['dhsStartling']],
  [/^Stunning:/i, ['dhsStunning']],
  [/^Surge:/i, ['dhsSurge']],
  [/^Tech Mastery:/i, ['dhsTechMastery']],
  [/^Unwieldy: -1 to Evasion/i, ['dhsUnwieldyBunkerDown']],
  [/^Versatile: Can also be used with the following traits - Agility/i, ['dhsVersatileAgility']],
  [/^Versatile: Can also be used with the following traits - Finesse/i, ['dhsVersatileFinesse']],
  [/^Versatile: Can also be used with these statistics - Strength/i, ['dhsVersatileStrength']]
];

export function massHeartWeaponFeatureValuesFromText(text) {
  return featureValuesFromText(text, weaponMatchers, massHeartWeaponFeatures);
}
