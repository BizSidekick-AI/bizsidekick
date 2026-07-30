# BizSidekick

[Alle understøttede sprog](README.md) · [English](../../README.md)

Offentlig plugin-markedsplads til brug af BizSidekick med Codex, Claude og WorkBuddy. Pluginet opretter
forbindelse til den hostede Bustly MCP-tjeneste på `https://mcp.bizsidekick.app/mcp`. Dette lager indeholder
ingen udbyderlegitimationsoplysninger, forhandlerdata, MCP-kildekode eller implementeringshemmeligheder.

## Codex til computer

Indsæt følgende tekst i en Codex-opgave:

```text
Brug Codex' brugerdefinerede plugin-markedsplads til at tilføje `BizSidekick-AI/bizsidekick`, og installer kun BizSidekick, hvis det er nødvendigt. Åbn eller læs ikke lageret i en browser. Genbrug mit eksisterende login. Hvis godkendelsen kan gennemføres uden kontoopsætning, skal du kontrollere forbindelsen og automatisk oprette og åbne én ny BizSidekick-opgave, der viser mine butikker og seneste produkter. Hvis login, registrering eller BizSidekick-onboarding er nødvendig, skal du holde denne installationsopgave åben, bede mig færdiggøre den i browseren og svare `Fortsæt`, derefter kontrollere godkendelsen og oprette opgaven.
```

CLI-alternativ:

```bash
codex plugin marketplace add BizSidekick-AI/bizsidekick --ref main
codex plugin add bizsidekick@bizsidekick
codex mcp login bizsidekick
```

## Claude Code

Indsæt følgende tekst i en Claude Code-session:

```text
Brug Claude Codes brugerdefinerede plugin-markedsplads til at tilføje `BizSidekick-AI/bizsidekick`, og installer kun `bizsidekick@bizsidekick`, hvis det er nødvendigt. Åbn eller læs ikke lageret i en browser. Bevar mit eksisterende login, og kør `/reload-plugins` præcis én gang efter en ny installation. Hvis godkendelsen kan gennemføres uden kontoopsætning, skal du fortsætte i denne session og automatisk starte en skrivebeskyttet BizSidekick-opgave, der viser mine butikker og seneste produkter. Hvis login, registrering eller BizSidekick-onboarding er nødvendig, skal du holde denne session åben, bede mig færdiggøre den i browseren og svare `Fortsæt`, derefter kontrollere godkendelsen og starte opgaven.
```

CLI-alternativ:

```bash
claude plugin marketplace add BizSidekick-AI/bizsidekick
claude plugin install bizsidekick@bizsidekick --scope user
```

## WorkBuddy til computer

Indsæt følgende tekst i en WorkBuddy-samtale:

```text
Brug WorkBuddys brugerdefinerede plugin-markedsplads til at tilføje `BizSidekick-AI/bizsidekick`, og installer kun `bizsidekick@bizsidekick`, hvis det er nødvendigt. Åbn eller læs ikke lageret i en browser. Bevar mit eksisterende login, og kør `/reload-plugins` præcis én gang efter en ny installation. Hvis godkendelsen kan gennemføres uden kontoopsætning, skal du fortsætte i denne samtale og automatisk starte en skrivebeskyttet BizSidekick-opgave, der viser mine butikker og seneste produkter. Hvis login, registrering eller BizSidekick-onboarding er nødvendig, skal du holde denne samtale åben, bede mig færdiggøre den i browseren og svare `Fortsæt`, derefter kontrollere godkendelsen og starte opgaven.
```

CLI-alternativ:

```bash
codebuddy plugin marketplace add https://github.com/BizSidekick-AI/bizsidekick.git --name bizsidekick
codebuddy plugin install bizsidekick@bizsidekick --scope user
```

## Sikkerhedsmodel

- Google/Bustly-login foregår i browseren via OAuth; arbejdsområdet vælges i forretningsopgaven.
- En brugerbaseret OAuth-tilladelse begrænses af det aktuelle Bustly-medlemskab; en opgave bindes til præcis ét arbejdsområde.
- En læsning uden valgt butik omfatter alle aktive, tilgængelige forbindelser i arbejdsområdet og kræver ikke bekræftelse.
- Ændringer vises først som en forhåndsvisning og anvendes kun efter udtrykkelig godkendelse.
- Handlinger med høj risiko kræver indtastning af en bekræftelse.
- Udbyderlegitimationsoplysninger sendes aldrig til MCP-klienten eller dette lager.
- Plugin-Skills og MCP-værktøjsbeskrivelser er offentlige integrationsmaterialer, ikke en sikkerhedsgrænse.
