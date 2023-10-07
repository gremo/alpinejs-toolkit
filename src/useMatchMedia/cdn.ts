import UseMatchMedia from './index';

document.addEventListener('alpine:init', () => {
  UseMatchMedia.withDefaults(window.AlpineUseMatchMediaOptions ?? {})(window.Alpine);
});
