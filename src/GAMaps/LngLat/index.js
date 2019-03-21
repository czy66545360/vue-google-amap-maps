import {GAMaps} from '../index';
import event from './event';
import utils from '../utils';

export default async function LngLat ({lng, lat}) {
  let map_type = GAMaps.config.map_type;
  if (!lng || !lat) {
    throw new Error(lng, lat);
  }
  let _lnglat = await utils.get_map(map_type, event.name[map_type]);
  let lnglat = null;
  if (map_type === 'amap') {
    lnglat = new _lnglat(lng, lat);
  } else {
    lnglat = new _lnglat({lng, lat});
  }
  return lnglat;
}
