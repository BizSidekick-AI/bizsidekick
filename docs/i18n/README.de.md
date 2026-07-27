# BizSidekick

[Alle unterstützten Sprachen](README.md) · [English](../../README.md)

Öffentlicher Plugin-Marktplatz für BizSidekick mit Codex, Claude und WorkBuddy. Das Plugin verbindet
sich mit dem gehosteten Bustly-MCP-Dienst unter `https://mcp.bustly.ai/mcp`. Dieses Repository enthält
keine Anbieterzugangsdaten, Händlerdaten, Quellcodes des MCP-Dienstes oder Bereitstellungsgeheimnisse.

## Codex Desktop

Füge den folgenden Text in eine Codex-Aufgabe ein:

```text
Verwende den benutzerdefinierten Plugin-Marktplatz von Codex, um `BizSidekick-AI/bizsidekick` hinzuzufügen, und installiere BizSidekick nur bei Bedarf. Öffne oder lies das Repository nicht im Browser. Verwende meine bestehende Anmeldung weiter. Wenn die Autorisierung ohne Kontoeinrichtung abgeschlossen werden kann, prüfe die Verbindung und erstelle und öffne automatisch genau eine neue BizSidekick-Aufgabe, die meine Shops und neuesten Produkte zeigt. Wenn Anmeldung, Registrierung oder BizSidekick-Onboarding erforderlich ist, lasse diese Installationsaufgabe geöffnet, bitte mich, den Vorgang im Browser abzuschließen und mit `Weiter` zu antworten, prüfe danach die Autorisierung und erstelle die Aufgabe.
```

CLI-Alternative:

```bash
codex plugin marketplace add BizSidekick-AI/bizsidekick --ref main
codex plugin add bizsidekick@bizsidekick
codex mcp login bizsidekick
```

## Claude Code

Füge den folgenden Text in eine Claude-Code-Sitzung ein:

```text
Verwende den benutzerdefinierten Plugin-Marktplatz von Claude Code, um `BizSidekick-AI/bizsidekick` hinzuzufügen, und installiere `bizsidekick@bizsidekick` nur bei Bedarf. Öffne oder lies das Repository nicht im Browser. Behalte meine bestehende Anmeldung bei und führe nach einer Neuinstallation `/reload-plugins` genau einmal aus. Wenn die Autorisierung ohne Kontoeinrichtung abgeschlossen werden kann, fahre in dieser Sitzung fort und starte automatisch eine schreibgeschützte BizSidekick-Aufgabe, die meine Shops und neuesten Produkte zeigt. Wenn Anmeldung, Registrierung oder BizSidekick-Onboarding erforderlich ist, lasse diese Sitzung geöffnet, bitte mich, den Vorgang im Browser abzuschließen und mit `Weiter` zu antworten, prüfe danach die Autorisierung und starte die Aufgabe.
```

CLI-Alternative:

```bash
claude plugin marketplace add BizSidekick-AI/bizsidekick
claude plugin install bizsidekick@bizsidekick --scope user
```

## WorkBuddy Desktop

Füge den folgenden Text in eine WorkBuddy-Unterhaltung ein:

```text
Verwende den benutzerdefinierten Plugin-Marktplatz von WorkBuddy, um `BizSidekick-AI/bizsidekick` hinzuzufügen, und installiere `bizsidekick@bizsidekick` nur bei Bedarf. Öffne oder lies das Repository nicht im Browser. Behalte meine bestehende Anmeldung bei und führe nach einer Neuinstallation `/reload-plugins` genau einmal aus. Wenn die Autorisierung ohne Kontoeinrichtung abgeschlossen werden kann, fahre in dieser Unterhaltung fort und starte automatisch eine schreibgeschützte BizSidekick-Aufgabe, die meine Shops und neuesten Produkte zeigt. Wenn Anmeldung, Registrierung oder BizSidekick-Onboarding erforderlich ist, lasse diese Unterhaltung geöffnet, bitte mich, den Vorgang im Browser abzuschließen und mit `Weiter` zu antworten, prüfe danach die Autorisierung und starte die Aufgabe.
```

CLI-Alternative:

```bash
codebuddy plugin marketplace add https://github.com/BizSidekick-AI/bizsidekick.git --name bizsidekick
codebuddy plugin install bizsidekick@bizsidekick --scope user
```

## Sicherheitsmodell

- Die Google/Bustly-Anmeldung erfolgt per OAuth im Browser; der Arbeitsbereich wird in der Geschäftsaufgabe ausgewählt.
- Eine benutzerbezogene OAuth-Berechtigung ist durch die aktuelle Bustly-Mitgliedschaft begrenzt; eine Aufgabe ist genau an einen Arbeitsbereich gebunden.
- Ein Lesevorgang ohne Shop-Eingrenzung umfasst alle aktiven, zugänglichen Verbindungen in diesem Arbeitsbereich und benötigt keine Bestätigung.
- Änderungen werden zuerst als Vorschau angezeigt und erst nach ausdrücklicher Genehmigung angewendet.
- Vorgänge mit hohem Risiko erfordern eine eingegebene Bestätigung.
- Anbieterzugangsdaten gelangen niemals in den MCP-Client oder dieses Repository.
- Plugin-Skills und MCP-Toolbeschreibungen sind öffentliche Integrationsartefakte und keine Sicherheitsgrenze.
