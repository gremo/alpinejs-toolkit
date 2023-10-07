import UseWindowsSize from './index';

document.addEventListener('alpine:init', () => {
  UseWindowsSize(window.Alpine);
});
