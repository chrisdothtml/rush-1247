# [Microsoft/web-build-tools#1247](https://github.com/Microsoft/web-build-tools/issues/1247)

## Areas to note

[command-line.json:93-98](common/config/rush/command-line.json#L93)

[lint.js](common/scripts/lint.js)

## Reproduce

### 1. Run script from root

```sh
rush lint
```

Notice the script outputs `The cwd is: [...]/rush-1247`

### 2. Run script from an individual package

```sh
cd packages/foo
rush lint
```

Notice the script has the same output as when it was invoked from the root. The means that script has no way of identifying where it was invoked from
