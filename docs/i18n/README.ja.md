# BizSidekick

[対応言語一覧](README.md) · [English](../../README.md)

BizSidekick を Codex と Claude から利用するための公開プラグインマーケットプレイスです。このプラグインは
`https://mcp.bizsidekick.app/mcp` でホストされている Bustly MCP サービスに接続します。このリポジトリには、
プロバイダーの認証情報、マーチャントデータ、MCP サービスのソースコード、デプロイ用シークレットは含まれていません。

## Codex デスクトップ

次のテキストを Codex デスクトップのタスクに貼り付けてください。

```text
Codex のカスタムプラグインマーケットプレイスで `BizSidekick-AI/bizsidekick` を追加し、必要な場合のみ BizSidekick をインストールしてください。ブラウザでリポジトリを開いたり読んだりしないでください。既存のログインを再利用してください。アカウント設定なしで認可が完了した場合は、接続を確認し、ストアと最近の商品を表示する新しい BizSidekick タスクを1つだけ自動で作成して開いてください。ログイン、登録、または BizSidekick のオンボーディングが必要な場合は、このインストールタスクを開いたままにし、ブラウザで完了してから `続行` と返信するよう案内し、その後で認可を確認してタスクを作成してください。
```

CLI を使う場合：

```bash
codex plugin marketplace add BizSidekick-AI/bizsidekick --ref main
codex plugin add bizsidekick@bizsidekick
codex mcp login bizsidekick
```

## Claude Code

次のテキストを Claude Code セッションに貼り付けてください。

```text
Claude Code のカスタムプラグインマーケットプレイスで `BizSidekick-AI/bizsidekick` を追加し、必要な場合のみ `bizsidekick@bizsidekick` をインストールしてください。ブラウザでリポジトリを開いたり読んだりしないでください。既存のログインを維持し、新規インストール後に `/reload-plugins` を1回だけ実行してください。アカウント設定なしで認可が完了した場合は、このセッションで続行し、ストアと最近の商品を表示する読み取り専用の BizSidekick タスクを自動で開始してください。ログイン、登録、または BizSidekick のオンボーディングが必要な場合は、このセッションを開いたままにし、ブラウザで完了してから `続行` と返信するよう案内し、その後で認可を確認してタスクを開始してください。
```

CLI を使う場合：

```bash
claude plugin marketplace add BizSidekick-AI/bizsidekick
claude plugin install bizsidekick@bizsidekick --scope user
```

## WorkBuddy デスクトップ

次のテキストを WorkBuddy の会話に貼り付けてください。

```text
WorkBuddy のカスタムプラグインマーケットプレイスで `BizSidekick-AI/bizsidekick` を追加し、必要な場合のみ `bizsidekick@bizsidekick` をインストールしてください。ブラウザでリポジトリを開いたり読んだりしないでください。既存のログインを維持し、新規インストール後に `/reload-plugins` を1回だけ実行してください。アカウント設定なしで認可が完了した場合は、この会話で続行し、ストアと最近の商品を表示する読み取り専用の BizSidekick タスクを自動で開始してください。ログイン、登録、または BizSidekick のオンボーディングが必要な場合は、この会話を開いたままにし、ブラウザで完了してから `続行` と返信するよう案内し、その後で認可を確認してタスクを開始してください。
```

CLI を使う場合：

```bash
codebuddy plugin marketplace add https://github.com/BizSidekick-AI/bizsidekick.git --name bizsidekick
codebuddy plugin install bizsidekick@bizsidekick --scope user
```

## セキュリティモデル

- Google/Bustly へのログインはブラウザの OAuth で行われます。ワークスペースはビジネスタスク内で選択します。
- ユーザー単位の OAuth 権限は、現在の Bustly メンバーシップによって制限されます。1 つのタスクが紐づくワークスペースは 1 つだけです。
- ストアを指定しない読み取りでは、そのワークスペース内で有効かつアクセス可能なすべての接続が対象となり、確認は不要です。
- 変更操作では最初にプレビューが表示され、明示的な承認後にのみ適用されます。
- 高リスクの操作では、指定された確認文字列の入力が必要です。
- プロバイダーの認証情報が MCP クライアントやこのリポジトリに渡ることはありません。
- プラグインの Skills と MCP ツールの説明は公開された連携用アーティファクトであり、セキュリティ境界ではありません。含まれるのは製品の動作のみで、デスクトップのシステムプロンプト、マーチャントデータ、認証情報は含まれません。
