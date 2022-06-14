<template>
  <div class="hello">
    <!-- <router-link to="/">home</router-link>|
    <router-link to="/second" >second</router-link>|
    <router-link to="/book">booklist</router-link> -->
    <ul>
        <li
        @click="showBookDetail(book.id)"
        v-for="book in books" :key="book.id">
            {{book.title}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'bookList',
  data() {
    return {
        bookIndex:-1,
        books:[
            {id:1,title:'タイトル1',content:'本の内容1'},
            {id:2,title:'タイトル2',content:'本の内容2'},
            {id:3,title:'タイトル3',content:'本の内容3'},
        ]
    }
  },
  props: {
    msg: String
  },
  methods: {
    showBookDetail(id){
        this.bookIndex = id -1
        this.$router.push({
            name:'book',
            params:{
                id     :this.books[this.bookIndex].id,
                title  :this.books[this.bookIndex].title,
                content:this.books[this.bookIndex].content,
            }
        })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
