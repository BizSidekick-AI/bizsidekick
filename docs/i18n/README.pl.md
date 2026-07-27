# BizSidekick

[Wszystkie obsługiwane języki](README.md) · [English](../../README.md)

Publiczny marketplace pluginu BizSidekick dla Codex, Claude i WorkBuddy. Plugin łączy się z hostowaną
usługą Bustly MCP pod adresem `https://mcp.bustly.ai/mcp`. To repozytorium nie zawiera danych logowania
dostawców, danych sprzedawców, kodu źródłowego usługi MCP ani sekretów wdrożeniowych.

## Codex na komputer

Wklej poniższy tekst do zadania Codex:

```text
Użyj niestandardowego marketplace pluginów Codex, aby dodać `BizSidekick-AI/bizsidekick`, i zainstaluj BizSidekick tylko wtedy, gdy jest potrzebny. Nie otwieraj ani nie czytaj repozytorium w przeglądarce. Użyj mojego istniejącego logowania. Jeśli autoryzacja zakończy się bez konfiguracji konta, sprawdź połączenie i automatycznie utwórz oraz otwórz dokładnie jedno nowe zadanie BizSidekick pokazujące moje sklepy i ostatnie produkty. Jeśli wymagane jest logowanie, rejestracja lub onboarding BizSidekick, pozostaw to zadanie instalacyjne otwarte, poproś mnie o dokończenie w przeglądarce i odpowiedź `Kontynuuj`, następnie sprawdź autoryzację i utwórz zadanie.
```

Alternatywa przez CLI:

```bash
codex plugin marketplace add BizSidekick-AI/bizsidekick --ref main
codex plugin add bizsidekick@bizsidekick
codex mcp login bizsidekick
```

## Claude Code

Wklej poniższy tekst do sesji Claude Code:

```text
Użyj niestandardowego marketplace pluginów Claude Code, aby dodać `BizSidekick-AI/bizsidekick`, i zainstaluj `bizsidekick@bizsidekick` tylko wtedy, gdy jest potrzebny. Nie otwieraj ani nie czytaj repozytorium w przeglądarce. Zachowaj moje istniejące logowanie i po nowej instalacji uruchom `/reload-plugins` dokładnie raz. Jeśli autoryzacja zakończy się bez konfiguracji konta, kontynuuj w tej sesji i automatycznie uruchom zadanie BizSidekick tylko do odczytu, pokazujące moje sklepy i ostatnie produkty. Jeśli wymagane jest logowanie, rejestracja lub onboarding BizSidekick, pozostaw tę sesję otwartą, poproś mnie o dokończenie w przeglądarce i odpowiedź `Kontynuuj`, następnie sprawdź autoryzację i uruchom zadanie.
```

Alternatywa przez CLI:

```bash
claude plugin marketplace add BizSidekick-AI/bizsidekick
claude plugin install bizsidekick@bizsidekick --scope user
```

## WorkBuddy na komputer

Wklej poniższy tekst do rozmowy WorkBuddy:

```text
Użyj niestandardowego marketplace pluginów WorkBuddy, aby dodać `BizSidekick-AI/bizsidekick`, i zainstaluj `bizsidekick@bizsidekick` tylko wtedy, gdy jest potrzebny. Nie otwieraj ani nie czytaj repozytorium w przeglądarce. Zachowaj moje istniejące logowanie i po nowej instalacji uruchom `/reload-plugins` dokładnie raz. Jeśli autoryzacja zakończy się bez konfiguracji konta, kontynuuj w tej rozmowie i automatycznie uruchom zadanie BizSidekick tylko do odczytu, pokazujące moje sklepy i ostatnie produkty. Jeśli wymagane jest logowanie, rejestracja lub onboarding BizSidekick, pozostaw tę rozmowę otwartą, poproś mnie o dokończenie w przeglądarce i odpowiedź `Kontynuuj`, następnie sprawdź autoryzację i uruchom zadanie.
```

Alternatywa przez CLI:

```bash
codebuddy plugin marketplace add https://github.com/BizSidekick-AI/bizsidekick.git --name bizsidekick
codebuddy plugin install bizsidekick@bizsidekick --scope user
```

## Model bezpieczeństwa

- Logowanie Google/Bustly odbywa się w przeglądarce przez OAuth; obszar roboczy wybiera się w zadaniu biznesowym.
- Uprawnienie OAuth użytkownika jest ograniczone jego aktualnym członkostwem w Bustly; zadanie jest powiązane dokładnie z jednym obszarem roboczym.
- Odczyt bez wskazania sklepu obejmuje wszystkie aktywne, dostępne połączenia w tym obszarze i nie wymaga potwierdzenia.
- Zmiany są najpierw prezentowane jako podgląd i stosowane dopiero po wyraźnej akceptacji.
- Operacje wysokiego ryzyka wymagają wpisania potwierdzenia.
- Dane logowania dostawców nigdy nie trafiają do klienta MCP ani do tego repozytorium.
- Skills pluginu i opisy narzędzi MCP są publicznymi materiałami integracyjnymi, a nie granicą bezpieczeństwa.
