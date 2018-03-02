<template>
  <div class="hello">
    <img src="" alt="">
    <ul>
      <li v-for="item in lazyloadCount" tracked-by="$index">
           <div v-lazy:background-image="imgIcon"></div>
            <img src="" v-lazy="lazyimg">

      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad,{
  preLoad:1.3,
  error:'../assets/timg.jpeg',
  loading:'./assets/timg.jpeg'
})
export default {
  name: 'HelloWorld',
  data () {
    return {
      lazyloadCount:[],
      msg: 'Welcome to Your Vue.js App',
      imgIcon:'../assets/timg.jpeg',
      lazyimg:"../assets/logo.png"
    }
  },
  created:function(){
    for(var i=0;i<50;i++){
      this.lazyloadCount.push(i)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 img[src='']{
   opacity:0;
 }
 .bg{
   width:.2rem;
   height:.9rem;
   background-repeat:no-repeat;
   background-size:cover;
 }
 li{
   list-style:none;
 }
</style>
