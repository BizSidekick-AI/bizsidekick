# BizSidekick

[Toutes les langues prises en charge](README.md) · [English](../../README.md)

Place de marché publique du plugin BizSidekick pour Codex et Claude. Le plugin se connecte au service
MCP Bustly hébergé à l'adresse `https://mcp.bustly.ai/mcp` ; ce dépôt ne contient aucun identifiant
de fournisseur, aucune donnée marchande, aucun code source du service MCP et aucun secret de déploiement.

## Codex pour ordinateur

Collez le texte suivant dans une tâche Codex pour ordinateur :

```text
Utilise la marketplace personnalisée de plugins de Codex pour ajouter `BizSidekick-AI/bizsidekick` et installe BizSidekick uniquement si nécessaire. N'ouvre pas et ne lis pas le dépôt dans un navigateur. Réutilise ma connexion existante. Si l'autorisation se termine sans configuration de compte, vérifie la connexion, puis crée et ouvre automatiquement une seule nouvelle tâche BizSidekick affichant mes boutiques et leurs produits récents. Si une connexion, une inscription ou l'onboarding BizSidekick est nécessaire, garde cette tâche d'installation ouverte, demande-moi de terminer dans le navigateur et de répondre `Continuer`, puis vérifie l'autorisation et crée la tâche.
```

Solution de repli avec la CLI :

```bash
codex plugin marketplace add BizSidekick-AI/bizsidekick --ref main
codex plugin add bizsidekick@bizsidekick
codex mcp login bizsidekick
```

## Claude Code

Collez le texte suivant dans une session Claude Code :

```text
Utilise la marketplace personnalisée de plugins de Claude Code pour ajouter `BizSidekick-AI/bizsidekick` et installe `bizsidekick@bizsidekick` uniquement si nécessaire. N'ouvre pas et ne lis pas le dépôt dans un navigateur. Conserve ma connexion existante et exécute `/reload-plugins` une seule fois après une nouvelle installation. Si l'autorisation se termine sans configuration de compte, continue dans cette session et démarre automatiquement une tâche BizSidekick en lecture seule affichant mes boutiques et leurs produits récents. Si une connexion, une inscription ou l'onboarding BizSidekick est nécessaire, garde cette session ouverte, demande-moi de terminer dans le navigateur et de répondre `Continuer`, puis vérifie l'autorisation et démarre la tâche.
```

Solution de repli avec la CLI :

```bash
claude plugin marketplace add BizSidekick-AI/bizsidekick
claude plugin install bizsidekick@bizsidekick --scope user
```

## WorkBuddy pour ordinateur

Collez le texte suivant dans une conversation WorkBuddy :

```text
Utilise la marketplace personnalisée de plugins de WorkBuddy pour ajouter `BizSidekick-AI/bizsidekick` et installe `bizsidekick@bizsidekick` uniquement si nécessaire. N'ouvre pas et ne lis pas le dépôt dans un navigateur. Conserve ma connexion existante et exécute `/reload-plugins` une seule fois après une nouvelle installation. Si l'autorisation se termine sans configuration de compte, continue dans cette conversation et démarre automatiquement une tâche BizSidekick en lecture seule affichant mes boutiques et leurs produits récents. Si une connexion, une inscription ou l'onboarding BizSidekick est nécessaire, garde cette conversation ouverte, demande-moi de terminer dans le navigateur et de répondre `Continuer`, puis vérifie l'autorisation et démarre la tâche.
```

Solution de repli avec la CLI :

```bash
codebuddy plugin marketplace add https://github.com/BizSidekick-AI/bizsidekick.git --name bizsidekick
codebuddy plugin install bizsidekick@bizsidekick --scope user
```

## Modèle de sécurité

- La connexion Google/Bustly s'effectue dans le navigateur via OAuth. La sélection de l'espace de travail s'effectue dans la tâche métier.
- Une autorisation OAuth limitée à l'utilisateur est restreinte par son appartenance actuelle à Bustly ; une tâche est liée à un seul espace de travail.
- Une lecture sans boutique spécifiée couvre toutes les connexions actives et accessibles de cet espace de travail et ne nécessite aucune confirmation.
- Les modifications affichent d'abord un aperçu et ne sont appliquées qu'après une approbation explicite.
- Les opérations à haut risque nécessitent la saisie d'une confirmation.
- Les identifiants des fournisseurs ne sont jamais transmis au client MCP ni stockés dans ce dépôt.
- Les Skills du plugin et les descriptions des outils MCP sont des ressources d'intégration publiques, et non une barrière de sécurité ; ils décrivent uniquement le comportement du produit et ne contiennent ni prompt système de l'application pour ordinateur, ni données marchandes, ni identifiants.
