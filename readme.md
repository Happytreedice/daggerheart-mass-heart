# Mass Heart for Daggerheart

Mass Heart for Daggerheart is an unofficial Foundry VTT compendium module for the Foundryborne Daggerheart system. It packages Mass Effect-inspired classes, subclasses, ancestries, communities, weapons, consumables, adversaries, environments, and rules journals.

## Installation

Use this manifest URL in Foundry VTT:

```text
https://github.com/Happytreedice/daggerheart-mass-heart/releases/latest/download/module.json
```

## Development

Build compendium packs with the official Foundry CLI:

```powershell
npm install
npm run build:packs
```

Create a release ZIP without uploading:

```powershell
npm run zip
```

Publish a GitHub release:

```powershell
$env:GITHUB_TOKEN = "ghp_your_token_here"
npm run release
```

The module registers Mass Heart weapon features during Foundry initialization and logs `Mass Heart for Daggerheart | Initialized successfully.` to the browser console when registration succeeds.

## Credits and Legal

This module is unofficial and independent. It is not affiliated with, endorsed by, sponsored by, or approved by Darrington Press, Critical Role, Electronic Arts, BioWare, Foundry Gaming, or any Mass Effect rights holder.

- Daggerheart and the Daggerheart SRD are published by Darrington Press / Critical Role: https://darringtonpress.com/daggerheart/
- Darrington Press Community Gaming License: https://darringtonpress.com/license/
- Foundry Virtual Tabletop is published by Foundry Gaming LLC: https://foundryvtt.com/
- Mass Effect is owned by Electronic Arts / BioWare: https://www.ea.com/games/mass-effect
