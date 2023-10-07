# 🧩 UseWindowScroll

A magic helper to track the (vertical) scroll ratio and direction. It exposes the following properties:

| Property    | Type     | Description                                            |
| ----------- | -------- | ------------------------------------------------------ |
| `ratio`     | `number` | The scroll progress ratio (between `0` and `1`)        |
| `direction` | `string` | The scroll direction ("top", "down", "up" or "bottom") |

## 💾 Installation

As script tag, include the `<script>` tag in the `<head>` of your document just before Alpine:

```html
<script src="https://cdn.jsdelivr.net/npm/alpinejs-toolkit/dist/useWindowScroll/cdn.min.js" defer></script>
```

As module:

```js
import Alpine from 'alpinejs';
import UseWindowScroll from 'alpinejs-toolkit/useWindowScroll';

Alpine.plugin(UseWindowScroll);
Alpine.start();
```

## 🕹️ Usage

> [!Warning]
> Either use a reset stylesheet or set `html { height: 100%; }` CSS to fix an old [WebKit bug](https://bugs.chromium.org/p/chromium/issues/detail?id=2891).

The helper accepts:

1. An optional `object` of options (see below)

```html
<div x-data="$useWindowScroll()">
  Scrolling <span x-text="direction ?? '-'"></span> <span x-text="`${ratio ?? '-'}`"></span>
</div>
```

## ⚙️ Options

> [!Note]
> Options are always merged, with the magic options having an higher priority.

| Option   | Default | Description                                                       |
| -------- | ------- | ----------------------------------------------------------------- |
| `offset` | `0`     | The offset (between `0` and `1`) for the "top" and "bottom" cases |

Pass options when using the script tag:

```html
<script>
  window.AlpineUseWindowScrollOptions = { offset: 0.05 };
</script>
```

Pass options when using the module:

```js
Alpine.plugin(UseWindowScroll.withDefaults({ offset: 0.1 }));
```

Pass options for a given magic usage:

```html
<div x-data="$useWindowScroll({ offset: 0.05 })">
  <!-- ... -->
</div>
```
