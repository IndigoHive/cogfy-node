# Cogfy Node.js

[![.github/workflows/tests.yml](https://github.com/IndigoHive/cogfy-node/actions/workflows/tests.yml/badge.svg)](https://github.com/IndigoHive/cogfy-node/actions/workflows/tests.yml)
[![NPM Version](https://img.shields.io/npm/v/cogfy)](https://www.npmjs.com/package/cogfy)

This package provides methods to access the Cogfy public API.

## Installation

```
npm install cogfy
```

## Usage

```typescript
import { Cogfy } from 'cogfy'

const cogfy = new Cogfy({
  apiKey: process.env.COGFY_API_KEY
})

async function main () {
  const collections = await cogfy.collections.list()
}

main()
```
