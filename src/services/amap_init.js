/**
 * 高德地图初始化
 */

let amaps_init = async function (opts) {
  let amaps = null;
  /**
   * 加载
   * @private
   */
  let _load = (config) => {
    const script = window.document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = `${config.protocol}://${config.amap_host_and_path}?v=${config.amap_v}&key=${config.amap_key}`;
    window.document.head.appendChild(script);
    return new Promise(resolve => {
      const onreadystatechange = () => {
        console.log(`amap 地图加载完成`);
        amaps = window.AMap;
        resolve(amaps);
      };
      script.addEventListener('load', onreadystatechange, false);
    });
  };
  if (amaps) {
    return amaps;
  } else {
    amaps = await _load(opts);
    return amaps;
  }
};

export default amaps_init;
