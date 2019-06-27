<template>
  <div class="container">
    <div class="top-bar">
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
    <div class="video-list-wrapper">
      <VideoCard :video-data="video" v-for="video in showList" :key="video.id" />
    </div>
  </div>
</template>

<script>
import VideoCard from './VideoCard.vue'
import api from '@/api'
import { mapState, mapActions } from 'vuex'

export default {
  
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
    orderBy(type) {
      this.activeOrderType = type;
      this.setOrder(type)
      // this.filterAndOrder({
      //   orderType: this.activeOrderType ,
      //   duration: {
      //     start: this.activeFilterType.start,
      //     end: this.activeFilterType.end
      //   }
      // });
    },
    filterBy(type) {
      this.activeFilterType = type;
      this.setFilter(type)

      // this.filterAndOrder({
      //   orderType: this.activeOrderType ,
      //   duration: {
      //     start: this.activeFilterType.start,
      //     end: this.activeFilterType.end
      //   }
      // });
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
