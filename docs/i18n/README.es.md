# BizSidekick

[Todos los idiomas compatibles](README.md) · [English](../../README.md)

Marketplace público del plugin BizSidekick para usarlo con Codex, Claude y WorkBuddy. El plugin se
conecta al servicio Bustly MCP alojado en `https://mcp.bustly.ai/mcp`. Este repositorio no contiene
credenciales de proveedores, datos de comerciantes, código fuente del servicio MCP ni secretos de despliegue.

## Codex para escritorio

Pega el siguiente texto en una tarea de Codex:

```text
Usa el marketplace nativo de plugins de Codex para añadir `BizSidekick-AI/bizsidekick` e instala BizSidekick solo si hace falta. No abras ni leas el repositorio en un navegador. Reutiliza mi sesión existente. Si la autorización termina sin configurar una cuenta, verifica la conexión y crea y abre automáticamente una única tarea nueva de BizSidekick que muestre mis tiendas y productos recientes. Si es necesario iniciar sesión, registrarse o completar el onboarding de BizSidekick, mantén abierta esta tarea de instalación, pídeme que termine en el navegador y responda `Continuar`, luego verifica la autorización y crea la tarea.
```

Alternativa mediante CLI:

```bash
codex plugin marketplace add BizSidekick-AI/bizsidekick --ref main
codex plugin add bizsidekick@bizsidekick
codex mcp login bizsidekick
```

## Claude Code

Pega el siguiente texto en una sesión de Claude Code:

```text
Usa el marketplace nativo de plugins de Claude Code para añadir `BizSidekick-AI/bizsidekick` e instala `bizsidekick@bizsidekick` solo si hace falta. No abras ni leas el repositorio en un navegador. Conserva mi sesión existente y ejecuta `/reload-plugins` exactamente una vez después de una instalación nueva. Si la autorización termina sin configurar una cuenta, continúa en esta sesión e inicia automáticamente una tarea de BizSidekick de solo lectura que muestre mis tiendas y productos recientes. Si es necesario iniciar sesión, registrarse o completar el onboarding de BizSidekick, mantén abierta esta sesión, pídeme que termine en el navegador y responda `Continuar`, luego verifica la autorización e inicia la tarea.
```

Alternativa mediante CLI:

```bash
claude plugin marketplace add BizSidekick-AI/bizsidekick
claude plugin install bizsidekick@bizsidekick --scope user
```

## WorkBuddy para escritorio

Pega el siguiente texto en una conversación de WorkBuddy:

```text
Usa el marketplace nativo de plugins de WorkBuddy para añadir `BizSidekick-AI/bizsidekick` e instala `bizsidekick@bizsidekick` solo si hace falta. No abras ni leas el repositorio en un navegador. Conserva mi sesión existente y ejecuta `/reload-plugins` exactamente una vez después de una instalación nueva. Si la autorización termina sin configurar una cuenta, continúa en esta conversación e inicia automáticamente una tarea de BizSidekick de solo lectura que muestre mis tiendas y productos recientes. Si es necesario iniciar sesión, registrarse o completar el onboarding de BizSidekick, mantén abierta esta conversación, pídeme que termine en el navegador y responda `Continuar`, luego verifica la autorización e inicia la tarea.
```

Alternativa mediante CLI:

```bash
codebuddy plugin marketplace add https://github.com/BizSidekick-AI/bizsidekick.git --name bizsidekick
codebuddy plugin install bizsidekick@bizsidekick --scope user
```

## Modelo de seguridad

- El inicio de sesión de Google/Bustly se realiza en el navegador mediante OAuth; el espacio de trabajo se selecciona dentro de la tarea empresarial.
- Una autorización OAuth de usuario está limitada por la membresía actual de Bustly; cada tarea queda vinculada a un único espacio de trabajo.
- Una lectura sin limitar la tienda incluye todas las conexiones activas y accesibles de ese espacio y no requiere confirmación.
- Los cambios muestran primero una vista previa y solo se aplican después de una aprobación explícita.
- Las operaciones de alto riesgo requieren escribir una confirmación.
- Las credenciales de proveedores nunca se envían al cliente MCP ni se guardan en este repositorio.
- Las Skills del plugin y las descripciones de herramientas MCP son recursos públicos de integración, no una barrera de seguridad.
