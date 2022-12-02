# eslint-webresources-plugin
eslint extension plugin to enforce rules and styles for D365 webresources

# prerequisite

see [eslint](https://eslint.org/docs/latest/user-guide/getting-started) to setup/use eslint in generell

# .git submodule
- add submodule: ``git submodule--helper add https://github.com/d365-community/eslint-webresources-plugin d365-community-eslint-webresources-plugin -b main``
- update submodules: ``git submodule update --remote --init``

## install

``npm install ./d365-community-eslint-webresources-plugin --save-dev``

## devDependencies

see package.json dev dependency
```json
"devDependencies": {
    [...]
    "d365-community-eslint-webresources-plugin": "file:d365-community-eslint-webresources-plugin",
    [...]
}
```

# eslintrc

manage .eslintrc.json
```json
  "plugins": [
    [...]
    "d365-community-eslint-webresources-plugin"
  ],
  "rules": {
    [...]
    "d365-community-eslint-webresources-plugin/webresource-accessibility": "error",
    "d365-community-eslint-webresources-plugin/webresource-static": "error",
    "d365-community-eslint-webresources-plugin/webresource-referrer": "error",
    [...]
  },
```


# npm package

comming soon