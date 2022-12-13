# eslint-webresources-plugin
eslint extension plugin to enforce rules and styles for D365 webresources

# prerequisite
see [eslint](https://eslint.org/docs/latest/user-guide/getting-started) to setup/use eslint in generell
``npm install eslint --save-dev``

# .git submodule
You can install the eslint-plugin from git like this:

- add submodule: ``git submodule--helper add https://github.com/d365-community/eslint-webresources-plugin.git d365-community-eslint-plugin-webresources -b main``
- update submodules: ``git submodule update --remote --init``
- ``npm install ./d365-community-eslint-plugin-webresources --save-dev``

## devDependencies

see package.json dev dependency
```json
"devDependencies": {
    [...]
    "eslint": "^x.xx.x"
    "@d365-community/eslint-plugin-webresources": "file:d365-community-eslint-plugin-webresources",
    [...]
}
```

# npm package
You can install the eslint-plugin from npmjs like this:

- ``npm install @d365-community/eslint-plugin-webresources --save-dev``

## devDependencies
see package.json dev dependency

```json
"devDependencies": {
    [...]
    "eslint": "^x.xx.x"
    "@d365-community/eslint-plugin-webresources": "file:d365-community-eslint-plugin-webresources",
    [...]
}
```

# eslintrc
manage .eslintrc.json. Add the plugin and rules.

```json
  "plugins": [
    [...]
    "@typescript-eslint",
    "deprecation",
    "@d365-community/webresources"
  ],
  "rules": {
    [...]
    "@d365-community/webresources/webresource-accessibility": "error",
    "@d365-community/webresources/webresource-static": "error",
    "@d365-community/webresources/webresource-referrer": "error"
    [...]
  },
```

result sample:
```
C:\Users\any\source\repos\typescript\Xrm\Form\email.form.ts
  12:3   error    Use accessibility modifier on method definition registerEvents in webresource scripts!       @d365-community/webresources/webresource-accessibility
  13:5   error    Do not use 'this.' in webresource scripts!                                                   @d365-community/webresources/webresource-referrer
  16:3   error    Use static modifier on method definition FilterEmailReceiversLookup in webresource scripts!  @d365-community/webresources/webresource-static
```
