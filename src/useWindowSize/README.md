# 🧩 UseWindowSize

A magic helper to track the window size. It exposes the following properties:

| Property | Type     | Description             |
| -------- | -------- | ----------------------- |
| `width`  | `number` | Window width in pixels  |
| `height` | `number` | Window height in pixels |

## 💾 Installation

As script tag, include the `<script>` tag in the `<head>` of your document just before Alpine:

```html
<script src="https://cdn.jsdelivr.net/npm/alpinejs-toolkit/dist/useWindowSize/cdn.min.js" defer></script>
```

As module:

```js
import Alpine from 'alpinejs';
import UseWindowSize from 'alpinejs-toolkit/useWindowSize';

Alpine.plugin(UseWindowSize);
Alpine.start();
```

## 🕹️ Usage

```html
<div x-data="$useWindowSize()">Window size is: <span x-text="width"></span> x <span x-text="height"></span></div>
```
