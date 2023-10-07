import type { Alpine } from 'alpinejs';

interface UseGeolocationState {
  error?: Pick<GeolocationPositionError, 'code' | 'message'>;
  position?: { -readonly [K in keyof GeolocationCoordinates]: GeolocationCoordinates[K] };
}

export interface UseGeolocationOptions extends PositionOptions {
  watch: boolean;
}

export default (function makePlugin(makeOptions: UseGeolocationOptions) {
  const useGeolocation = (
    hookOptions: Omit<UseGeolocationOptions, 'watch'>,
    onSuccess: (position: GeolocationPosition) => void,
    onError: (error: GeolocationPositionError) => void,
  ) => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError, hookOptions);

    let watcherId: number;
    const observe = () => (watcherId = navigator.geolocation.watchPosition(onSuccess, onError, hookOptions));
    const unobserve = () => navigator.geolocation.clearWatch(watcherId);

    return [observe, unobserve];
  };

  const Plugin = (Alpine: Alpine) => {
    Alpine.magic('geolocation', (_, { cleanup }) => {
      const data = Alpine.reactive<UseGeolocationState>({});

      return (magicOptions?: UseGeolocationOptions) => {
        const { watch, ...geolocationOptions } = { ...makeOptions, ...magicOptions };

        const [observe, unobserve] = useGeolocation(
          geolocationOptions,
          ({ coords }: GeolocationPosition) =>
            (data.position = {
              latitude: coords.latitude,
              longitude: coords.longitude,
              altitude: coords.altitude,
              altitudeAccuracy: coords.altitudeAccuracy,
              speed: coords.speed,
              accuracy: coords.accuracy,
              heading: coords.heading,
            }),
          ({ code, message }: GeolocationPositionError) => (data.error = { code, message }),
        );

        if (watch) {
          observe();
          cleanup(unobserve);
        }

        return data;
      };
    });
  };

  Plugin.withDefaults = (withDefaultsOptions: Partial<UseGeolocationOptions>) =>
    makePlugin({ ...makeOptions, ...withDefaultsOptions });

  return Plugin;
})({
  watch: false,
});
