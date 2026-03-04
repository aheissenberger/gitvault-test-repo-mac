# Repository Copilot Instructions

Use the `managing-gitvault-secrets` skill as the default reference for any task involving repository secrets, encryption/decryption workflows, CI/CD secret handling, identity/keyring setup, recipient management, rotation, and production-barrier operations.

For Node.js + TypeScript work in this repository, prefer Node's native TypeScript execution (Node 25+) and do not introduce `tsx`, `ts-node`, or custom loaders unless explicitly requested. Prefer built-in Node modules before adding npm dependencies (for example, `node:util` `parseArgs` for CLI parsing and `node:test` for testing).

<skills>
<skill>
<name>managing-gitvault-secrets</name>
<description>Git-native secrets manager reference for AI agents. Use when working with managing-gitvault-secrets commands, encrypted secrets workflows, CI/CD safety checks, identity/keyring setup, recipient rotation, and production-barrier operations.</description>
<file>.github/skills/managing-gitvault-secrets/SKILL.md</file>
</skill>
</skills>
