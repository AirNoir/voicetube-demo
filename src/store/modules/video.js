import api from '@/api'
import { errorLogger } from '@/util.js';

const state = {
  videoList: [],
  showList: [],
  orderTabs: [
    { type: 'date', name: '發布時間'},
    { type: 'views', name: '觀看次數'},
    { type: 'collections', name: '收藏次數'},
  ],
  filterTabs: [
    { type: 'duration0', name: '不限', start: null, end: null },
    { type: 'duration1', name: '4分鐘以下', start: 0, end: 299 },
    { type: 'duration2', name: '5 - 10 分鐘', start: 300, end: 599 },
    { type: 'duration3', name: '超過10 分鐘', start: 599, end: null},
  ],
  activeOrderType: 'date',
  activeFilterType: { type: 'duration0', name: '不限', start: null, end: null },
};

// getters
const getters = {
  
};

const actions = {
  async getVideoList({commit}) {
    await api.getVideoList().then( data => {
      commit('getVideoList', data);   
      commit('filterAndOrder')
    }).catch( err => {
      errorLogger(err, 'actions: getVideoList');
    });
  },
  setOrder({commit}, type) {
    commit('setOrder', type)
    commit('filterAndOrder')
  },

  setFilter({commit}, type) {
    commit('setFilter', type)
    commit('filterAndOrder')
  },

  filterAndOrder({commit}) {
    commit('filterAndOrder')
  }
};

const mutations = {
  getVideoList (state, payload) {
    state.videoList = payload;
  },
  setOrder(state, payload) {
    state.activeOrderType = payload
  },
  setFilter(state, payload) {
    state.activeFilterType = payload
  },

  filterAndOrder(state) {
    const newList = state.videoList.slice(0);
    const orderType = state.activeOrderType
    const duration = state.activeFilterType
    state.showList = newList.filter(video => {
      if (duration.start !== null && video.duration < duration.start) {
        return false;
      }
      if(duration.end !== null && video.duration > duration.end) {
        return false;
      }
      return true;
    }).sort( (prev, next) => {
      let flag = null;
      switch (orderType) {
        case 'date':
          flag = next.publish - prev.publish
          break;
        case 'views':
          flag = next.views - prev.views
          break;
        case 'collections':
          flag = next.collectCount - prev.collectCount
          break;
        default:
          flag = next.publish - prev.publish
          break;
      }
      return flag
    })
  }
};


export default {
  namespaced: true,
  state: state,
  getters,
  actions,
  mutations
}
