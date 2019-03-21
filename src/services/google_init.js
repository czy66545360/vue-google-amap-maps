/**
 * 谷歌地图初始化
 */

let google_init = async function (opts) {
  let google = null;

  /**
   * 加载
   * @private
   */
  let _load = function (config) {
    const script = window.document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = `${config.protocol}://${config.google_host_and_path}/api/js?key=${config.google_key}`;
    window.document.head.appendChild(script);

    return new Promise(resolve => {
      const onreadystatechange = () => {
        console.log(`google 地图加载完成`);
        google = window.google.maps;
        resolve(google);
      };
      script.addEventListener('load', onreadystatechange, false);
    });
  };
  if (google) {
    return google;
  } else {
    google = await _load(opts);
    return google;
  }
};

export default google_init;
