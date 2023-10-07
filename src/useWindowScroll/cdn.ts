import UseWindowScroll from './index';

document.addEventListener('alpine:init', () => {
  UseWindowScroll.withDefaults(window.AlpineUseWindowScrollOptions ?? {})(window.Alpine);
});
