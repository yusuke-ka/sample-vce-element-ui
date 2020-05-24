import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import vueCustomElement from "vue-custom-element";
import Table from "./table.vue";

Vue.use(vueCustomElement);
Vue.use(ElementUI);

Vue.config.ignoredElements = ["vce-table"];
Vue.customElement("vce-table", Table); // shadowDOM化すると中のCSSが効かない
