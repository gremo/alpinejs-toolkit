import Get from './get';
import Scroll from './scroll';
import Timing from './timing';
import UseGeolocation from './useGeolocation';
import Idle from './useIdle';
import UseMatchMedia from './useMatchMedia';
import UseVisibility from './useVisibility';
import UseWindowScroll from './useWindowScroll';
import UseWindowSize from './useWindowSize';

document.addEventListener('alpine:init', () => {
  Get.withDefaults(window.AlpineGetOptions ?? {})(window.Alpine);
  Idle.withDefaults(window.AlpineUseIdleOptions ?? {})(window.Alpine);
  Scroll.withDefaults(window.AlpineScrollOptions ?? {})(window.Alpine);
  Timing(window.Alpine);
  UseGeolocation.withDefaults(window.AlpineUseGeolocationOptions ?? {})(window.Alpine);
  UseMatchMedia.withDefaults(window.AlpineUseMatchMediaOptions ?? {})(window.Alpine);
  UseVisibility(window.Alpine);
  UseWindowScroll.withDefaults(window.AlpineUseWindowScrollOptions ?? {})(window.Alpine);
  UseWindowSize(window.Alpine);
});
