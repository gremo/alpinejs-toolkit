# 🧩 Get

A magic helpers for issuing GET requests using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). It exposes the following properties:

| Property  | Type      | Description                                                   |
| --------- | --------- | ------------------------------------------------------------- |
| `loading` | `boolean` | Whether the request is in loading state                       |
| `error`   | `boolean` | Whether the request ended with an error                       |
| `data`    | `any`     | Response, either JSON or text, based on `Content-type` header |

## 💾 Installation

As script tag, include the `<script>` tag in the `<head>` of your document just before Alpine:

```html
<script src="https://cdn.jsdelivr.net/npm/alpinejs-toolkit/dist/get/cdn.min.js" defer></script>
```

As module:

```js
import Alpine from 'alpinejs';
import Get from 'alpinejs-toolkit/get';

Alpine.plugin(Get);
Alpine.start();
```

## 🕹️ Usage

The helper accepts:

1. A `string` representing the resource you want to fetch
2. An optional `object` of query params to send
3. An optional `object` of headers to send (see below)

```html
<div x-data="{ state: {} }" x-init="state = $get('https://dummyjson.com/posts', { limit: 10 })">
  <p x-show="state.loading" x-cloak>Loading...</p>
  <p x-show="state.error" x-cloak>Ops... an error occurred.</p>

  <template x-if="!state.loading && !state.error">
    <ul>
      <template x-for="post in state.data.posts">
        <li x-text="post.title"></li>
      </template>
    </ul>
  </template>
</div>
```

## ⚙️ Options

> [!Note]
> Options are always merged, with the magic options having an higher priority.

| Option    | Default | Description                             |
| --------- | ------- | --------------------------------------- |
| `headers` | `{}`    | The header object to pass to the server |

Pass options when using the script tag:

```html
<script>
  window.AlpineGetOptions = { headers: { authorization: 'mytoken123' } };
</script>
```

Pass options when using the module:

```js
Alpine.plugin(Get.withDefaults({ headers: { authorization: 'mytoken123' } }));
```

Pass options for a given magic usage:

```html
<div
  x-data="{ state: {} }"
  x-init="$get('https://dummyjson.com/products', {}, { headers: { authorization: 'mytoken123' } })">
  <!-- ... -->
</div>
```
