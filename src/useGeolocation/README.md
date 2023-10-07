# 🧩 UseGeolocation

A magic helpers for getting the current position of the device using the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation). It exposes the following properties:

| Property           | Type             | Description                                                     |
| ------------------ | ---------------- | --------------------------------------------------------------- |
| `latitude`         | `number`         | The position's latitude in decimal degrees                      |
| `longitude`        | `number`         | The position's longitude in decimal degrees                     |
| `altitude`         | `null \| number` | The position's altitude in meters, relative to sea level        |
| `accuracy`         | `number`         | The accuracy of the latitude and longitude, expressed in meters |
| `altitudeAccuracy` | `null \| number` | The accuracy of the altitude expressed in meters                |
| `heading`          | `null \| number` | The direction towards which the device is facing                |
| `speed`            | `null \| number` | The velocity of the device in meters per second                 |

## 💾 Installation

As script tag, include the `<script>` tag in the `<head>` of your document just before Alpine:

```html
<script src="https://cdn.jsdelivr.net/npm/alpinejs-toolkit/dist/useGeolocation/cdn.min.js" defer></script>
```

As module:

```js
import Alpine from 'alpinejs';
import UseGeolocation from 'alpinejs-toolkit/get';

Alpine.plugin(UseGeolocation);
Alpine.start();
```

## 🕹️ Usage

The helper accepts:

1. An optional `object` of options (see below)

// TODO Add a simple example

```html

```

## ⚙️ Options

> [!Note]
> Options are always merged, with the magic options having an higher priority.

| Option               | Default    | Description                                                    |
| -------------------- | ---------- | -------------------------------------------------------------- |
| `watch`              | `false`    | Whether to update the position each time it changes            |
| `maximumAge`         | `0`        | The maximum age (ms) of a possible cached position             |
| `timeout`            | `Infinity` | The maximum time (ms) for the device to return a position      |
| `enableHighAccuracy` | `false`    | Whether to use the hight accuracy to get best possible results |

Pass options when using the script tag:

```html
<script>
  window.AlpineUseGeolocationOptions = { timeout: 5000 };
</script>
```

Pass options when using the module:

```js
Alpine.plugin(UseGeolocation.withDefaults({ timeout: 5000 }));
```

Pass options for a given magic usage:

```html
<div x-data="{ position: {} }" x-init="position = $useGeolocation({ timeout: 3000 })">
  <!-- ... -->
</div>
```
