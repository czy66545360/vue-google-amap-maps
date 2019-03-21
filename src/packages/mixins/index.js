import uppercamelcase from 'uppercamelcase';

export default {
  methods: {
    /**
     * 注册属性变化监听
     * @private
     */
    _set_props_watch () {
      let $GA_Map_Component = this.$GA_Map_Component;
      if (!$GA_Map_Component) return;
      this._bundleFun = [];
      const $props = this.$props;
      for (let prop in $props) {
        if (prop === 'opts') {
          // console.log(this.$listeners);
        } else {
          if ($GA_Map_Component[`set${uppercamelcase(prop)}`]) {
            const watch = this.$watch(prop, (value) => {
              $GA_Map_Component[`set${uppercamelcase(prop)}`](value);
            });
            this._bundleFun.push(watch);
          } else if ($GA_Map_Component.$component[`set${uppercamelcase(prop)}`]) {
            const watch = this.$watch(prop, (value) => {
              $GA_Map_Component.$component[`set${uppercamelcase(prop)}`](value);
            });
            this._bundleFun.push(watch);
          }
        }
      }
    },
    /**
     * 移除监听
     * @private
     */
    _remove_props_watch () {
      if (this._bundleFun) this._bundleFun.forEach(watch => {
        watch();
      });
    },
    /**
     * 组件事件监听
     * @private
     */
    _set_listeners_watch () {
      let $GA_Map_Component = this.$GA_Map_Component;
      if (!$GA_Map_Component) return;
      let $listeners = this.$listeners;
      if ($listeners) {
        for (let event in $listeners) {
          // console.log(event, $GA_Map_Component);
          $GA_Map_Component.addListener(event, $listeners[event]);
        }
      }
    }
  }
};
