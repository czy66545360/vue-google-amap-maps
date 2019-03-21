import {GAMaps} from '../index';

export default {
  /**
   * 获取 地图脚本
   * @param name
   * @param className
   * @returns {Promise<any>}
   */
  get_map: function (name, className) {
    return new Promise(resolve => {
      let setOut = null;
      const check_map = () => {
        if (GAMaps && GAMaps[`$${name}`]) {
          if (setOut) clearTimeout(setOut);
          if (className) {
            resolve(GAMaps[`$${name}`][className]);
          } else if (name) {
            resolve(GAMaps[`$${name}`]);
          }
        } else {
          setOut = setTimeout(check_map, 500);
        }
      };
      check_map();
    });
  },
  /**
   * 增加事件监听
   * @param component
   * @param name
   * @param callback
   */
  add_listener: function (component, name, callback) {
    let map_type = GAMaps.config.map_type;
    let target = component.$component;
    if (!target) throw Error(target);
    if (!name) throw Error(name);
    if (!callback) throw Error(callback);
    if (component.on[name]) {
      component.on[name](callback);
    } else if (map_type === 'amap') {
      target.on(name, callback);
    } else if (map_type === 'google') {
      target.addListener(name, callback);
    }
  }
};
