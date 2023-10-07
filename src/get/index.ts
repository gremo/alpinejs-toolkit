import type { Alpine } from 'alpinejs';

interface GetState {
  loading: boolean;
  error: boolean;
  data: unknown;
}

export interface GetOptions {
  headers?: RequestInit['headers'];
}

export default (function makePlugin(makeOptions: GetOptions) {
  const Plugin = (Alpine: Alpine) => {
    Alpine.magic('get', () => {
      return (url: string, params?: Record<string, string>, magicOptions?: GetOptions) => {
        const options = {
          ...makeOptions,
          ...magicOptions,
          headers: { ...makeOptions.headers, ...magicOptions?.headers },
        };
        const state = Alpine.reactive<GetState>({ loading: true, error: false, data: undefined });

        (async () => {
          state.loading = true;
          state.error = false;

          try {
            const response = await fetch(`${url}?${new URLSearchParams(params).toString()}`, {
              ...options,
              method: 'get',
            });

            if (!response.ok) {
              throw new Error(`Got ${response.status} status code from server.`);
            }

            if ((response.headers.get('content-type') ?? '').toLowerCase().includes('application/json')) {
              state.data = await response.json();
            } else {
              state.data = await response.text();
            }
          } catch (err) {
            state.error = true;
          } finally {
            state.loading = false;
          }
        })();

        return state;
      };
    });
  };

  Plugin.withDefaults = (withDefaultsOptions: Partial<GetOptions>) =>
    makePlugin({ ...makeOptions, ...withDefaultsOptions });

  return Plugin;
})({});
