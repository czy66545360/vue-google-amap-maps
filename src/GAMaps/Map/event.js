export default {
  /**
   * 组件名称类
   */
  name: {
    amap: 'Map',
    google: 'Map'
  },
  /**
   * 属性
   */
  attribute: {
    zoom: {
      amap: 'zoom',
      google: 'zoom'
    },
    center: {
      amap: 'center',
      google: 'center'
    }
  },
  /**
   * 设置属性
   */
  set: {
    setCenter: {
      amap: 'setCenter',
      google: 'panTo'
    }
  },
  /**
   * 事件监听
   */
  on: {
    /**
     * 缩放结束
     */
    zoom_change: {
      amap: 'zoomchange',
      google: 'zoom_changed'
    },
    /**
     * 平移 缩放结束
     */
    move_end: {
      amap: 'moveend',
      google: 'idle'
    },
    /**
     * 拖拽过程
     */
    drag: {
      amap: 'dragging',
      google: 'drag'
    },
    /**
     * 右键
     */
    right_click: {
      amap: 'rightclick',
      google: 'rightclick'
    }
  }
};
