#!/usr/bin/env node

import { lstatSync, readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, relative, resolve, sep } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pluginRoot = join(root, "plugins", "bustly");

const expectedPluginFiles = [
  ".claude-plugin/plugin.json",
  ".codebuddy-plugin/plugin.json",
  ".codex-plugin/plugin.json",
  ".mcp.json",
  "assets/bizsidekick-icon.svg",
  "skills/bustly-commerce-operator/SKILL.md",
  "skills/bustly-onboarding/SKILL.md",
  "skills/bustly-product-voice/SKILL.md",
];

const marketplaceFiles = [
  ".agents/plugins/marketplace.json",
  ".claude-plugin/marketplace.json",
  ".codebuddy-plugin/marketplace.json",
];

const expectedLocaleCodes = [
  "en",
  "zh-CN",
  "zh-TW",
  "cs",
  "da",
  "nl",
  "fi",
  "fr",
  "de",
  "it",
  "ja",
  "ko",
  "nb",
  "pl",
  "pt-BR",
  "pt-PT",
  "es",
  "sv",
  "th",
  "tr",
];

const marketplaceWordingByLocale = {
  en: { current: "custom plugin marketplace", legacy: "native plugin marketplace" },
  "zh-CN": { current: "自定义插件市场", legacy: "原生插件市场" },
  "zh-TW": { current: "自訂外掛市集", legacy: "原生外掛市集" },
  cs: { current: "vlastní tržiště pluginů", legacy: "nativní tržiště pluginů" },
  da: {
    current: "brugerdefinerede plugin-markedsplads",
    legacy: "indbyggede plugin-markedsplads",
  },
  nl: { current: "aangepaste pluginmarktplaats", legacy: "ingebouwde pluginmarktplaats" },
  fi: {
    current: "mukautetusta plugin-markkinapaikasta",
    legacy: "omasta plugin-markkinapaikasta",
  },
  fr: {
    current: "marketplace personnalisée de plugins",
    legacy: "marketplace native de plugins",
  },
  de: {
    current: "benutzerdefinierten Plugin-Marktplatz",
    legacy: "nativen Plugin-Marktplatz",
  },
  it: {
    current: "marketplace personalizzato dei plugin",
    legacy: "marketplace nativo dei plugin",
  },
  ja: {
    current: "カスタムプラグインマーケットプレイス",
    legacy: "ネイティブプラグインマーケットプレイス",
  },
  ko: {
    current: "사용자 지정 플러그인 마켓플레이스",
    legacy: "기본 플러그인 마켓플레이스",
  },
  nb: {
    current: "egendefinerte plugin-markedsplass",
    legacy: "innebygde plugin-markedsplass",
  },
  pl: {
    current: "niestandardowego marketplace pluginów",
    legacy: "natywnego marketplace pluginów",
  },
  "pt-BR": {
    current: "marketplace personalizado de plugins",
    legacy: "marketplace nativo de plugins",
  },
  "pt-PT": {
    current: "marketplace personalizado de plugins",
    legacy: "marketplace nativo de plugins",
  },
  es: {
    current: "marketplace personalizado de plugins",
    legacy: "marketplace nativo de plugins",
  },
  sv: {
    current: "anpassade plugin-marknadsplats",
    legacy: "inbyggda plugin-marknadsplats",
  },
  th: {
    current: "marketplace ปลั๊กอินแบบกำหนดเอง",
    legacy: "marketplace ปลั๊กอินแบบเนทีฟ",
  },
  tr: { current: "özel eklenti pazarını", legacy: "yerel eklenti pazarını" },
};

const openAiLanguageSource =
  "https://help.openai.com/en/articles/8357869-how-to-change-your-language-setting-in-chatgpt%3F.class";
const shopifyLanguageSource = "https://help.shopify.com/en/manual/your-account/languages";

function fail(message) {
  throw new Error(message);
}

function readJson(path) {
  try {
    return JSON.parse(readFileSync(join(root, path), "utf8"));
  } catch (error) {
    fail(`${path} is not valid JSON: ${error.message}`);
  }
}

function walkFiles(directory) {
  const files = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    const stat = lstatSync(path);
    if (stat.isSymbolicLink()) {
      fail(`symbolic links are not allowed in the public plugin package: ${relative(root, path)}`);
    }
    if (stat.isDirectory()) {
      files.push(...walkFiles(path));
    } else if (stat.isFile()) {
      files.push(relative(pluginRoot, path).split(sep).join("/"));
    } else {
      fail(`unsupported file type in public plugin package: ${relative(root, path)}`);
    }
  }
  return files.sort();
}

function assertEqual(actual, expected, label) {
  if (actual !== expected) {
    fail(`${label} must be ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
}

const actualPluginFiles = walkFiles(pluginRoot);
assertEqual(
  JSON.stringify(actualPluginFiles),
  JSON.stringify([...expectedPluginFiles].sort()),
  "public plugin file inventory",
);

const codex = readJson("plugins/bustly/.codex-plugin/plugin.json");
const claude = readJson("plugins/bustly/.claude-plugin/plugin.json");
const workbuddy = readJson("plugins/bustly/.codebuddy-plugin/plugin.json");
const mcp = readJson("plugins/bustly/.mcp.json");
const agentsMarketplace = readJson(".agents/plugins/marketplace.json");
const claudeMarketplace = readJson(".claude-plugin/marketplace.json");
const workbuddyMarketplace = readJson(".codebuddy-plugin/marketplace.json");
const localeRegistry = readJson("docs/i18n/locales.json");

if (!/^\d+\.\d+\.\d+$/.test(codex.version)) {
  fail(`Codex plugin version must be stable semver, got ${JSON.stringify(codex.version)}`);
}

for (const field of ["name", "version", "description", "homepage", "skills", "mcpServers"]) {
  assertEqual(claude[field], codex[field], `Claude and Codex ${field}`);
}

for (const field of ["name", "version", "description", "homepage", "mcpServers"]) {
  assertEqual(workbuddy[field], codex[field], `WorkBuddy and Codex ${field}`);
}

assertEqual(
  JSON.stringify(workbuddy.skills),
  JSON.stringify([
    "./skills/bustly-commerce-operator",
    "./skills/bustly-onboarding",
    "./skills/bustly-product-voice",
  ]),
  "WorkBuddy Skill paths",
);

assertEqual(mcp?.mcpServers?.bizsidekick?.type, "http", "BizSidekick MCP transport");
assertEqual(mcp?.mcpServers?.bizsidekick?.url, "https://mcp.bustly.ai/mcp", "BizSidekick MCP URL");
assertEqual(agentsMarketplace?.name, "bizsidekick", "Codex marketplace name");
assertEqual(agentsMarketplace?.plugins?.[0]?.name, "bizsidekick", "Codex marketplace plugin name");
assertEqual(
  agentsMarketplace?.plugins?.[0]?.source?.path,
  "./plugins/bustly",
  "Codex marketplace plugin path",
);
assertEqual(claudeMarketplace?.name, "bizsidekick", "Claude marketplace name");
assertEqual(claudeMarketplace?.plugins?.[0]?.name, "bizsidekick", "Claude marketplace plugin name");
assertEqual(
  claudeMarketplace?.plugins?.[0]?.source,
  "./plugins/bustly",
  "Claude marketplace plugin path",
);
assertEqual(workbuddyMarketplace?.name, "bizsidekick", "WorkBuddy marketplace name");
assertEqual(workbuddyMarketplace?.plugins?.[0]?.name, "bizsidekick", "WorkBuddy marketplace plugin name");
assertEqual(
  workbuddyMarketplace?.plugins?.[0]?.source,
  "./plugins/bustly",
  "WorkBuddy marketplace plugin path",
);
assertEqual(
  workbuddyMarketplace?.plugins?.[0]?.version,
  codex.version,
  "WorkBuddy marketplace plugin version",
);

assertEqual(localeRegistry?.schemaVersion, 1, "locale registry schema version");
assertEqual(localeRegistry?.defaultLocale, "en", "default locale");
assertEqual(localeRegistry?.sources?.openai, openAiLanguageSource, "OpenAI language source");
assertEqual(localeRegistry?.sources?.shopify, shopifyLanguageSource, "Shopify language source");
assertEqual(
  JSON.stringify(localeRegistry?.locales?.map(({ code }) => code)),
  JSON.stringify(expectedLocaleCodes),
  "OpenAI and Shopify locale intersection",
);

const expectedLocalizedReadmes = localeRegistry.locales
  .filter(({ code }) => code !== localeRegistry.defaultLocale)
  .map(({ file }) => file)
  .sort();
const actualLocalizedReadmes = readdirSync(join(root, "docs", "i18n"))
  .filter((file) => /^README\..+\.md$/.test(file))
  .sort();
assertEqual(
  JSON.stringify(actualLocalizedReadmes),
  JSON.stringify(expectedLocalizedReadmes),
  "localized README inventory",
);

const localeIndex = readFileSync(join(root, "docs", "i18n", "README.md"), "utf8");
const rootReadme = readFileSync(join(root, "README.md"), "utf8");
if (!rootReadme.includes("[Languages / 语言](docs/i18n/README.md)")) {
  fail("README.md must link to the supported-language index");
}

for (const locale of localeRegistry.locales) {
  const relativePath = locale.code === localeRegistry.defaultLocale ? "README.md" : `docs/i18n/${locale.file}`;
  const content = readFileSync(join(root, relativePath), "utf8");
  const marketplaceWording = marketplaceWordingByLocale[locale.code];
  if (!content.startsWith("# BizSidekick\n")) {
    fail(`${relativePath} must use the BizSidekick title`);
  }
  if (!localeIndex.includes(`(${locale.file})`)) {
    fail(`language index must link locale ${locale.code} to ${locale.file}`);
  }
  for (const marker of [
    "BizSidekick-AI/bizsidekick",
    "bizsidekick@bizsidekick",
    "/reload-plugins",
    "claude plugin install bizsidekick@bizsidekick --scope user",
    "codebuddy plugin marketplace add https://github.com/BizSidekick-AI/bizsidekick.git --name bizsidekick",
  ]) {
    if (!content.includes(marker)) {
      fail(`${relativePath} must publish the current cross-client install marker ${JSON.stringify(marker)}`);
    }
  }
  assertEqual(
    content.split(marketplaceWording.current).length - 1,
    3,
    `${relativePath} custom marketplace wording count`,
  );
  if (content.includes(marketplaceWording.legacy)) {
    fail(`${relativePath} must not publish legacy native marketplace wording`);
  }
  if (/https:\/\/mcp\.bustly\.ai\/(?:chatgpt|workbuddy)\b/.test(content)) {
    fail(`${relativePath} must not route installation through the legacy hosted-guide prompt`);
  }
}

const expectedSkills = new Map([
  ["skills/bustly-commerce-operator/SKILL.md", "bustly-commerce-operator"],
  ["skills/bustly-onboarding/SKILL.md", "bustly-onboarding"],
  ["skills/bustly-product-voice/SKILL.md", "bustly-product-voice"],
]);

for (const [path, expectedName] of expectedSkills) {
  const content = readFileSync(join(pluginRoot, path), "utf8");
  const frontmatter = content.match(/^---\n([\s\S]+?)\n---\n/);
  if (!frontmatter) {
    fail(`${path} must start with YAML frontmatter`);
  }
  const name = frontmatter[1].match(/^name:\s*(.+)$/m)?.[1]?.trim();
  assertEqual(name, expectedName, `${path} skill name`);
}

const publishedFiles = [...marketplaceFiles, ...expectedPluginFiles.map((path) => `plugins/bustly/${path}`)];
const publishedText = publishedFiles
  .map((path) => `\n--- ${path} ---\n${readFileSync(join(root, path), "utf8")}`)
  .join("\n");

const forbiddenPatterns = [
  ["private key", /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/],
  ["AWS access key", /\bAKIA[0-9A-Z]{16}\b/],
  ["GitHub token", /\bgh[pousr]_[A-Za-z0-9]{30,}\b/],
  ["Slack token", /\bxox[baprs]-[A-Za-z0-9-]{10,}\b/],
  ["bearer token", /\bBearer\s+[A-Za-z0-9._~+/=-]{16,}\b/i],
  [
    "assigned secret",
    /\b(?:client_secret|api[_-]?key|access[_-]?token|password)\b\s*[:=]\s*["'][^"'\s$][^"']{7,}["']/i,
  ],
  ["non-production endpoint", /\b(?:localhost|127\.0\.0\.1|test-www\.|staging\.|\.internal\b)/i],
  ["infrastructure endpoint", /\b(?:amazonaws\.com|supabase\.co)\b/i],
  ["email address", /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i],
  ["UUID-like business identifier", /\b[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\b/i],
];

for (const [label, pattern] of forbiddenPatterns) {
  if (pattern.test(publishedText)) {
    fail(`public package contains a forbidden ${label}`);
  }
}

const allowedUrls = new Set(["https://bustly.ai", "https://mcp.bustly.ai/mcp"]);
for (const match of publishedText.matchAll(/https:\/\/[^\s"')\],]+/g)) {
  if (!allowedUrls.has(match[0])) {
    fail(`public package contains an unapproved URL: ${match[0]}`);
  }
}

console.log(
  `Validated BizSidekick public plugin ${codex.version}: ${expectedPluginFiles.length} plugin files, 3 Skills, 3 marketplaces, ${expectedLocaleCodes.length} locales.`,
);
