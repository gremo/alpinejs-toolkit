# 🧩 UseIdle

A magic helper to track user interaction. It exposes the following properties:

| Property | Type      | Description                     |
| -------- | --------- | ------------------------------- |
| `isIdle` | `boolean` | Whether the user is idle or not |

## 💾 Installation

As script tag, include the `<script>` tag in the `<head>` of your document just before Alpine:

```html
<script src="https://cdn.jsdelivr.net/npm/alpinejs-toolkit/dist/useIdle/cdn.min.js" defer></script>
```

As module:

```js
import Alpine from 'alpinejs';
import UseIdle from 'alpinejs-toolkit/useIdle';

Alpine.plugin(UseIdle);
Alpine.start();
```

## 🕹️ Usage

The helper accepts:

1. An optional `object` of options (see below)

```html
<div x-data="$useIdle()">User is: <span x-text="isIdle ? 'idle' : 'active'"></span></div>
```

## ⚙️ Options

> [!Note]
> Options are always merged, with the magic options having an higher priority.

| Option         | Default                                                                  | Description                                                |
| -------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------- |
| `initialState` | `false`                                                                  | Whether to consider the user initially idle                |
| `timeout`      | `3000`                                                                   | Time in milliseconds after which to consider the user idle |
| `events`       | `['mousemove', 'mousedown', 'resize', 'keydown', 'touchstart', 'wheel']` | Events to listen on to detect if the user is active or not |

Pass options when using the script tag:

```html
<script>
  window.AlpineUseIdleOptions = { timeout: 5000 };
</script>
```

Pass options when using the module:

```js
Alpine.plugin(UseIdle.withDefaults({ timeout: 5000 }));
```

Pass options for a given magic usage:

```html
<div x-data="$useIdle({ initialState: true })">
  <!-- ... -->
</div>
```
