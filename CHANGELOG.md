# CHANGELOG

## 2.0.0

- Rewrote to support new EsLint flat configuration format, now requires EsLint 9
- Moved to ES Modules syntax
- Changed `ecmaVersion` from `2021` to `latest` (EsLint default)
- Removed explicit `sourceType` set to `module`, it’s already EsLint default
- Removed `es6` and `browser` env, you have to import and set the globals yourself

## 1.0.0

Initial release
