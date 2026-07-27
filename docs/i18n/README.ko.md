# BizSidekick

[지원 언어 전체 보기](README.md) · [English](../../README.md)

Codex와 Claude에서 BizSidekick를 사용하기 위한 공개 플러그인 마켓플레이스입니다. 이 플러그인은
`https://mcp.bustly.ai/mcp`에서 호스팅되는 Bustly MCP 서비스에 연결됩니다. 이 저장소에는
공급자 자격 증명, 판매자 데이터, MCP 서비스 소스 코드 또는 배포 비밀이 포함되어 있지 않습니다.

## Codex 데스크톱

다음 내용을 Codex 데스크톱 작업에 붙여 넣으세요.

```text
Codex의 사용자 지정 플러그인 마켓플레이스에서 `BizSidekick-AI/bizsidekick`을 추가하고 필요한 경우에만 BizSidekick을 설치해 주세요. 브라우저에서 저장소를 열거나 읽지 마세요. 기존 로그인을 재사용해 주세요. 계정 설정 없이 인증이 완료되면 연결을 확인하고, 내 스토어와 최근 상품을 보여 주는 새 BizSidekick 작업을 하나만 자동으로 만들고 열어 주세요. 로그인, 가입 또는 BizSidekick 온보딩이 필요하면 이 설치 작업을 열린 상태로 유지하고, 브라우저에서 완료한 뒤 `계속`이라고 답하도록 안내한 다음 인증을 확인하고 작업을 만들어 주세요.
```

CLI 대체 방법:

```bash
codex plugin marketplace add BizSidekick-AI/bizsidekick --ref main
codex plugin add bizsidekick@bizsidekick
codex mcp login bizsidekick
```

## Claude Code

다음 내용을 Claude Code 세션에 붙여 넣으세요.

```text
Claude Code의 사용자 지정 플러그인 마켓플레이스에서 `BizSidekick-AI/bizsidekick`을 추가하고 필요한 경우에만 `bizsidekick@bizsidekick`을 설치해 주세요. 브라우저에서 저장소를 열거나 읽지 마세요. 기존 로그인을 유지하고 새로 설치한 뒤 `/reload-plugins`를 정확히 한 번 실행해 주세요. 계정 설정 없이 인증이 완료되면 이 세션에서 계속 진행하여 내 스토어와 최근 상품을 보여 주는 읽기 전용 BizSidekick 작업을 자동으로 시작해 주세요. 로그인, 가입 또는 BizSidekick 온보딩이 필요하면 이 세션을 열린 상태로 유지하고, 브라우저에서 완료한 뒤 `계속`이라고 답하도록 안내한 다음 인증을 확인하고 작업을 시작해 주세요.
```

CLI 대체 방법:

```bash
claude plugin marketplace add BizSidekick-AI/bizsidekick
claude plugin install bizsidekick@bizsidekick --scope user
```

## WorkBuddy 데스크톱

다음 내용을 WorkBuddy 대화에 붙여 넣으세요.

```text
WorkBuddy의 사용자 지정 플러그인 마켓플레이스에서 `BizSidekick-AI/bizsidekick`을 추가하고 필요한 경우에만 `bizsidekick@bizsidekick`을 설치해 주세요. 브라우저에서 저장소를 열거나 읽지 마세요. 기존 로그인을 유지하고 새로 설치한 뒤 `/reload-plugins`를 정확히 한 번 실행해 주세요. 계정 설정 없이 인증이 완료되면 이 대화에서 계속 진행하여 내 스토어와 최근 상품을 보여 주는 읽기 전용 BizSidekick 작업을 자동으로 시작해 주세요. 로그인, 가입 또는 BizSidekick 온보딩이 필요하면 이 대화를 열린 상태로 유지하고, 브라우저에서 완료한 뒤 `계속`이라고 답하도록 안내한 다음 인증을 확인하고 작업을 시작해 주세요.
```

CLI 대체 방법:

```bash
codebuddy plugin marketplace add https://github.com/BizSidekick-AI/bizsidekick.git --name bizsidekick
codebuddy plugin install bizsidekick@bizsidekick --scope user
```

## 보안 모델

- Google/Bustly 로그인은 브라우저 OAuth를 통해 진행됩니다. 워크스페이스는 비즈니스 작업 안에서 선택합니다.
- 사용자 범위 OAuth 권한은 현재 Bustly 멤버십에 따라 제한되며, 하나의 작업은 정확히 하나의 워크스페이스에 연결됩니다.
- 스토어 범위를 지정하지 않은 읽기 작업은 해당 워크스페이스에서 활성 상태이며 액세스 가능한 모든 연결을 대상으로 하며 확인이 필요하지 않습니다.
- 변경 작업은 먼저 미리 보기를 제공하며 명시적으로 승인한 후에만 적용됩니다.
- 고위험 작업에는 지정된 확인 문구를 직접 입력해야 합니다.
- 공급자 자격 증명은 MCP 클라이언트나 이 저장소에 절대 전달되지 않습니다.
- 플러그인 Skills와 MCP 도구 설명은 공개된 통합 자료이며 보안 경계가 아닙니다. 제품 동작만 포함하며 데스크톱 시스템 프롬프트, 판매자 데이터 또는 자격 증명은 포함하지 않습니다.
