import Get from './index';

document.addEventListener('alpine:init', () => {
  Get.withDefaults(window.AlpineGetOptions ?? {})(window.Alpine);
});
