# BizSidekick

[Tutte le lingue supportate](README.md) · [English](../../README.md)

Marketplace pubblico del plugin BizSidekick per Codex e Claude. Il plugin si connette al servizio
MCP Bustly ospitato all'indirizzo `https://mcp.bustly.ai/mcp`; questo repository non contiene
credenziali dei provider, dati dei commercianti, codice sorgente del servizio MCP o segreti di distribuzione.

## Codex desktop

Incolla il testo seguente in un'attività di Codex desktop:

```text
Usa il marketplace personalizzato dei plugin di Codex per aggiungere `BizSidekick-AI/bizsidekick` e installa BizSidekick solo se necessario. Non aprire né leggere il repository in un browser. Riutilizza il mio accesso esistente. Se l'autorizzazione si completa senza configurare un account, verifica la connessione e crea e apri automaticamente una sola nuova attività BizSidekick che mostri i miei negozi e i prodotti recenti. Se sono necessari accesso, registrazione o onboarding di BizSidekick, mantieni aperta questa attività di installazione, chiedimi di completare la procedura nel browser e rispondere `Continua`, quindi verifica l'autorizzazione e crea l'attività.
```

Alternativa tramite CLI:

```bash
codex plugin marketplace add BizSidekick-AI/bizsidekick --ref main
codex plugin add bizsidekick@bizsidekick
codex mcp login bizsidekick
```

## Claude Code

Incolla il testo seguente in una sessione di Claude Code:

```text
Usa il marketplace personalizzato dei plugin di Claude Code per aggiungere `BizSidekick-AI/bizsidekick` e installa `bizsidekick@bizsidekick` solo se necessario. Non aprire né leggere il repository in un browser. Mantieni il mio accesso esistente ed esegui `/reload-plugins` una sola volta dopo una nuova installazione. Se l'autorizzazione si completa senza configurare un account, continua in questa sessione e avvia automaticamente un'attività BizSidekick in sola lettura che mostri i miei negozi e i prodotti recenti. Se sono necessari accesso, registrazione o onboarding di BizSidekick, mantieni aperta questa sessione, chiedimi di completare la procedura nel browser e rispondere `Continua`, quindi verifica l'autorizzazione e avvia l'attività.
```

Alternativa tramite CLI:

```bash
claude plugin marketplace add BizSidekick-AI/bizsidekick
claude plugin install bizsidekick@bizsidekick --scope user
```

## WorkBuddy desktop

Incolla il testo seguente in una conversazione di WorkBuddy:

```text
Usa il marketplace personalizzato dei plugin di WorkBuddy per aggiungere `BizSidekick-AI/bizsidekick` e installa `bizsidekick@bizsidekick` solo se necessario. Non aprire né leggere il repository in un browser. Mantieni il mio accesso esistente ed esegui `/reload-plugins` una sola volta dopo una nuova installazione. Se l'autorizzazione si completa senza configurare un account, continua in questa conversazione e avvia automaticamente un'attività BizSidekick in sola lettura che mostri i miei negozi e i prodotti recenti. Se sono necessari accesso, registrazione o onboarding di BizSidekick, mantieni aperta questa conversazione, chiedimi di completare la procedura nel browser e rispondere `Continua`, quindi verifica l'autorizzazione e avvia l'attività.
```

Alternativa tramite CLI:

```bash
codebuddy plugin marketplace add https://github.com/BizSidekick-AI/bizsidekick.git --name bizsidekick
codebuddy plugin install bizsidekick@bizsidekick --scope user
```

## Modello di sicurezza

- L'accesso a Google/Bustly avviene nel browser tramite OAuth. La selezione dell'area di lavoro avviene all'interno dell'attività aziendale.
- Un'autorizzazione OAuth con ambito utente è limitata dall'attuale appartenenza a Bustly; ogni attività è associata a una sola area di lavoro.
- Una lettura senza un negozio specificato include tutte le connessioni attive e accessibili in quell'area di lavoro e non richiede conferma.
- Le modifiche mostrano prima un'anteprima e vengono applicate solo dopo un'approvazione esplicita.
- Le operazioni ad alto rischio richiedono l'inserimento di una conferma.
- Le credenziali dei provider non vengono mai trasmesse al client MCP né archiviate in questo repository.
- Le Skills del plugin e le descrizioni degli strumenti MCP sono artefatti pubblici di integrazione, non un confine di sicurezza; contengono solo il comportamento del prodotto e non includono prompt di sistema dell'app desktop, dati dei commercianti o credenziali.
