import type { Alpine } from 'alpinejs';

export interface ScrollOptions {
  offset: number;
  behavior: ScrollBehavior;
}

export default (function makePlugin(makeOptions: ScrollOptions) {
  const Plugin = (Alpine: Alpine) => {
    Alpine.magic('scroll', () => (target: null | number | string | Element, magicOptions?: Partial<ScrollOptions>) => {
      const options = { ...makeOptions, ...magicOptions };

      if (typeof target === 'string' && /^[0-9]+?/g.test(target)) {
        target = parseInt(target, 10);
      }

      if (typeof target === 'string') {
        target = document.querySelector(target);
      }

      if (target instanceof Element) {
        target = Math.floor(target.getBoundingClientRect().top + window.scrollY);
      }

      if (!Number.isInteger(target)) {
        return;
      }

      window.scrollTo({
        top: (target as number) - options.offset,
        behavior: options.behavior,
      });
    });
  };

  Plugin.withDefaults = (withDefaultsOptions: Partial<ScrollOptions>) =>
    makePlugin({ ...makeOptions, ...withDefaultsOptions });

  return Plugin;
})({
  offset: 0,
  behavior: 'smooth',
});
