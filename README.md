# Module mapping and JSDoc type checking with TS

An example of using JSDocs to specify types in plain JS, as well as custom
mapping of paths to modules, similar to how it works for Gecko development.

This is an alternative to regular TS
[path mapping](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping)
which might not be able to handle paths that look like `resource://gre/...`.

## How

Just clone and open `main.js` in VSCode to get type checking and code 
completition working across modules.

The actual mapping happens in [globals.ts](/globals.ts).

## See also

Prevous work at [zombie/pilot](//github.com/zombie/pilot).
