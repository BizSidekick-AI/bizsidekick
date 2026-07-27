# BizSidekick

[Todos os idiomas suportados](README.md) · [English](../../README.md)

Marketplace público do plugin BizSidekick para utilização com Codex, Claude e WorkBuddy. O plugin
liga-se ao serviço Bustly MCP alojado em `https://mcp.bustly.ai/mcp`; este repositório não contém
credenciais de fornecedores, dados de comerciantes, código-fonte do serviço MCP nem segredos de implementação.

## Codex para computador

Cole o texto seguinte numa tarefa do Codex:

```text
Usa o marketplace personalizado de plugins do Codex para adicionar `BizSidekick-AI/bizsidekick` e instala o BizSidekick apenas se necessário. Não abras nem leias o repositório num navegador. Reutiliza a minha sessão existente. Se a autorização terminar sem configuração de conta, verifica a ligação e cria e abre automaticamente uma única nova tarefa do BizSidekick que mostre as minhas lojas e os produtos recentes. Se for necessário iniciar sessão, registar ou concluir o onboarding do BizSidekick, mantém esta tarefa de instalação aberta, pede-me para terminar no navegador e responder `Continuar`, depois verifica a autorização e cria a tarefa.
```

Alternativa através da CLI:

```bash
codex plugin marketplace add BizSidekick-AI/bizsidekick --ref main
codex plugin add bizsidekick@bizsidekick
codex mcp login bizsidekick
```

## Claude Code

Cola o texto seguinte numa sessão do Claude Code:

```text
Usa o marketplace personalizado de plugins do Claude Code para adicionar `BizSidekick-AI/bizsidekick` e instala `bizsidekick@bizsidekick` apenas se necessário. Não abras nem leias o repositório num navegador. Mantém a minha sessão existente e executa `/reload-plugins` exatamente uma vez após uma nova instalação. Se a autorização terminar sem configuração de conta, continua nesta sessão e inicia automaticamente uma tarefa BizSidekick só de leitura que mostre as minhas lojas e os produtos recentes. Se for necessário iniciar sessão, registar ou concluir o onboarding do BizSidekick, mantém esta sessão aberta, pede-me para terminar no navegador e responder `Continuar`, depois verifica a autorização e inicia a tarefa.
```

Alternativa através da CLI:

```bash
claude plugin marketplace add BizSidekick-AI/bizsidekick
claude plugin install bizsidekick@bizsidekick --scope user
```

## WorkBuddy para computador

Cola o texto seguinte numa conversa do WorkBuddy:

```text
Usa o marketplace personalizado de plugins do WorkBuddy para adicionar `BizSidekick-AI/bizsidekick` e instala `bizsidekick@bizsidekick` apenas se necessário. Não abras nem leias o repositório num navegador. Mantém a minha sessão existente e executa `/reload-plugins` exatamente uma vez após uma nova instalação. Se a autorização terminar sem configuração de conta, continua nesta conversa e inicia automaticamente uma tarefa BizSidekick só de leitura que mostre as minhas lojas e os produtos recentes. Se for necessário iniciar sessão, registar ou concluir o onboarding do BizSidekick, mantém esta conversa aberta, pede-me para terminar no navegador e responder `Continuar`, depois verifica a autorização e inicia a tarefa.
```

Alternativa através da CLI:

```bash
codebuddy plugin marketplace add https://github.com/BizSidekick-AI/bizsidekick.git --name bizsidekick
codebuddy plugin install bizsidekick@bizsidekick --scope user
```

## Modelo de segurança

- O início de sessão Google/Bustly ocorre no navegador através de OAuth; o espaço de trabalho é escolhido na tarefa empresarial.
- Uma autorização OAuth de utilizador é limitada pela associação atual à Bustly; uma tarefa fica ligada a exatamente um espaço de trabalho.
- Uma leitura sem loja especificada abrange todas as ligações ativas e acessíveis nesse espaço e não requer confirmação.
- As alterações são primeiro apresentadas numa pré-visualização e só são aplicadas após aprovação explícita.
- As operações de alto risco exigem uma confirmação escrita.
- As credenciais dos fornecedores nunca são enviadas para o cliente MCP nem guardadas neste repositório.
- As Skills do plugin e as descrições das ferramentas MCP são artefactos públicos de integração, não uma barreira de segurança.
