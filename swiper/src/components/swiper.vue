<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
        <img src="http://res.easyepub.net/banner/cover2.jpg" alt="">
        <div class="desc">
          <h3>论如何杀死那个油腻猥琐的中年男人</h3>
        </div>
    </swiper-slide>
    <swiper-slide>
        <img src="http://res.easyepub.net/banner/cover1.jpg" alt="">
        <div class="desc">
          <h3>我给你讲个鬼故事：谁说我是人了</h3>
        </div> 
    </swiper-slide>
    <swiper-slide>
        <img src="http://res.easyepub.net/banner/cover1.jpg" alt="">
        <div>
            this is the third slide
        </div>
        </swiper-slide>
            <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    
  </swiper>
</template>
  
<script>
  // swiper options example:
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
            pagination:{el:".swiper-pagination"},
            slidesPerView:1,
            autoplay:{
                delay:1000,
                disableONInteraction:false
            },
            navigation:{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            preventClicks:false,
            slideToClickedSlide:true,
            spaceBetween:30,
            loop:true
        }
      }
    }
  }
</script>
<style scoped>

    img{
        width:200px;
        height:70px;
        display:inline-box;
    }
    swiper-slide div{
        display: inline-block;
        height:30px;
        line-height:30px;
        margin:0;
        padding:0;
    }
    .swiper-pagination-bullets{
        bottom:0px;
    }
</style>
