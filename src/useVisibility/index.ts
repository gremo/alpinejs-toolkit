import type { Alpine } from 'alpinejs';

interface UseVisibilityState {
  isVisible: boolean;
}

export default (Alpine: Alpine) => {
  const useVisibility = (onChange: (isVisible: boolean) => void) => {
    const onVisibilityChange = () => onChange(!document.hidden);

    const observe = () => document.addEventListener('visibilitychange', onVisibilityChange);
    const unobserve = () => document.removeEventListener('visibilitychange', onVisibilityChange);

    return [observe, unobserve];
  };

  Alpine.magic('useVisibility', (_, { cleanup }) => {
    const state = Alpine.reactive<UseVisibilityState>({
      isVisible: !document.hidden,
    });

    const [observe, unobserve] = useVisibility(isVisible => (state.isVisible = isVisible));

    observe();
    cleanup(unobserve);

    return () => state;
  });
};
