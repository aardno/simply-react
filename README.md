# Dolfin Web

## eslint

### eslint usage:

```
eslint src/js/index.js
```

```
eslint src/js/index.js --fix
```

eslint in sublime: http://www.sublimelinter.com/en/latest/

eslint in atom: install packages `linter` and `es-lint`
### if eslint does not work

install eslint globally by running in terminal:

```bash
(
  export PKG=eslint-config-airbnb;
  npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install -g "$PKG"
)
```


### To disable eslint for specific code, wrap using:

```js
/* eslint-disable */

const code-eslint-will-ignore;
function code(code) { return this.code; }

/* eslint-enable */
```
