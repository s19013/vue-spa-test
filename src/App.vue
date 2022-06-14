<template>
  <div>
    <router-link to="/">home</router-link>|
    <router-link to="/second" >second</router-link>|
    <router-link to="/book">booklist</router-link>|
    <router-link to="/user/profile">User</router-link>
  </div>
  <div class="blue">
    <router-view/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.blue{
  border: solid 2px blue;
}
</style>
