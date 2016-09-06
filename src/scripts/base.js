import ReactDOM from 'react-dom'

// import AppProductPreview from './components/ProductPreview.jsx';

/*´´´´´´´´´´´´´´´´´´´´´
	UI animation
  ```````````````````*/
const UI = {
  filterScroll: function(el){
    const wrapperPage = document.querySelector('.wrapper-page');

    wrapperPage.addEventListener('scroll', function(e){
      el.style.padding = `${this.scrollTop}px 0 0 0`;
    });
  },

  init: function(){
    this.filterScroll(document.querySelector('.container-filter'));
  }
};

(() => {
  if (['complete', 'loaded', 'interactive'].includes(document.readyState)) {
    ready();
  } else {
    window.addEventListener('DOMContentLoaded', ready, false);
  }

  function ready() {
    // const appSpotippos = document.getElementById('app-spotippos');

    // if (appProductPreviewElement !== null) {
    //   ReactDOM.render(
    //     AppProductPreview,
    //     appProductPreviewElement
    //   );
    // }

    // UI.init();
  }
})();
