<template>
  <div>
    <ul>
        <li v-for="(item,index) in [1,2,3,4,5,6,7,8,9]" :key="index">
            <img src="" v-lazy="img.src" alt="">
        </li>
    </ul>
  </div>
</template>
<script>

export default {
  name:'lazy',
  data(){
      return{
          pics:[],
          img:{
              src:'assets/logo.png'
          }
      }
  },
  
}
</script>
<style coped>
    li{
        list-style: none;
    }
    img{
        width:100%;
    }

</style>


