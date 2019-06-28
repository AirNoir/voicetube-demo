<template>
  <div id="app">
    <VideoList />
  </div>
</template>

<script>
import VideoList from '@/components/VideoList.vue'
import '@/assets/css/main.less'

export default {
  name: 'app',
  components: {
    VideoList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
