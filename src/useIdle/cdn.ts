import UseIdle from './index';

document.addEventListener('alpine:init', () => {
  UseIdle.withDefaults(window.AlpineUseIdleOptions ?? {})(window.Alpine);
});
