import _Vue from "vue";
import VNode from "./VNode.vue";

export default {
  install (Vue: typeof _Vue): void {
    Vue.component("VNode", VNode);
  }
};

export { VNode };
