import {GAMaps} from '../index';
import event from './event';
import utils from '../utils';

export default async function Map (id, opts) {
  let map_type = GAMaps.config.map_type;
  let set_event = event.set;
  let on_event = event.on;
  let component = {
    on: {}
  };
  let _map = await utils.get_map(map_type);
  opts.center = await new GAMaps.LngLat(opts.center);
  let $component = component.$component = new _map[event.name[map_type]](id, opts);

  /**
   * 设置地图位置
   * @param lng
   * @param lat
   * @returns {Promise<void>}
   */
  component.setCenter = async ({lng, lat}) => {
    if (!lng || !lat) throw new Error(lng, lat);
    let event = $component[set_event.setCenter[map_type]];
    let center = await new GAMaps.LngLat({lng, lat});
    if (event) $component[set_event.setCenter[map_type]](center);
  };

  /**
   * 增加事件
   * @param name
   * @param callback
   */
  component.addListener = (name, callback) => {
    if (on_event[name]) name = on_event[name][map_type];
    utils.add_listener(component, name, callback);
  };

  /**
   * 重构点击事件
   * @param callback
   */
  component.on.click = (callback) => {
    if (map_type === 'amap') {
      $component.on('click', (e) => {
        callback({
          type: 'click',
          lnglat: {lng: e.lnglat.lng, lat: e.lnglat.lat}
        });
      });
    } else if (map_type === 'google') {
      $component.addListener('click', (e) => {
        callback({
          type: 'click',
          lnglat: {lng: e.latLng.lng(), lat: e.latLng.lat()}
        });
      });
    }
  };

  return component;
}
