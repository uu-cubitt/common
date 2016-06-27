# Cubitt Common

Common Typescript elements for the Cubitt framework.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/uu-cubitt/common/master/LICENSE)
[![npm version](https://badge.fury.io/js/cubitt-common.svg)](https://badge.fury.io/js/cubitt-common)
[![Build Status](https://travis-ci.org/uu-cubitt/common.svg?branch=master)](https://travis-ci.org/uu-cubitt/common)
[![Test Coverage](https://codeclimate.com/github/uu-cubitt/common/badges/coverage.svg)](https://codeclimate.com/github/uu-cubitt/common/coverage)

## About

A package that provides common components for usage across the cubitt framework.

## Features

* Generic ```<string to any>``` dictionary
* RFC4122 v4 compatible GUID implementation

## Usage

Install the package and then use it in your code.

```bash
npm install cubitt-common --save-dev
```

```typescript
import * as Common from "cubitt-common";
```

## Documentation

* [Code documentation](https://uu-cubitt.github.io/common/)
* [General documentation](https://cubitt.readme.io/)

## For developers

To get started:

```bash
npm run dev
```

To run the unit tests:

```bash
npm run test
```

To generate a test coverage report:

```bash
npm run test-coverage
```

To generate documentation:

```bash
npm run typedoc
```

## License

[MIT](LICENSE)

## Changelog

[Changelog](changelog.md)
