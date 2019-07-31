import "core-js";
import "regenerator-runtime/runtime";
import Vue from 'vue';
import store from './store';
import vPageWrapper from './components/vPageWrapper';

new Vue({
  el: '#app',
  store,
  components: {
    vPageWrapper,
  },
});
