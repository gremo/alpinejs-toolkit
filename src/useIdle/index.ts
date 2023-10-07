import type { Alpine } from 'alpinejs';

interface UseIdleState {
  isIdle: boolean;
}

export interface UseIdleOptions {
  timeout: number;
  initialState: boolean;
  events: string[];
}

export default (function makePlugin(makeOptions: UseIdleOptions) {
  const useIdle = (hookOptions: UseIdleOptions, onChange: (isIdle: boolean) => void) => {
    const { initialState, timeout: ms, events } = hookOptions;

    let isIdle = initialState;
    let timeout = setTimeout(() => onChange((isIdle = true)), ms);

    const onEvent = () => {
      isIdle && onChange(false);
      isIdle = false;

      clearTimeout(timeout);
      timeout = setTimeout(() => onChange((isIdle = true)), ms);
    };

    const onVisibilityChange = () => !document.hidden && onEvent();

    const observe = () => {
      events.forEach(event => window.addEventListener(event, onEvent));
      document.addEventListener('visibilitychange', onVisibilityChange);
    };
    const unobserve = () => {
      events.forEach(event => window.removeEventListener(event, onEvent));
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };

    return [observe, unobserve];
  };

  const Plugin = (Alpine: Alpine) => {
    Alpine.magic('useIdle', (_, { cleanup }) => (magicOptions: Partial<UseIdleOptions>) => {
      const options = { ...makeOptions, ...magicOptions };

      const state = Alpine.reactive<UseIdleState>({ isIdle: options.initialState });
      const [observe, unobserve] = useIdle(options, isIdle => (state.isIdle = isIdle));

      observe();
      cleanup(unobserve);

      return state;
    });
  };

  Plugin.withDefaults = (withDefaultsOptions: Partial<UseIdleOptions>) =>
    makePlugin({ ...makeOptions, ...withDefaultsOptions });

  return Plugin;
})({
  initialState: true,
  timeout: 3000,
  events: ['mousemove', 'mousedown', 'resize', 'keydown', 'touchstart', 'wheel'],
});
