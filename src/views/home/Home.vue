<template>
  <div id="home">
    <nav-bar class="home-nav">
      <span slot="center">购物街</span>
    </nav-bar>
    <home-swiper :banners="banners" ></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>
<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'

  import {getHomeMultidata} from 'network/home'


  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    //全生命周期函数，在组件创建后获取接口数据
    created() {
      // 1.请求多个数据
      getHomeMultidata().then(res => {
        // this.banners = res.jokes;
        // this.recommends = res.jokes;

        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // console.log(res);
      })
    }
  }
</script>
<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: white;
  }
</style>