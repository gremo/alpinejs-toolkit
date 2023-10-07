import type { Alpine } from 'alpinejs';

interface UseMatchMediaState {
  [key: string]: boolean;
}

export type UseMatchMediaOptions = Record<string, string>;

export default (function makePlugin(makeOptions: UseMatchMediaOptions) {
  const useMatchMedia = (media: string, onChange: (matches: boolean) => void) => {
    const query = window.matchMedia(media);

    const onMediaChange = (e: MediaQueryListEvent) => onChange(e.matches);

    const observe = () => {
      onChange(query.matches);
      query.addEventListener('change', onMediaChange);
    };
    const unobserve = () => query.removeEventListener('change', onMediaChange);

    return [observe, unobserve];
  };

  const Plugin = (Alpine: Alpine) => {
    Alpine.magic('useMatchMedia', (_, { cleanup }) => {
      const state = Alpine.reactive<UseMatchMediaState>({});

      return (magicOptions?: UseMatchMediaOptions) => {
        Object.entries({ ...makeOptions, ...magicOptions }).forEach(([name, media]) => {
          const [observe, unobserve] = useMatchMedia(media, matches => (state[name] = matches));

          observe();
          cleanup(unobserve);
        });

        return state;
      };
    });
  };

  Plugin.withDefaults = (withDefaultsOptions: UseMatchMediaOptions) =>
    makePlugin({ ...makeOptions, ...withDefaultsOptions });

  return Plugin;
})({});
