# BizSidekick

[Alla språk som stöds](README.md) · [English](../../README.md)

Offentlig plugin-marknadsplats för att använda BizSidekick med Codex, Claude och WorkBuddy. Pluginet
ansluter till den driftade Bustly MCP-tjänsten på `https://mcp.bustly.ai/mcp`. Det här lagret innehåller
inga leverantörsuppgifter, handlaruppgifter, källkod för MCP-tjänsten eller driftsättningshemligheter.

## Codex för dator

Klistra in följande text i en Codex-uppgift:

```text
Använd Codex inbyggda plugin-marknadsplats för att lägga till `BizSidekick-AI/bizsidekick` och installera BizSidekick endast vid behov. Öppna eller läs inte arkivet i en webbläsare. Återanvänd min befintliga inloggning. Om auktoriseringen slutförs utan kontokonfiguration ska du kontrollera anslutningen och automatiskt skapa och öppna exakt en ny BizSidekick-uppgift som visar mina butiker och senaste produkter. Om inloggning, registrering eller BizSidekick-onboarding krävs, håll den här installationsuppgiften öppen, be mig slutföra i webbläsaren och svara `Fortsätt`, kontrollera sedan auktoriseringen och skapa uppgiften.
```

CLI-alternativ:

```bash
codex plugin marketplace add BizSidekick-AI/bizsidekick --ref main
codex plugin add bizsidekick@bizsidekick
codex mcp login bizsidekick
```

## Claude Code

Klistra in följande text i en Claude Code-session:

```text
Använd Claude Codes inbyggda plugin-marknadsplats för att lägga till `BizSidekick-AI/bizsidekick` och installera `bizsidekick@bizsidekick` endast vid behov. Öppna eller läs inte arkivet i en webbläsare. Behåll min befintliga inloggning och kör `/reload-plugins` exakt en gång efter en ny installation. Om auktoriseringen slutförs utan kontokonfiguration ska du fortsätta i den här sessionen och automatiskt starta en skrivskyddad BizSidekick-uppgift som visar mina butiker och senaste produkter. Om inloggning, registrering eller BizSidekick-onboarding krävs, håll den här sessionen öppen, be mig slutföra i webbläsaren och svara `Fortsätt`, kontrollera sedan auktoriseringen och starta uppgiften.
```

CLI-alternativ:

```bash
claude plugin marketplace add BizSidekick-AI/bizsidekick
claude plugin install bizsidekick@bizsidekick --scope user
```

## WorkBuddy för dator

Klistra in följande text i en WorkBuddy-konversation:

```text
Använd WorkBuddys inbyggda plugin-marknadsplats för att lägga till `BizSidekick-AI/bizsidekick` och installera `bizsidekick@bizsidekick` endast vid behov. Öppna eller läs inte arkivet i en webbläsare. Behåll min befintliga inloggning och kör `/reload-plugins` exakt en gång efter en ny installation. Om auktoriseringen slutförs utan kontokonfiguration ska du fortsätta i den här konversationen och automatiskt starta en skrivskyddad BizSidekick-uppgift som visar mina butiker och senaste produkter. Om inloggning, registrering eller BizSidekick-onboarding krävs, håll den här konversationen öppen, be mig slutföra i webbläsaren och svara `Fortsätt`, kontrollera sedan auktoriseringen och starta uppgiften.
```

CLI-alternativ:

```bash
codebuddy plugin marketplace add https://github.com/BizSidekick-AI/bizsidekick.git --name bizsidekick
codebuddy plugin install bizsidekick@bizsidekick --scope user
```

## Säkerhetsmodell

- Google/Bustly-inloggning sker i webbläsaren via OAuth; arbetsytan väljs i affärsuppgiften.
- En användarbegränsad OAuth-behörighet begränsas av det aktuella Bustly-medlemskapet; en uppgift binds till exakt en arbetsyta.
- Läsning utan butiksavgränsning omfattar alla aktiva, tillgängliga anslutningar i arbetsytan och kräver ingen bekräftelse.
- Ändringar förhandsvisas först och tillämpas endast efter uttryckligt godkännande.
- Åtgärder med hög risk kräver en inskriven bekräftelse.
- Leverantörsuppgifter skickas aldrig till MCP-klienten eller det här lagret.
- Plugin-Skills och MCP-verktygsbeskrivningar är offentliga integrationsartefakter, inte en säkerhetsgräns.
