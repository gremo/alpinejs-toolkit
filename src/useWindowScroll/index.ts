import type { Alpine } from 'alpinejs';

interface UseWindowScrollState {
  ratio: null | number;
  direction: null | string;
}

export interface UseWindowScrollOptions {
  offset: number;
}

export default (function makePlugin(makeOptions: UseWindowScrollOptions) {
  const useWindowScroll = (hookOptions: UseWindowScrollOptions, onChange: (state: UseWindowScrollState) => void) => {
    const { offset } = hookOptions;

    const getScrollRatio = () =>
      (document.documentElement.scrollTop || document.body.scrollTop) /
      ((document.documentElement.scrollHeight || document.body.scrollHeight) - document.documentElement.clientHeight ||
        0);

    let previousScrollRatio: null | number = null;
    const onLoad = () => {
      const currentScrollRatio = getScrollRatio();

      previousScrollRatio = currentScrollRatio;
      onChange({ ratio: currentScrollRatio, direction: null });
    };

    const onScroll = () => {
      const currentScrollRatio = getScrollRatio();

      let direction = null;
      if (currentScrollRatio - offset <= 0) {
        direction = 'top';
      } else if (currentScrollRatio + offset >= 1) {
        direction = 'bottom';
      } else {
        if (null !== previousScrollRatio) {
          if (currentScrollRatio < previousScrollRatio) {
            direction = 'up';
          } else {
            direction = 'down';
          }
        }
      }

      previousScrollRatio = currentScrollRatio;
      onChange({ ratio: currentScrollRatio, direction });
    };

    const observe = () => {
      window.addEventListener('load', onLoad);
      window.addEventListener('scroll', onScroll, { passive: true });
    };
    const unobserve = () => {
      window.removeEventListener('load', onLoad);
      window.removeEventListener('scroll', onScroll);
    };

    return [observe, unobserve];
  };

  const Plugin = (Alpine: Alpine) => {
    Alpine.magic('useWindowScroll', (_, { cleanup }) => (magicOptions: UseWindowScrollOptions) => {
      const options = { ...makeOptions, ...magicOptions };

      const state = Alpine.reactive<UseWindowScrollState>({
        ratio: null,
        direction: null,
      });

      const [observe, unobserve] = useWindowScroll(options, ({ ratio, direction }) => {
        state.ratio = ratio;
        state.direction = direction;
      });

      observe();
      cleanup(unobserve);

      return state;
    });
  };

  Plugin.withDefaults = (withDefaultsOptions: Partial<UseWindowScrollOptions>) =>
    makePlugin({ ...makeOptions, ...withDefaultsOptions });

  return Plugin;
})({
  offset: 0,
});
