[![npm version](https://badge.fury.io/js/%40liip-lausanne%2Feslint-config.svg)](https://badge.fury.io/js/%40liip-lausanne%2Feslint-config)
[![test](https://github.com/liip-lausanne/eslint-config/actions/workflows/test.yml/badge.svg)](https://github.com/liip-lausanne/eslint-config/actions/workflows/test.yml)

# @liip-lausanne/eslint-config

Liip Lausanne EsLint common configuration (i.e. JavaScript styleguide). This preset should be used with Prettier. See [here](https://liip-lausanne.github.io/coding-standards/javascript/#code-styling) for the detailed setup.

## Usage

Version 2 requires EsLint 9+, if you use an older EsLint version, use the version 1 of this config.

Install the package first:

```
npm i -D @liip-lausanne/eslint-config
```

Load the plugin into your EsLint flat configuration (eslint.config.js):

```js
import eslintPluginLiipLausanne from '@liip-lausanne/eslint-config';

export default {
  // ...
  eslintPluginLiipLausanne,
  // ...
};
```

If you don’t have an EsLint config yet, you can generate one using `eslint --init`.

## Rules

All the rules are defined in [index.js](https://github.com/liip-lausanne/eslint-config/blob/main/index.js).

### Code example

```javascript
/**
 * A block comment when you have to talk a lot
 */

import module from 'module';

export default class MyClass {
  constructor(options) {
    this.people = ['john', 'vanessa', 'gina'];
    this.options = {
      display: true,
      layout: 'basic',
      ...options,
    };

    this.addEventListeners();
    this.createPeopleCards();
  }

  addEventListeners() {
    const link = document.querySelector('.link');
    const el = document.querySelector('.element');

    link.addEventListener('click', this.open.bind(this));
    el.addEventListener('click', this.toggle.bind(this));
  }

  createPeopleCards() {
    this.peopleCards = this.people.map(
      (people) => `<div class="people">${people.name}</div>`
    );
  }

  open(e) {
    const parentNode = e.currentTarget.parentElement;
    let result;

    // Small comment for whatever you like
    switch (parentNode.type) {
      case 'text':
        result = `Lorem ipsum ${parentNode.value} dolor sit amet`;
        break;
      case 'textarea':
        result = parentNode.value;
        break;
      default:
        result = 42;
    }

    return result;
  }

  toggle(e) {
    e.preventDefault();

    if (e.target) {
      this.people.push(e.target.name);
      module.foo();
    } else if (e.name === 'john') {
      module.hereItIs();
    } else {
      module.bar();
    }
  }
}
```
