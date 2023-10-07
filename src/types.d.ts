import { UseGeolocationOptions } from './UseGeolocation/index';
import { GetOptions } from './get';
import { ScrollOptions } from './scroll/index';
import { UseIdleOptions } from './useIdle/index';
import { UseMatchMediaOptions } from './useMatchMedia/index';
import { UseWindowScrollOptions } from './useWindowScroll/index';
import type { Alpine } from 'alpinejs';

declare global {
  interface Window {
    Alpine: Alpine;
    AlpineGetOptions?: GetOptions;
    AlpineScrollOptions?: ScrollOptions;
    AlpineUseGeolocationOptions?: UseGeolocationOptions;
    AlpineUseIdleOptions?: UseIdleOptions;
    AlpineUseMatchMediaOptions?: UseMatchMediaOptions;
    AlpineUseWindowScrollOptions?: UseWindowScrollOptions;
  }
}

export {};
