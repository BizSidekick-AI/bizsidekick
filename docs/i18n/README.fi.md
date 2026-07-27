# BizSidekick

[Kaikki tuetut kielet](README.md) · [English](../../README.md)

Julkinen plugin-markkinapaikka BizSidekickin käyttämiseen Codexissa, Claudessa ja WorkBuddyssa. Plugin
yhdistää osoitteessa `https://mcp.bustly.ai/mcp` ylläpidettyyn Bustly MCP -palveluun. Tämä repositorio
ei sisällä palveluntarjoajien tunnuksia, kauppiastietoja, MCP-palvelun lähdekoodia tai julkaisuavaimia.

## Codex työpöydälle

Liitä seuraava teksti Codex-tehtävään:

```text
Lisää `BizSidekick-AI/bizsidekick` Codexin mukautetusta plugin-markkinapaikasta ja asenna BizSidekick vain tarvittaessa. Älä avaa tai lue tietovarastoa selaimessa. Käytä olemassa olevaa kirjautumistani. Jos valtuutus valmistuu ilman tilin määritystä, tarkista yhteys ja luo ja avaa automaattisesti yksi uusi BizSidekick-tehtävä, joka näyttää kauppani ja uusimmat tuotteet. Jos kirjautuminen, rekisteröinti tai BizSidekick-onboarding on tarpeen, pidä tämä asennustehtävä avoinna, pyydä minua viimeistelemään selaimessa ja vastaamaan `Jatka`, tarkista sitten valtuutus ja luo tehtävä.
```

CLI-vaihtoehto:

```bash
codex plugin marketplace add BizSidekick-AI/bizsidekick --ref main
codex plugin add bizsidekick@bizsidekick
codex mcp login bizsidekick
```

## Claude Code

Liitä seuraava teksti Claude Code -istuntoon:

```text
Lisää `BizSidekick-AI/bizsidekick` Claude Coden mukautetusta plugin-markkinapaikasta ja asenna `bizsidekick@bizsidekick` vain tarvittaessa. Älä avaa tai lue tietovarastoa selaimessa. Säilytä olemassa oleva kirjautumiseni ja suorita `/reload-plugins` täsmälleen kerran uuden asennuksen jälkeen. Jos valtuutus valmistuu ilman tilin määritystä, jatka tässä istunnossa ja käynnistä automaattisesti vain luku -tilassa oleva BizSidekick-tehtävä, joka näyttää kauppani ja uusimmat tuotteet. Jos kirjautuminen, rekisteröinti tai BizSidekick-onboarding on tarpeen, pidä tämä istunto avoinna, pyydä minua viimeistelemään selaimessa ja vastaamaan `Jatka`, tarkista sitten valtuutus ja käynnistä tehtävä.
```

CLI-vaihtoehto:

```bash
claude plugin marketplace add BizSidekick-AI/bizsidekick
claude plugin install bizsidekick@bizsidekick --scope user
```

## WorkBuddy työpöydälle

Liitä seuraava teksti WorkBuddy-keskusteluun:

```text
Lisää `BizSidekick-AI/bizsidekick` WorkBuddyn mukautetusta plugin-markkinapaikasta ja asenna `bizsidekick@bizsidekick` vain tarvittaessa. Älä avaa tai lue tietovarastoa selaimessa. Säilytä olemassa oleva kirjautumiseni ja suorita `/reload-plugins` täsmälleen kerran uuden asennuksen jälkeen. Jos valtuutus valmistuu ilman tilin määritystä, jatka tässä keskustelussa ja käynnistä automaattisesti vain luku -tilassa oleva BizSidekick-tehtävä, joka näyttää kauppani ja uusimmat tuotteet. Jos kirjautuminen, rekisteröinti tai BizSidekick-onboarding on tarpeen, pidä tämä keskustelu avoinna, pyydä minua viimeistelemään selaimessa ja vastaamaan `Jatka`, tarkista sitten valtuutus ja käynnistä tehtävä.
```

CLI-vaihtoehto:

```bash
codebuddy plugin marketplace add https://github.com/BizSidekick-AI/bizsidekick.git --name bizsidekick
codebuddy plugin install bizsidekick@bizsidekick --scope user
```

## Suojausmalli

- Google/Bustly-kirjautuminen tapahtuu selaimessa OAuthin kautta; työtila valitaan liiketoimintatehtävässä.
- Käyttäjäkohtainen OAuth-valtuutus rajoittuu nykyiseen Bustly-jäsenyyteen; tehtävä sidotaan täsmälleen yhteen työtilaan.
- Ilman kaupparajausta tehty luku kattaa kaikki työtilan aktiiviset ja käytettävissä olevat yhteydet eikä vaadi vahvistusta.
- Muutoksista näytetään ensin esikatselu, ja ne toteutetaan vasta nimenomaisen hyväksynnän jälkeen.
- Korkean riskin toiminnot vaativat kirjoitetun vahvistuksen.
- Palveluntarjoajien tunnuksia ei koskaan lähetetä MCP-asiakasohjelmaan tai tähän repositorioon.
- Plugin-Skills ja MCP-työkalujen kuvaukset ovat julkisia integraatioaineistoja, eivät suojausraja.
