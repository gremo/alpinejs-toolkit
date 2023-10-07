import Scroll from './index';

document.addEventListener('alpine:init', () => {
  Scroll.withDefaults(window.AlpineScrollOptions ?? {})(window.Alpine);
});
