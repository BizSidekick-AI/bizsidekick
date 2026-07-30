# BizSidekick

[Todos os idiomas compatíveis](README.md) · [English](../../README.md)

Marketplace público do plugin BizSidekick para uso com Codex e Claude. O plugin se conecta ao serviço
MCP da Bustly hospedado em `https://mcp.bizsidekick.app/mcp`; este repositório não contém credenciais de
provedores, dados de lojistas, código-fonte do serviço MCP nem segredos de implantação.

## Codex para desktop

Cole o texto abaixo em uma tarefa do Codex para desktop:

```text
Use o marketplace personalizado de plugins do Codex para adicionar `BizSidekick-AI/bizsidekick` e instale o BizSidekick somente se necessário. Não abra nem leia o repositório em um navegador. Reutilize meu login existente. Se a autorização for concluída sem configuração de conta, verifique a conexão e crie e abra automaticamente uma única nova tarefa do BizSidekick que mostre minhas lojas e produtos recentes. Se for necessário fazer login, registrar-se ou concluir o onboarding do BizSidekick, mantenha esta tarefa de instalação aberta, peça que eu termine no navegador e responda `Continuar`, depois verifique a autorização e crie a tarefa.
```

Alternativa pela CLI:

```bash
codex plugin marketplace add BizSidekick-AI/bizsidekick --ref main
codex plugin add bizsidekick@bizsidekick
codex mcp login bizsidekick
```

## Claude Code

Cole o texto abaixo em uma sessão do Claude Code:

```text
Use o marketplace personalizado de plugins do Claude Code para adicionar `BizSidekick-AI/bizsidekick` e instale `bizsidekick@bizsidekick` somente se necessário. Não abra nem leia o repositório em um navegador. Preserve meu login existente e execute `/reload-plugins` exatamente uma vez após uma nova instalação. Se a autorização for concluída sem configuração de conta, continue nesta sessão e inicie automaticamente uma tarefa somente leitura do BizSidekick que mostre minhas lojas e produtos recentes. Se for necessário fazer login, registrar-se ou concluir o onboarding do BizSidekick, mantenha esta sessão aberta, peça que eu termine no navegador e responda `Continuar`, depois verifique a autorização e inicie a tarefa.
```

Alternativa pela CLI:

```bash
claude plugin marketplace add BizSidekick-AI/bizsidekick
claude plugin install bizsidekick@bizsidekick --scope user
```

## WorkBuddy para desktop

Cole o texto abaixo em uma conversa do WorkBuddy:

```text
Use o marketplace personalizado de plugins do WorkBuddy para adicionar `BizSidekick-AI/bizsidekick` e instale `bizsidekick@bizsidekick` somente se necessário. Não abra nem leia o repositório em um navegador. Preserve meu login existente e execute `/reload-plugins` exatamente uma vez após uma nova instalação. Se a autorização for concluída sem configuração de conta, continue nesta conversa e inicie automaticamente uma tarefa somente leitura do BizSidekick que mostre minhas lojas e produtos recentes. Se for necessário fazer login, registrar-se ou concluir o onboarding do BizSidekick, mantenha esta conversa aberta, peça que eu termine no navegador e responda `Continuar`, depois verifique a autorização e inicie a tarefa.
```

Alternativa pela CLI:

```bash
codebuddy plugin marketplace add https://github.com/BizSidekick-AI/bizsidekick.git --name bizsidekick
codebuddy plugin install bizsidekick@bizsidekick --scope user
```

## Modelo de segurança

- O login do Google/Bustly acontece no navegador via OAuth. A seleção do espaço de trabalho acontece dentro da tarefa de negócio.
- Uma autorização OAuth com escopo de usuário é limitada pela associação atual do usuário à Bustly; cada tarefa é vinculada a exatamente um espaço de trabalho.
- Uma leitura sem loja especificada inclui todas as conexões ativas e acessíveis nesse espaço de trabalho e não requer confirmação.
- As alterações apresentam primeiro uma prévia e só são aplicadas após aprovação explícita.
- Operações de alto risco exigem uma confirmação digitada.
- As credenciais dos provedores nunca são enviadas ao cliente MCP nem armazenadas neste repositório.
- As Skills do plugin e as descrições das ferramentas MCP são artefatos públicos de integração, não uma barreira de segurança; elas contêm apenas o comportamento do produto, sem prompt de sistema do aplicativo para desktop, dados de lojistas ou credenciais.
