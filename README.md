# ULTRAKILL Modding Wiki!

The source for [ultramodding.github.io](https://ultramodding.github.io), built with [Docusaurus](https://docusaurus.io).

## Requirements

- [Node.js](https://nodejs.org)
- pnpm (or npm)

## Getting started

Install the dependencies:

```bash
pnpm install
```

Start a local dev server with live reload:

```bash
pnpm run start
```

Serve a production build locally:

```bash
pnpm run serve
```

## Building

```bash
pnpm run build
```

The build will fail if any page has a broken link.

**Deploying over SSH**
```bash
USE_SSH=true pnpm run deploy
```

## Goals:
- [ ] Keep writing documentaion
- [ ] Cleaner structure
- [ ] Harmony patching
- [ ] Publicizers
- [ ] Template section
- [ ] Docs for using libraries (Such as plugin config, harmony, harmony patch extensions)