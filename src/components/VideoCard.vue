<template>
  <div class="video-card">
    <div class="video-img" :style="getVideoImage">
      <!-- <img class="video-img" :src="video.thumbnail" alt=""> -->
      <span class="video-time-length">{{ $duration(video.duration) }}</span>
    </div>
    <div class="video-desc">
      <h3 class="video-title">
        {{ video.title }}
      </h3>
      <div class="headphone">
        <img :src="headphoneIcon" alt="">
        <span>{{ video.views }}</span>
      </div>
      <div class="label-list">
        <span class="subtitle-label">
          {{ subTitleLangMapping[video.captions[0]]}}
        </span>
        <span class="level-label">
          {{ levelMapping[video.level]}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import headphoneIcon from '@/assets/images/baseline-headset-24px.svg'

export default {
  props: ['videoData'],
  data () {
    return {
      headphoneIcon,
      levelMapping: {
        "1": "初級",
        "2": "中級",
        "3": "中高級",
        "4": "高級",
      },
      subTitleLangMapping: {
        "cht": "中文",
        "ja": "日文",
        "vi": "越南文",
        "en": "英文"
      }
    }
  },
  computed: {
    video () {
      return this.videoData || {}
    },
    getVideoImage() {
      if (this.video && this.video.thumbnail) {
        return `background-image: url(${this.video.thumbnail})`
      }
      return ''
    }
  },
  methods: {
   
  },
  mounted () {
  }

}
</script>

<style>

</style>
