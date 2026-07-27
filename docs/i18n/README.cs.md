# BizSidekick

[Všechny podporované jazyky](README.md) · [English](../../README.md)

Veřejný marketplace pluginu BizSidekick pro Codex, Claude a WorkBuddy. Plugin se připojuje k hostované
službě Bustly MCP na adrese `https://mcp.bustly.ai/mcp`. Tento repozitář neobsahuje přihlašovací údaje
poskytovatelů, data obchodníků, zdrojový kód služby MCP ani tajné údaje pro nasazení.

## Codex pro počítače

Vložte následující text do úlohy v aplikaci Codex:

```text
Použij nativní tržiště pluginů Codexu, přidej `BizSidekick-AI/bizsidekick` a nainstaluj BizSidekick, jen pokud je to potřeba. Neotevírej ani nečti repozitář v prohlížeči. Zachovej mé stávající přihlášení. Pokud autorizace proběhne bez nastavení účtu, ověř připojení a automaticky vytvoř a otevři jednu novou úlohu BizSidekick, která zobrazí mé obchody a nejnovější produkty. Pokud je nutné přihlášení, registrace nebo onboarding BizSidekick, ponech tuto instalační úlohu otevřenou, požádej mě o dokončení v prohlížeči a odpověď `Pokračovat`, poté ověř autorizaci a vytvoř úlohu.
```

Náhradní postup přes CLI:

```bash
codex plugin marketplace add BizSidekick-AI/bizsidekick --ref main
codex plugin add bizsidekick@bizsidekick
codex mcp login bizsidekick
```

## Claude Code

Vložte následující text do relace Claude Code:

```text
Použij nativní tržiště pluginů Claude Code, přidej `BizSidekick-AI/bizsidekick` a nainstaluj `bizsidekick@bizsidekick`, jen pokud je to potřeba. Neotevírej ani nečti repozitář v prohlížeči. Zachovej mé stávající přihlášení a po nové instalaci spusť `/reload-plugins` právě jednou. Pokud autorizace proběhne bez nastavení účtu, pokračuj v této relaci a automaticky spusť úlohu BizSidekick pouze pro čtení, která zobrazí mé obchody a nejnovější produkty. Pokud je nutné přihlášení, registrace nebo onboarding BizSidekick, ponech tuto relaci otevřenou, požádej mě o dokončení v prohlížeči a odpověď `Pokračovat`, poté ověř autorizaci a spusť úlohu.
```

Náhradní postup přes CLI:

```bash
claude plugin marketplace add BizSidekick-AI/bizsidekick
claude plugin install bizsidekick@bizsidekick --scope user
```

## WorkBuddy pro počítače

Vložte následující text do konverzace v aplikaci WorkBuddy:

```text
Použij nativní tržiště pluginů WorkBuddy, přidej `BizSidekick-AI/bizsidekick` a nainstaluj `bizsidekick@bizsidekick`, jen pokud je to potřeba. Neotevírej ani nečti repozitář v prohlížeči. Zachovej mé stávající přihlášení a po nové instalaci spusť `/reload-plugins` právě jednou. Pokud autorizace proběhne bez nastavení účtu, pokračuj v této konverzaci a automaticky spusť úlohu BizSidekick pouze pro čtení, která zobrazí mé obchody a nejnovější produkty. Pokud je nutné přihlášení, registrace nebo onboarding BizSidekick, ponech tuto konverzaci otevřenou, požádej mě o dokončení v prohlížeči a odpověď `Pokračovat`, poté ověř autorizaci a spusť úlohu.
```

Náhradní postup přes CLI:

```bash
codebuddy plugin marketplace add https://github.com/BizSidekick-AI/bizsidekick.git --name bizsidekick
codebuddy plugin install bizsidekick@bizsidekick --scope user
```

## Model zabezpečení

- Přihlášení Google/Bustly probíhá v prohlížeči přes OAuth; pracovní prostor se vybírá v obchodní úloze.
- Uživatelské oprávnění OAuth je omezeno aktuálním členstvím v Bustly; úloha je vázána právě na jeden pracovní prostor.
- Čtení bez určení obchodu zahrnuje všechna aktivní a dostupná připojení v daném pracovním prostoru a nevyžaduje potvrzení.
- Změny se nejprve zobrazí jako náhled a provedou se až po výslovném schválení.
- Vysoce rizikové operace vyžadují zadání potvrzovacího textu.
- Přihlašovací údaje poskytovatelů se nikdy nepřenášejí do klienta MCP ani do tohoto repozitáře.
- Skills pluginu a popisy nástrojů MCP jsou veřejné integrační materiály, nikoli bezpečnostní hranice.
