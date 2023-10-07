# Scroll

A magic helper to scroll to a target selector or offset.

## 💾 Installation

As script tag, include the `<script>` tag in the `<head>` of your document just before Alpine:

```html
<script src="https://cdn.jsdelivr.net/npm/alpinejs-toolkit/dist/scroll/cdn.min.js" defer></script>
```

As module:

```js
import Alpine from 'alpinejs';
import Scroll from 'alpinejs-toolkit/scroll';

Alpine.plugin(Scroll);
Alpine.start();
```

## 🕹️ Usage

The helper accepts:

1. A `string` (representing a selector) or a `number` (pixels)
2. An optional `object` of options (see below)

```html
<button x-data @click="$scroll('body')">
  Scroll top
</div>
```

## ⚙️ Options

> [!Note]
> Options are always merged, with the magic options having an higher priority.

| Option     | Default  | Description                                                     |
| ---------- | -------- | --------------------------------------------------------------- |
| `behavior` | `smooth` | Determines the scrolling behavior (auto, `smooth` or `instant`) |

Pass options when using the script tag:

```html
<script>
  window.AlpineScrollOptions = { behavior: 'instant' };
</script>
```

Pass options when using the module:

```js
Alpine.plugin(Scroll.withDefaults({ behavior: 'instant' }));
```

Pass options for a given magic usage:

```html
<button x-data @click="$scroll('main', { behavior: 'instant' })">
  <!-- ... -->
</button>
```
