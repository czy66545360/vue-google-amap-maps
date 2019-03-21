// MoorSwitch 是对应组件的名字，要记得在 moor-Map.vue 文件中还是 name 属性哦
import GAMap from './index.vue';

GAMap.install = Vue => Vue.component(GAMap.name, GAMap);

export default GAMap;
