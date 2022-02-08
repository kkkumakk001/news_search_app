# news_search

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# news_search_app
ニュース記事検索サイト

(工夫した点)  
・メニュー外をクリックした時に閉じるようにした  
・同ページ内で遷移する際のエラーの解消(VueRouter)  
・検索窓に入力したワードでAxiosを叩くためにVuexを導入した  
・何時間、何日前の記事かを表示  


(今後の展望、改善点)  
・スーパーリロードの追加  
・ページ遷移時に次のページの用意が完了してから遷移させるようにする  