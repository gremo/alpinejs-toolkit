# 🧩 Timing

Magic helpers to deal with timed functions:

## `$every`

Run a function repeatdly, after a given amount of time. It exposes the following properties:

| Property  | Type       | Description                                      |
| --------- | ---------- | ------------------------------------------------ |
| `setup()` | `function` | Used start a new execution (aborts the previous) |
| `abort()` | `function` | Used to abort the execution                      |

## `$after`

Run a function after a given amount of time. It exposes the following properties:

| Property  | Type       | Description                                      |
| --------- | ---------- | ------------------------------------------------ |
| `setup()` | `function` | Used start a new execution (aborts the previous) |
| `abort()` | `function` | Used to abort the execution                      |

## 💾 Installation

As script tag, include the `<script>` tag in the `<head>` of your document just before Alpine:

```html
<script src="https://cdn.jsdelivr.net/npm/alpinejs-toolkit/dist/timing/cdn.min.js" defer></script>
```

As module:

```js
import Alpine from 'alpinejs';
import Timing from 'alpinejs-toolkit/timing';

Alpine.plugin(Timing);
Alpine.start();
```

## 🕹️ Usage

The `$every` helper accepts:

1. An amount of time (in milliseconds)
2. A function to be execute

```html
<div x-data="$every(1000, () => console.log('Hello world!'))"></div>
```

The `$after` helper accepts:

1. An amount of time (in milliseconds)
2. A function to be execute

```html
<div x-data="$after(3000, () => console.log('Hello world!'))"></div>
```
