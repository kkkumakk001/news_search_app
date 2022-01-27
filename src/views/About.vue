<template>
  <div id="news_topic">
    <p>
      <input type="text" v-model="keyword">
    </p>
    <p>{{ message }}</p>
    <ul>
        <li v-for="(item, key) in items" :key="key">
          <a :href="item.link" target="_blank">
            {{ item.title }}
          </a>
        </li>
    </ul>

  </div>
</template>

<script>
  import _ from 'lodash';

  export default {
    name: 'newsSearch',
    data() {
      return {
        items: null,
        keyword: '',
        message: ''
      }
    },
    watch: {
      keyword: function() {
        this.message = 'waiting for you to stop typing...'
        this.debouncedGetNews()
      }
    },
    mounted: function() {
      // this.keyword = 'JavaScript'
      // this.getNews()
      this.debouncedGetNews = _.debounce(this.getNews, 1000)
    },
    methods: {
      getNews() {
        if(this.keyword === '') {
          console.log('空文字')
          this.items = null
          return
        }
        this.message = 'loading...';
        const vm = this
        const options = {
          method: 'GET',
          url: 'https://free-news.p.rapidapi.com/v1/search',
          params: {q: this.keyword, lang: 'en'},
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
      },
      getAnswer() {

      }
    }
  }
</script>
