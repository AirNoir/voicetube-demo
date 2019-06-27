import Vue from 'vue';
import Vuex from 'vuex';
import video from './modules/video'

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    video
  },
  strict: debug,
  //plugins: debug ? [createLogger()] : []
});