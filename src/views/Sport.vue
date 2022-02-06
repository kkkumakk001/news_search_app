<template>
  <div class="topic topic_sports">
    <h1 class="page_title">【スポーツ】</h1>
    <div class="articles">
        <article class="art" v-for="(item, key) in items" :key="key">
          <div class="art_contents">
            <a :href="item.link" target="_blank">
              <p>{{ item.title }}</p>
            </a>
            <p class="art_author_date">{{ item.author }} ・ {{ item.published_date | elapsedTime() }}</p>
          </div>
          <div class="art_tmb">
            <img class="art_img" :src="item.media">
          </div>
        </article>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'Sports',
  data() {
    return {
      items: null,
      keyword: '',
      message: ''
    }
  },
  watch: {
    keyword: function() {
      this.debouncedGetNews()
    }
  },
  mounted: function() {
    this.keyword = 'オリンピック'
    this.debouncedGetNews = _.debounce(this.getNews, 1000)
  },
  filters: {
    elapsedTime: function(val) {
      let setNowDate = new Date()
      let nowDate = setNowDate.getTime()
      let publishedDate = Date.parse(val)
      let elapsedTime = (nowDate - publishedDate) / (1000 * 60 * 60)
      if(elapsedTime < 1) {
        return Math.floor(elapsedTime * 60) + '分前'
      } else if (elapsedTime < 24) {
        return Math.floor(elapsedTime) + '時間前'
      } else {
        return Math.floor(elapsedTime / 24) + '日前'
      }
    }
  },
  methods: {
    getNews() {
      if(this.keyword === '') {
        console.log('空文字')
        this.items = null
        this.message = ''
        return
      }
      const vm = this
      const options = {
        method: 'GET',
        url: 'https://free-news.p.rapidapi.com/v1/search',
        params: {
          q: this.keyword,
          lang: 'ja',
        },
        headers: {
          'x-rapidapi-key': '39b9878d8fmshb826941db19e36ap123af3jsn340c04941738',
          'x-rapidapi-host': 'free-news.p.rapidapi.com'
        }
      }
      this.$axios.request(options)
          .then(function(response){
            console.log(response)
            vm.items = response.data.articles
          })
          .catch(function(error){
            vm.message = 'Error!' + error
          })
          .finally(function() {
            vm.message = ''
          })
    }, //getNews()
  } //methods option
} //export default
</script>

<style lang="scss">

</style>