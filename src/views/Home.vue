<template>
  <div class="topic topic_top">
    <h1 class="page_title">【トップページ】</h1>
    <div class="articles">
        <article class="art" v-for="(item, key) in items" :key="key">
          <div class="art_contents">
            <a :href="item.link" target="_blank">
              <p>{{ item.title }}</p>
            </a>
            <p class="art_author_date">{{ item.author }} ・ {{ item.published_date | elapsedTime() }}</p>
            <!-- <p class="art_published_date">{{ item.published_date | elapsedTime() }}</p> -->
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
  name: 'Top',
  data() {
    return {
      items: null,
      keyword: '',
      message: ''
    }
  },
  watch: {
    keyword: function() {
      // this.message = 'waiting for you to stop typing...'
      this.debouncedGetNews()
    }
  },
  mounted: function() {
    this.keyword = 'google'
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
      // this.message = 'loading...';
      const vm = this
      const options = {
        method: 'GET',
        url: 'https://free-news.p.rapidapi.com/v1/search',
        params: {
          q: this.keyword,
          lang: 'ja',
          // topic: 'sport'
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
// * {
//   padding: 0;
//   margin: 0;
//   box-sizing: border-box;
// }

// [v-cloak] {
//   display: none;
// }

// .topic {
//   padding: 0 10px;
// }
// h1 {
//   text-align: center;
//   margin: 85px 0 20px;
//   font-family: serif;
//   font-size: 24px;
// }
// .articles {
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
// }  
// .art {
//   display: flex;
//   justify-content: space-between;
//   padding: 10px 20px;
//   margin:0 20px 20px;
//   width: 100%;
//   max-width: 500px;
//   border: 1px solid rgba(0, 0, 0, 0.2);
//   border-radius: 10px;
//   /* box-shadow: 0 0 1px lightgray; */
//   &_contents {
//     margin-right: 25px;
//   }
//   a {
//     text-decoration: none;
//     color: #000;
//     &:hover {
//       text-decoration: underline;
//     }
//   }
//   &_img {
//     width: 100px;
//     height: 100px;
//     border-radius: 10px;
//   }
//   &_author_date {
//     opacity: 0.8;
//     font-size: 14px;
//   }
// }
</style>