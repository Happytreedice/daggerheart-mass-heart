import { massHeartWeaponFeatures } from './mass-heart-features.mjs';

const MODULE_NAME = 'Mass Heart for Daggerheart';
const I18N_PREFIX = 'DHMH';

Hooks.once('init', () => {
  if (!CONFIG.DH?.ITEM?.weaponFeatures) {
    console.warn(`${MODULE_NAME} | Daggerheart weapon feature registry was not available during init.`);
    return;
  }

  Object.assign(CONFIG.DH.ITEM.weaponFeatures, localizedFeatureRegistry(massHeartWeaponFeatures, 'Weapon'));
  console.info(`${MODULE_NAME} | Initialized successfully.`);
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
  if (!game.i18n.has(key)) return;
  object[field] = key;
}
