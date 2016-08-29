# A simple react boilerplate

# Running

to install:

`npm install` or `npm i`

to run:

`npm start`

to build:

`npm run build`

to test build:

`npm run build-serve`

* build must be run first
* should not be used for production server

to run eslint:

`npm run lint`

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
