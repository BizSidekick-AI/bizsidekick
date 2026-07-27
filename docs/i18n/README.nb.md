# BizSidekick

[Alle støttede språk](README.md) · [English](../../README.md)

Offentlig plugin-markedsplass for bruk av BizSidekick med Codex, Claude og WorkBuddy. Pluginen kobler
til den driftede Bustly MCP-tjenesten på `https://mcp.bustly.ai/mcp`. Dette repositoriet inneholder
ingen leverandørlegitimasjon, forhandlerdata, kildekode for MCP-tjenesten eller distribusjonshemmeligheter.

## Codex for skrivebord

Lim inn følgende tekst i en Codex-oppgave:

```text
Bruk Codex sin innebygde plugin-markedsplass til å legge til `BizSidekick-AI/bizsidekick`, og installer BizSidekick bare ved behov. Ikke åpne eller les repositoriet i en nettleser. Gjenbruk min eksisterende innlogging. Hvis autorisasjonen fullføres uten kontooppsett, kontroller tilkoblingen og opprett og åpne automatisk én ny BizSidekick-oppgave som viser butikkene mine og de nyeste produktene. Hvis innlogging, registrering eller BizSidekick-onboarding er nødvendig, hold denne installasjonsoppgaven åpen, be meg fullføre i nettleseren og svare `Fortsett`, kontroller deretter autorisasjonen og opprett oppgaven.
```

CLI-alternativ:

```bash
codex plugin marketplace add BizSidekick-AI/bizsidekick --ref main
codex plugin add bizsidekick@bizsidekick
codex mcp login bizsidekick
```

## Claude Code

Lim inn følgende tekst i en Claude Code-økt:

```text
Bruk Claude Code sin innebygde plugin-markedsplass til å legge til `BizSidekick-AI/bizsidekick`, og installer `bizsidekick@bizsidekick` bare ved behov. Ikke åpne eller les repositoriet i en nettleser. Behold min eksisterende innlogging, og kjør `/reload-plugins` nøyaktig én gang etter en ny installasjon. Hvis autorisasjonen fullføres uten kontooppsett, fortsett i denne økten og start automatisk en skrivebeskyttet BizSidekick-oppgave som viser butikkene mine og de nyeste produktene. Hvis innlogging, registrering eller BizSidekick-onboarding er nødvendig, hold denne økten åpen, be meg fullføre i nettleseren og svare `Fortsett`, kontroller deretter autorisasjonen og start oppgaven.
```

CLI-alternativ:

```bash
claude plugin marketplace add BizSidekick-AI/bizsidekick
claude plugin install bizsidekick@bizsidekick --scope user
```

## WorkBuddy for skrivebord

Lim inn følgende tekst i en WorkBuddy-samtale:

```text
Bruk WorkBuddy sin innebygde plugin-markedsplass til å legge til `BizSidekick-AI/bizsidekick`, og installer `bizsidekick@bizsidekick` bare ved behov. Ikke åpne eller les repositoriet i en nettleser. Behold min eksisterende innlogging, og kjør `/reload-plugins` nøyaktig én gang etter en ny installasjon. Hvis autorisasjonen fullføres uten kontooppsett, fortsett i denne samtalen og start automatisk en skrivebeskyttet BizSidekick-oppgave som viser butikkene mine og de nyeste produktene. Hvis innlogging, registrering eller BizSidekick-onboarding er nødvendig, hold denne samtalen åpen, be meg fullføre i nettleseren og svare `Fortsett`, kontroller deretter autorisasjonen og start oppgaven.
```

CLI-alternativ:

```bash
codebuddy plugin marketplace add https://github.com/BizSidekick-AI/bizsidekick.git --name bizsidekick
codebuddy plugin install bizsidekick@bizsidekick --scope user
```

## Sikkerhetsmodell

- Google/Bustly-pålogging skjer i nettleseren via OAuth; arbeidsområdet velges i forretningsoppgaven.
- En brukeravgrenset OAuth-tillatelse begrenses av gjeldende Bustly-medlemskap; en oppgave bindes til nøyaktig ett arbeidsområde.
- Lesing uten butikkavgrensning omfatter alle aktive, tilgjengelige tilkoblinger i arbeidsområdet og krever ingen bekreftelse.
- Endringer forhåndsvises først og utføres bare etter uttrykkelig godkjenning.
- Operasjoner med høy risiko krever en innskrevet bekreftelse.
- Leverandørlegitimasjon sendes aldri til MCP-klienten eller dette repositoriet.
- Plugin-Skills og MCP-verktøybeskrivelser er offentlige integrasjonsartefakter, ikke en sikkerhetsgrense.
