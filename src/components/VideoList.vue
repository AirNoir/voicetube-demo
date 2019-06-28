<template>
  <div class="container">
    <div class="mobile-top-bar">
      <div class="menu" :class="{ 'menu-open': isMenuOpened }" @click="menuOpen">
        <div class="bar bar-1"></div>
        <div class="bar bar-2"></div>
        <div class="bar bar-3"></div>
      </div>
    </div>
    <div class="top-bar" :class="{ 'vertical-menu': isMenuOpened }">
      <div class="top-bar-section order-section">
        <div class="filter-type-title">排序</div>
        <div :class="{ 'active': activeOrderType === order.type}" @click="orderBy(order.type)"  class="filter-type" v-for="order in orderTabs" :key="order.type">
          {{ order.name}}
        </div>
      </div>
      <div class="top-bar-section length-section"> 
        <div class="filter-type-title">長度</div>
         <div 
         :class="{ 'active': activeFilterType.type === filter.type}" 
         @click="filterBy(filter)"  
         class="filter-type" 
         v-for="filter in filterTabs" 
         :key="filter.type">
          {{ filter.name}}
        </div>
      </div>
    </div>
    <hr>
    <h3 v-show="showList.length === 0">No Data!</h3>
    <div class="video-list-wrapper">
      <ul>
        <li v-for="video in showList" :key="video.id" > 
          <VideoCard :video-data="video" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import VideoCard from './VideoCard.vue'
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      isMenuOpened: false
    }
  },
  computed: {
    ...mapState({
      // videoList: state => state.video.videoList,
      showList: state => state.video.showList,
      orderTabs: state => state.video.orderTabs,
      filterTabs: state => state.video.filterTabs,
      activeOrderType: state => state.video.activeOrderType,
      activeFilterType: state => state.video.activeFilterType
    })
  },
  components: {
    VideoCard
  },
  methods: {
    ...mapActions({
      getVideoList: 'video/getVideoList',
      filterAndOrder: 'video/filterAndOrder',
      setOrder: 'video/setOrder',
      setFilter: 'video/setFilter',

    }),
    menuOpen() {
      this.isMenuOpened = !this.isMenuOpened
    },
    orderBy(type) {
      this.setOrder(type)
    },
    filterBy(type) {
      this.setFilter(type)
    },
    async init () {
      await this.getVideoList();
      
    }
  },
  created () {
    this.init()
  }
}
</script>

<style>

</style>
