# 🧩 UseMatchMedia

A magic helper to track if the window matches the given media query string(s). It exposes the following properties:

| Property | Type      | Description                                           |
| -------- | --------- | ----------------------------------------------------- |
| `<name>` | `boolean` | Whether the media query named `<name>` applies or not |

## 💾 Installation

As script tag, include the `<script>` tag in the `<head>` of your document just before Alpine:

```html
<script src="https://cdn.jsdelivr.net/npm/alpinejs-toolkit/dist/useMatchMedia/cdn.min.js" defer></script>
```

As module:

```js
import Alpine from 'alpinejs';
import UseMatchMedia from 'alpinejs-toolkit/useMatchMedia';

Alpine.plugin(UseMatchMedia);
Alpine.start();
```

## 🕹️ Usage

The helper accepts:

1. An optional `object` of options (see below)

```html
<div x-data='$useMatchMedia({ isMd: "(min-width: 768px)" })' x-show="isMd" x-cloak>
  This is shown only if viewport width is larger than "md"
</div>
```

## ⚙️ Options

> [!Note]
> Options are always merged, with the magic options having an higher priority.

The helper accepts an object with the following shape:

| Options object | Type     | Description            |
| -------------- | -------- | ---------------------- |
| `<key>`        | `string` | The media query name   |
| `<value>`      | `string` | The media query string |

Pass options when using the script tag:

```html
<script>
  window.AlpineUseMatchMediaOptions = { dark: '(prefers-color-scheme: dark)' };
</script>
```

Pass options when using the module:

```js
Alpine.plugin(
  UseMatchMedia.withDefaults({
    isXs: '(min-width: 640px)',
    isMd: '(min-width: 768px)',
    isLg: '(min-width: 1024px)',
    isXl: '(min-width: 1280px)',
    is2xl: '(min-width: 1536px)',
  }),
);
```

Pass options for a given magic usage:

```html
<div x-data='$useMatchMedia({ dark: "(prefers-color-scheme: dark)" })'>
  <!-- ... -->
</div>
```
