# BizSidekick supported languages

[← English README](../../README.md)

BizSidekick publishes localized installation documentation for the intersection of the languages
supported by the ChatGPT interface and Shopify admin. This is deliberately narrower than all
languages that an OpenAI model can understand or that a Shopify storefront can publish.

The list was last verified on **2026-07-22** against the official
[OpenAI language settings](https://help.openai.com/en/articles/8357869-how-to-change-your-language-setting-in-chatgpt%3F.class)
and [Shopify account language](https://help.shopify.com/en/manual/your-account/languages) pages.
English is the default locale. OpenAI's generic Chinese and Portuguese entries are expanded to
Shopify's supported regional variants.

| Locale | Language | Documentation |
| --- | --- | --- |
| `en` | English | [English](../../README.md) |
| `zh-CN` | Chinese (Simplified) | [简体中文](README.zh-CN.md) |
| `zh-TW` | Chinese (Traditional) | [繁體中文](README.zh-TW.md) |
| `cs` | Czech | [Čeština](README.cs.md) |
| `da` | Danish | [Dansk](README.da.md) |
| `nl` | Dutch | [Nederlands](README.nl.md) |
| `fi` | Finnish | [Suomi](README.fi.md) |
| `fr` | French | [Français](README.fr.md) |
| `de` | German | [Deutsch](README.de.md) |
| `it` | Italian | [Italiano](README.it.md) |
| `ja` | Japanese | [日本語](README.ja.md) |
| `ko` | Korean | [한국어](README.ko.md) |
| `nb` | Norwegian (Bokmål) | [Norsk bokmål](README.nb.md) |
| `pl` | Polish | [Polski](README.pl.md) |
| `pt-BR` | Portuguese (Brazil) | [Português (Brasil)](README.pt-BR.md) |
| `pt-PT` | Portuguese (Portugal) | [Português (Portugal)](README.pt-PT.md) |
| `es` | Spanish | [Español](README.es.md) |
| `sv` | Swedish | [Svenska](README.sv.md) |
| `th` | Thai | [ไทย](README.th.md) |
| `tr` | Turkish | [Türkçe](README.tr.md) |

`locales.json` is the machine-readable source of truth. The package validator rejects missing,
extra, or incorrectly linked locale files.
