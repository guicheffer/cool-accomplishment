import ReactDOM from 'react-dom'

import AppSpotippos from './components/AppSpotippos.jsx';

(() => {
  const ready = () => {
    const appSpotippos = document.getElementById('app-spotippos');

    if (appSpotippos !== null) {
      ReactDOM.render(
        AppSpotippos,
        appSpotippos
      );
    }
  }

  if (['complete', 'loaded', 'interactive'].includes(document.readyState)) {
    ready();
  } else {
    window.addEventListener('DOMContentLoaded', ready, false);
  }
})();
