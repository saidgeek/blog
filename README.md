# saidgeek.land

This is my page blog developing from of zero.

## Definitions

### Commits

For commits i use the [commit conventions](https://www.conventionalcommits.org/en/v1.0.0/), for this propousal use the next modules:

- [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)
- [@commitlint-cli](https://www.npmjs.com/package/@commitlint/cli)

#### Commit types

- **feat**: A new feature.
- **fix**: A bug fixing.
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- **refactor**: A code change that neither fixes a bug nor adds a feature.
- **test**: Adding missing tests or correcting existing tests.
- **ci**: Changes to our CI configuration files and scripts.
- **chore**: Update grunt tasks. No production code change.

### Atomic design

- **Atoms**: A atom is a component composed to one atom or HTML tags elements.
- **molecules**: A molecule is a component composed to two or more atoms.
- **organisms**: A organims is a component composed to two or more molecules.
