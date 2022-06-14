<template>
  <div>
    <router-link to="/">home</router-link>|
    <router-link to="/second" >second</router-link>|
    <router-link to="/book">booklist</router-link>|
    <router-link to="/user/profile">User</router-link>
  </div>
  <div class="blue">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
  <div class="red">
    <router-view name = "sub"/>
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

<style lang="scss">
.fade{
  &-enter{
    transform: translate(-100px, 0);
    opacity: 0;
    &-to{
      opacity: 1;
    }
    &-active{
      transition: all 1s 0s ease;
    }
  }
  &-leave{
    transform: translate(0, 0);
    opacity: 1;
    &-to{
      transform: translate(100px, 0);
      opacity: 0;
    }
    &-active{
      transition: all .5s 0s ease;
    }
  }
}
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
.red{
  border: solid 2px red;
}
</style>
