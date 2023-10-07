<!-- prettier-ignore-start -->
<!-- markdownlint-disable-next-line MD041 -->
![Alpine.js logo](https://alpinejs.dev/alpine_long.svg)
<!-- prettier-ignore-end -->

# alpinejs-toolkit

A collection of small and dependency-free [Alpine.js](https://alpinejs.dev) utilities, inspired by [stimulus-use](https://github.com/stimulus-use/stimulus-use) and other great projects found on GitHub.

> [!Caution]
> This library is still a WIP. There will be force pushes, history rewrites and major changes. NPM package will be available when reaching a stable state.

[![NPM version](https://img.shields.io/npm/v/alpinejs-toolkit.svg?logo=npm)](https://www.npmjs.com/package/alpinejs-toolkit)
[![NPM downloads](https://img.shields.io/npm/dw/alpinejs-toolkit.svg?logo=npm)](https://www.npmjs.com/package/alpinejs-toolkit)
[![Donate](https://img.shields.io/badge/Donate-PayPal-ff3f59.svg?logo=githubsponsors)](https://paypal.me/marcopolichetti)

[![GitHub last commit](https://img.shields.io/github/last-commit/gremo/alpinejs-toolkit?logo=github)](https://github.com/gremo/alpinejs-toolkit/commits/main)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/gremo/alpinejs-toolkit/ci.yaml?logo=github)](https://github.com/gremo/alpinejs-toolkit/actions)
[![GitHub issues](https://img.shields.io/github/issues/gremo/alpinejs-toolkit.svg?logo=github)](https://github.com/gremo/alpinejs-toolkit/issues)
[![GitHub pull request](https://img.shields.io/github/issues-pr/gremo/alpinejs-toolkit.svg?logo=github)](https://github.com/gremo/alpinejs-toolkit/pulls)
[![Open in Dev Containers](https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/gremo/alpinejs-toolkit.git)

## 🚀 Quick start

There are 2 ways to include this library into your project:

- Including it from a `<script>` tag
- Importing it as a module

### Script tag

Include the `<script>` tag in the `<head>` of your document, just before Alpine:

```html
<script src="https://cdn.jsdelivr.net/npm/alpinejs-toolkit/dist/cdn.min.js" defer></script>
```

You can pass default options to each plugin by creating a `<script>` and setting properties on the `window` object:

> [!Note]
> Options key for a specific plugin has the following name format: `Alpine<PluginNameInCamelCase>Options`.

```html
<script>
  window.AlpineGetOptions = {
    /* Get plugin default options */
  };
  window.AlpineUseMatchMediaOptions = {
    /* UseMatchMedia plugin default options */
  };
</script>
```

### As module

```bash
npm install alpinejs-toolkit
```

Import the package before starting Alpine:

```js
import Alpine from 'alpinejs';
import Toolkit from 'alpinejs-toolkit';

Alpine.plugin(Toolkit);
Alpine.start();
```

You can pass default options to each plugin calling `Toolkit.withDefaults()`:

> [!Note]
> Options key for a specific plugin has the following name format: `<PluginNameInCamelCase>Options`.

```js
Alpine.plugin(
  Toolkit.withDefaults({
    GetOptions: {
      /* Get plugin default options */
    },
    UseMachMediaOptions: {
      /* UseMatchMedia plugin default options */
    },
  }),
);
```

## 🧩 Plugins

| Plugin                                             | Description                                         |
| -------------------------------------------------- | --------------------------------------------------- |
| [`Get`](src/get/README.md)                         | Send GET requests                                   |
| [`Scroll`](src/scroll/README.md)                   | Scroll to a target selector or offset               |
| [`Timing`](src/timing/README.md)                   | Deal with timed functions                           |
| [`UseGeolocation`](src/useGeolocation/README.md)   | Get the current position of the device              |
| [`UseIdle`](src/useIdle/README.md)                 | Track user interaction with the page                |
| [`UseMatchMedia`](src/useMatchMedia/README.md)     | Track if the window matches the given media queries |
| [`UseVisibility`](src/useVisibility/README.md)     | Track page visibility                               |
| [`UseWindowScroll`](src/useWindowScroll/README.md) | Track the (vertical) scroll ratio and direction     |
| [`UseWindowSize`](src/useWindowSize/README.md)     | Track the window size                               |

## ❤️ Contributing

All types of contributions are encouraged and valued. See the [Contributing](CONTRIBUTING.md) guidelines, the community looks forward to your contributions!

### 📘 License

This project is released under the under terms of the [ISC License](LICENSE).
