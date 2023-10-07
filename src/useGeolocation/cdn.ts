import UseGeolocation from './index';

document.addEventListener('alpine:init', () => {
  UseGeolocation.withDefaults(window.AlpineUseGeolocationOptions ?? {})(window.Alpine);
});
