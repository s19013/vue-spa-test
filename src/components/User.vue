<template>
  <div>
    <p>ユーザー情報</p>
    <router-link to="profile">プロフィール</router-link>|
    <router-link to="post">記事</router-link>
    <div class="green">
        <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookDetail',
  data() {
    return {
        
    }
  },
  methods: {
    
  },
  created() {
    if(this.$route.params.id > 4){ this.$router.push('/book') }
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
.green{
    border:#42b983 solid 2px
}
</style>
