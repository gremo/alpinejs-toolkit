import Get, { GetOptions } from './get';
import Scroll, { ScrollOptions } from './scroll';
import Timing from './timing';
import UseGeolocation, { UseGeolocationOptions } from './useGeolocation';
import UseIdle, { UseIdleOptions } from './useIdle';
import UseMatchMedia, { UseMatchMediaOptions } from './useMatchMedia';
import UseVisibility from './useVisibility';
import UseWindowScroll, { UseWindowScrollOptions } from './useWindowScroll';
import UseWindowSize from './useWindowSize';
import type { Alpine } from 'alpinejs';

interface TookitOptions {
  GetOptions?: Partial<GetOptions>;
  ScrollOptions?: Partial<ScrollOptions>;
  UseWindowScrollOptions?: Partial<UseWindowScrollOptions>;
  UseMatchMediaOptions?: UseMatchMediaOptions;
  UseIdleOptions?: Partial<UseIdleOptions>;
  UseGeolocationOptions?: Partial<UseGeolocationOptions>;
}

const makeToolkit = (makeOptions?: TookitOptions) => {
  const Tookit = (Alpine: Alpine) => {
    const options = makeOptions;

    Alpine.plugin(Get.withDefaults(options?.GetOptions ?? {}));
    Alpine.plugin(Scroll.withDefaults(options?.ScrollOptions ?? {}));
    Alpine.plugin(Timing);
    Alpine.plugin(UseGeolocation.withDefaults(options?.UseGeolocationOptions ?? {}));
    Alpine.plugin(UseIdle.withDefaults(options?.UseIdleOptions ?? {}));
    Alpine.plugin(UseMatchMedia.withDefaults(options?.UseMatchMediaOptions ?? {}));
    Alpine.plugin(UseVisibility);
    Alpine.plugin(UseWindowScroll.withDefaults(options?.UseWindowScrollOptions ?? {}));
    Alpine.plugin(UseWindowSize);
  };

  Tookit.withDefaults = (withDefaultsOptions?: Partial<TookitOptions>) =>
    makeToolkit({ ...makeOptions, ...withDefaultsOptions });

  return Tookit;
};

export default makeToolkit({});
