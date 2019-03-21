<template>
  <div class="GA_Map_container">
    <div v-if="map_state" class="GA_Map" ref="GA_Map"></div>
    <slot></slot>
  </div>
</template>

<script>
  import {GAMaps} from '../../GAMaps/index'
  import mixins from '../mixins'

  export default {
    name: 'GAMap',
    mixins: [mixins],
    props: {
      center: {},
      zoom: {},
      opts: {}
    },
    data () {
      return {
        $GA_Map_Component: null,
        map_state: true,
        children_state: false,
      }
    },
    methods: {
      /**
       * 创建地图
       */
      create () {
        this.map_state = false;
        this.children_state = false;
        this.$nextTick(() => {
          this.map_state = true;
          this.$nextTick(async () => {
            let opts = {
              ...this.$props,
              ...this.$props.opts
            };
            delete opts.opts;
            this.$GA_Map_Component = await new GAMaps.Map(this.$refs.GA_Map, opts);
            this.children_state = true;
            if (this._set_listeners_watch) this._set_listeners_watch();
            if (this._remove_props_watch) this._remove_props_watch();
            if (this._set_props_watch) this._set_props_watch();
          })
        })
      }
    },
    mounted () {
      this.create();
      GAMaps.on('change_map_type', () => {
        this.create()
      });
    }
  }
</script>
