import amaps_init from '../services/amap_init';
import google_init from '../services/google_init';
import default_config from '../services/config';
import Map from './Map/index';
import LngLat from './LngLat/index';


class GAMaps_init {
  /**
   * 加载
   * @private
   */
  async _load () {
    if (this.config.amap_key) {
      this.$amap = await amaps_init(this.config);
    }
    if (this.config.google_key) {
      this.$google = await google_init(this.config);
    }
  }

  /**
   * Map 的操作类
   * @type {{GAMaps: GAMaps.Map}}
   */
  Map = (id, opts) => {
    return new Map(id, opts);
  };
  /**
   * LngLat 的操作类
   * @type {{GAMaps: GAMaps.LngLat}}
   */
  LngLat = (id, opts) => {
    return new LngLat(id, opts);
  };

  /**
   * new 初始化
   * @param opts
   */
  constructor (opts) {
    this.config = opts;
    this._load(opts);
  }

  /**
   * 注册事件
   * @param name
   * @param callback
   */
  on = (name, callback) => {
    let events = this.event[name];
    if (events) {
      let events_length = this.event[name].length;
      for (let index = 0; index < events_length; index++) {
        if (callback == events[index]) {
          return;
        }
      }
      this.event[name].push(callback);
    }
  };

  /**
   * 移除事件
   * @param name
   * @param event
   */
  remove (name, event) {
    let events = this.event[name];
    if (events) {
      let events_length = this.event[name].length;
      for (let index = 0; index < events_length; index++) {
        if (events[index] === event) {
          events.replace(index, 1);
          return;
        }
      }
    }
  }

  /**
   * 已注册事件
   * @type {{change_map_type: null}}
   */
  event = {
    change_map_type: [],
    complete: []
  };

  /**
   * 设置地图类型 amap googles
   * @param map
   */
  set_map_type = (map) => {
    if (this.config.map_type) this.config.map_type = map;
    this.event.change_map_type.map(callback => {
      callback(map);
    });
  };

  /**
   * 获取地图类型
   * @returns {string|*}
   */
  get_map_type = () => {
    return this.config.map_type;
  };
}


var GAMaps = null;

var _load = function (opts) {
  let load_state = null;
  if (GAMaps) {
    return GAMaps;
  } else if (!load_state) {
    load_state = true;
    GAMaps = new GAMaps_init({...default_config, ...opts});
    window.GAMaps = GAMaps;
    return GAMaps;
  }
};

export {GAMaps, _load};
