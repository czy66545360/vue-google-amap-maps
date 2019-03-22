# Vuep 使用

<vuep template="#example"></vuep>

<script v-pre type="text/x-template" id="example">
    <template>
    <div style="position: fixed;z-index: 300;width: 100%;padding: 12px 0;background: #fff">
          lnglat:{{map.center}}
          zoom:{{map.zoom}}
        </div>
        <g-a-map :center="map.center" :zoom="map.zoom" @click="map_click" @zoom_change="zoom_change" @right_click="right_click"
                 @drag="drag"></g-a-map>
        <div class="box">
          <div class="but" @click="checkMap">
            切换{{mapType==='amap'?'谷歌':'高德'}}地图
          </div>
          <div class="but" @click="change_center">
            移动地图
          </div>
          <div class="but" @click="map.zoom+=1">
            放大地图
          </div>
          <div class="but" @click="map.zoom-=1">
            缩小地图
          </div>
        </div>
    </template>
    <script>
      import {GAMaps} from './GAMaps'
    
      export default {
        components: {},
        computed: {},
        data () {
          return {
            map: {
              center: {lng: 103.86338, lat: 30.68973},
              zoom: 16
            },
            state: true,
            mapType: 'amap'
          }
        },
        methods: {
          checkMap () {
            if (GAMaps.config.map_type === 'google') {
              GAMaps.set_map_type('amap')
              // this.mapType = 'amap'
            } else {
              GAMaps.set_map_type('google')
              // this.mapType = 'google'
            }
          },
          map_click (e) {
            console.log(e)
          },
          zoom_change (e) {
            console.log(e)
          },
          move_end (e) {
            console.log(e)
          },
          right_click (e) {
            console.log(e)
          },
          drag (e) {
            console.log(e)
          },
          change_center () {
            let center = this.map.center
            this.map.center = {lng: center.lng - 0.002, lat: center.lat}
          }
        },
        mounted () {
          this.state = false
        }
      };
    </script>
</script>
