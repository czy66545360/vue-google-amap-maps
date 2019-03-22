import './style.css';
import GA_Map from './packages/Map';
import {GAMaps, _load} from './GAMaps';
import './router';

let components = [
  GA_Map
];

const install = function (Vue, opts = {}) {
  if (!GAMaps) {
    _load(opts);
  }
  // Vue.prototype.$GAMaps = GAMaps;
  components.map(_component => {
    Vue.component(_component.name, _component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default GAMaps

export {GAMaps, install};
