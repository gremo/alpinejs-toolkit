import type { Alpine } from 'alpinejs';

interface UseWindowSizeState {
  width: null | number;
  height: null | number;
}

export default (Alpine: Alpine) => {
  const useVisibility = (onChange: (width: number, height: number) => void) => {
    const onResize = () => onChange(window.innerWidth, window.innerHeight);

    const observe = () => {
      window.addEventListener('resize', onResize);
      onResize();
    };
    const unobserve = () => window.removeEventListener('resize', onResize);

    return [observe, unobserve];
  };

  Alpine.magic('useWindowSize', (_, { cleanup }) => () => {
    const data = Alpine.reactive<UseWindowSizeState>({ width: null, height: null });

    const [observe, unobserve] = useVisibility((width, height) => {
      data.width = width;
      data.height = height;
    });

    observe();
    cleanup(unobserve);

    return data;
  });
};
