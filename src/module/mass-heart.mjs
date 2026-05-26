import { registerRuntimeLocalization } from './localization.mjs';
import { massHeartArmorFeatures, massHeartWeaponFeatures } from './mass-heart-features.mjs';

const MODULE_ID = 'daggerheart-mass-heart';
const MODULE_NAME = 'Mass Heart for Daggerheart';
const I18N_PREFIX = 'DHMH';
const PACK_NAMES = [
  'mass-heart-classes',
  'mass-heart-subclasses',
  'mass-heart-ancestries',
  'mass-heart-communities',
  'mass-heart-weapons',
  'mass-heart-consumables',
  'mass-heart-adversaries',
  'mass-heart-environments',
  'mass-heart-journals'
];

Hooks.once('init', () => {
  if (!CONFIG.DH?.ITEM?.weaponFeatures || !CONFIG.DH?.ITEM?.armorFeatures) {
    console.warn(`${MODULE_NAME} | Daggerheart item feature registries were not available during init.`);
    return;
  }

  Object.assign(CONFIG.DH.ITEM.weaponFeatures, localizedFeatureRegistry(massHeartWeaponFeatures, 'Weapon'));
  Object.assign(CONFIG.DH.ITEM.armorFeatures, localizedFeatureRegistry(massHeartArmorFeatures, 'Armor'));
  console.info(`${MODULE_NAME} | Initialized successfully.`);
});

registerRuntimeLocalization({
  moduleId: MODULE_ID,
  i18nPrefix: I18N_PREFIX,
  moduleName: MODULE_NAME,
  packNames: PACK_NAMES
});

function localizedFeatureRegistry(registry, type) {
  const localized = foundry.utils.deepClone(registry);

  for (const [featureId, feature] of Object.entries(localized)) {
    localizeField(feature, 'label', `${I18N_PREFIX}.Feature.${type}.${featureId}.Label`);
    localizeField(feature, 'description', `${I18N_PREFIX}.Feature.${type}.${featureId}.Description`);

    for (const [index, effect] of (feature.effects ?? []).entries()) {
      localizeField(effect, 'name', `${I18N_PREFIX}.Feature.${type}.${featureId}.Effect.${index}.Name`);
      localizeField(effect, 'description', `${I18N_PREFIX}.Feature.${type}.${featureId}.Effect.${index}.Description`);
    }

    for (const [index, action] of (feature.actions ?? []).entries()) {
      localizeField(action, 'name', `${I18N_PREFIX}.Feature.${type}.${featureId}.Action.${index}.Name`);
      localizeField(action, 'description', `${I18N_PREFIX}.Feature.${type}.${featureId}.Action.${index}.Description`);

      for (const [effectIndex, effect] of (action.effects ?? []).entries()) {
        localizeField(effect, 'name', `${I18N_PREFIX}.Feature.${type}.${featureId}.Action.${index}.Effect.${effectIndex}.Name`);
        localizeField(
          effect,
          'description',
          `${I18N_PREFIX}.Feature.${type}.${featureId}.Action.${index}.Effect.${effectIndex}.Description`
        );
      }
    }
  }

  return localized;
}

function localizeField(object, field, key) {
  object[field] = key;
}
