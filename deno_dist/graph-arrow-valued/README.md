<p align="center">
    <img src="https://github.com/rimbu-org/rimbu/raw/main/assets/rimbu_logo.svg" />
</p>

# @rimbu/graph-arrow-valued

This package contains the implementations for the ArrowValuedGraph type. It was mainly split off to a seperate package from the `@rimbu/graph` package to descrease build time and memory usage.

This package exports the following types:

| Name                           | Description                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------- |
| `ArrowValuedGraph<N, V>`       | a generic directed valued graph with nodes of type N, and edge values of type V |
| `ArrowValuedGraphHashed<N, V>` | a valued directed graph with hashed nodes of type N, and edge values of type V  |
| `ArrowvaluedGraphSorted<N, V>` | a valued directed graph with sorted nodes of type N, and edge values of type V  |

For complete documentation please visit the [Arrow Valued Graph page](https://rimbu.org/docs/collections/graph/arrow-valued-graph) in the _[Rimbu Docs](https://rimbu.org)_.

Or [Try Out Rimbu](https://codesandbox.io/s/github/vitoke/rimbu-sandbox/tree/main?previewwindow=console&view=split&editorsize=65&moduleview=1&module=/src/index.ts) in CodeSandBox.

## Installation

All types are exported through [`@rimbu/core`](../core). It is recommended to use that package.

To install separately:

### Yarn/NPM

> `yarn add @rimbu/graph-arrow-valued`

or

> `npm i @rimbu/graph-arrow-valued`

### Deno

Create a file called `rimbu.ts` and add the following:

> ```ts
> export * from 'https://deno.land/x/rimbu/graph-arrow-valued/mod.ts';
> ```

Or using a pinned version (`x.y.z`):

> ```ts
> export * from 'https://deno.land/x/rimbu/graph-arrow-valued@x.y.z/mod.ts';
> ```

Then import what you need from `rimbu.ts`:

```ts
import { ArrowValuedGraphHashed } from './rimbu.ts';
```

Because Rimbu uses complex types, it's recommended to use the `--no-check` flag (your editor should already have checked your code) and to specify a `tsconfig.json` file with the settings described below.

Running your script then becomes:

> `deno run --no-check --config tsconfig.json <your-script>.ts`

## Author

[Arvid Nicolaas](https://github.com/vitoke)

## Contributing

Feel very welcome to contribute to further improve Rimbu. Please read our [Contributing guide](../../CONTRIBUTING.md).

## Contributors

<img src = "https://contrib.rocks/image?repo=vitoke/iternal"/>

Made with [contributors-img](https://contrib.rocks).

## License

Licensed under the MIT License, Copyright © 2020-present Arvid Nicolaas.

See [LICENSE](./LICENSE) for more information.