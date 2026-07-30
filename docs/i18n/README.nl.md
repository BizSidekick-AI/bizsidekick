# BizSidekick

[Alle ondersteunde talen](README.md) · [English](../../README.md)

Openbare pluginmarktplaats om BizSidekick te gebruiken met Codex, Claude en WorkBuddy. De plugin maakt
verbinding met de gehoste Bustly MCP-service op `https://mcp.bizsidekick.app/mcp`. Deze repository bevat geen
providerreferenties, winkelgegevens, broncode van de MCP-service of implementatiegeheimen.

## Codex voor desktop

Plak de volgende tekst in een Codex-taak:

```text
Gebruik de aangepaste pluginmarktplaats van Codex om `BizSidekick-AI/bizsidekick` toe te voegen en installeer BizSidekick alleen als dat nodig is. Open of lees de repository niet in een browser. Hergebruik mijn bestaande aanmelding. Als de autorisatie zonder accountconfiguratie wordt voltooid, controleer dan de verbinding en maak en open automatisch precies één nieuwe BizSidekick-taak die mijn winkels en recente producten toont. Als aanmelden, registreren of BizSidekick-onboarding nodig is, houd deze installatietaak open, vraag me de stappen in de browser af te ronden en `Doorgaan` te antwoorden, controleer daarna de autorisatie en maak de taak.
```

CLI-alternatief:

```bash
codex plugin marketplace add BizSidekick-AI/bizsidekick --ref main
codex plugin add bizsidekick@bizsidekick
codex mcp login bizsidekick
```

## Claude Code

Plak de volgende tekst in een Claude Code-sessie:

```text
Gebruik de aangepaste pluginmarktplaats van Claude Code om `BizSidekick-AI/bizsidekick` toe te voegen en installeer `bizsidekick@bizsidekick` alleen als dat nodig is. Open of lees de repository niet in een browser. Behoud mijn bestaande aanmelding en voer `/reload-plugins` precies één keer uit na een nieuwe installatie. Als de autorisatie zonder accountconfiguratie wordt voltooid, ga dan door in deze sessie en start automatisch een alleen-lezen BizSidekick-taak die mijn winkels en recente producten toont. Als aanmelden, registreren of BizSidekick-onboarding nodig is, houd deze sessie open, vraag me de stappen in de browser af te ronden en `Doorgaan` te antwoorden, controleer daarna de autorisatie en start de taak.
```

CLI-alternatief:

```bash
claude plugin marketplace add BizSidekick-AI/bizsidekick
claude plugin install bizsidekick@bizsidekick --scope user
```

## WorkBuddy voor desktop

Plak de volgende tekst in een WorkBuddy-gesprek:

```text
Gebruik de aangepaste pluginmarktplaats van WorkBuddy om `BizSidekick-AI/bizsidekick` toe te voegen en installeer `bizsidekick@bizsidekick` alleen als dat nodig is. Open of lees de repository niet in een browser. Behoud mijn bestaande aanmelding en voer `/reload-plugins` precies één keer uit na een nieuwe installatie. Als de autorisatie zonder accountconfiguratie wordt voltooid, ga dan door in dit gesprek en start automatisch een alleen-lezen BizSidekick-taak die mijn winkels en recente producten toont. Als aanmelden, registreren of BizSidekick-onboarding nodig is, houd dit gesprek open, vraag me de stappen in de browser af te ronden en `Doorgaan` te antwoorden, controleer daarna de autorisatie en start de taak.
```

CLI-alternatief:

```bash
codebuddy plugin marketplace add https://github.com/BizSidekick-AI/bizsidekick.git --name bizsidekick
codebuddy plugin install bizsidekick@bizsidekick --scope user
```

## Beveiligingsmodel

- Aanmelden bij Google/Bustly gebeurt in de browser via OAuth; de werkruimte wordt in de bedrijfstaak gekozen.
- Een OAuth-machtiging voor een gebruiker wordt beperkt door het huidige Bustly-lidmaatschap; een taak is aan precies één werkruimte gekoppeld.
- Lezen zonder winkelscope omvat alle actieve, toegankelijke verbindingen in die werkruimte en vereist geen bevestiging.
- Wijzigingen tonen eerst een voorbeeld en worden alleen na uitdrukkelijke goedkeuring toegepast.
- Bewerkingen met een hoog risico vereisen een ingetikte bevestiging.
- Providerreferenties worden nooit naar de MCP-client of deze repository verzonden.
- Plugin-Skills en MCP-toolbeschrijvingen zijn openbare integratieartefacten, geen beveiligingsgrens.
