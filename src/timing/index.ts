import type { Alpine } from 'alpinejs';

export default (Alpine: Alpine) => {
  Alpine.magic('every', (_, { cleanup }) => {
    return (timeout: number, callback: TimerHandler) => {
      let intervalId: number;
      const observe = () => {
        intervalId && clearInterval(intervalId);
        intervalId = setInterval(callback, timeout);
      };
      const unobserve = () => intervalId && clearInterval(intervalId);

      observe();
      cleanup(unobserve);

      return {
        setup: observe,
        cancel: unobserve,
      };
    };
  });

  Alpine.magic('after', (_, { cleanup }) => {
    return (ms: number, callback: TimerHandler) => {
      let timeoutId: number;
      const observe = () => {
        timeoutId && clearTimeout(timeoutId);
        timeoutId = setTimeout(callback, ms);
      };
      const unobserve = () => timeoutId && clearTimeout(timeoutId);

      observe();
      cleanup(unobserve);

      return {
        setup: observe,
        cancel: unobserve,
      };
    };
  });
};
