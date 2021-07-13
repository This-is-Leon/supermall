<template>
  <div id="home">
    <nav-bar class="home-nav">
      <span slot="center">购物街</span>
    </nav-bar>

    <scroll 
    class="content" 
    ref="scroll" 
    :probe-type="3" 
    @scroll="contentScroll"
    :pull-up-load="true"
    @pulling="loadMore">
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <feature-view/>
      <tab-control class="tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick" />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>

    <!-- <ul>
      <li>滴滴滴</li>
      <li>滴滴滴</li>
      <li>滴滴滴</li>
      <li>滴滴滴</li>
      <li>滴滴滴</li>
      <li>滴滴滴</li>
      <li>滴滴滴</li>
      <li>滴滴滴</li>
      <li>滴滴滴</li>
      <li>滴滴滴</li>
      <li>滴滴滴</li>
      <li>滴滴滴</li>
      <li>滴滴滴</li>
      <li>滴滴滴</li>
      <li>滴滴滴</li>
      <li>滴滴滴</li>
      <li>滴滴滴</li>
      <li>滴滴滴</li>
      <li>滴滴滴</li>
      <li>滴滴滴</li>
    </ul> -->
  </div>
</template>
<script>
  // 专用组件
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  // 公共组件
  import NavBar from '@/components/common/navbar/NavBar'
  import TabControl from '@/components/content/tabControl/TabControl'
  import GoodsList from '@/components/content/goods/GoodsList'
  import Scroll from '@/components/common/scroll/Scroll'
  import BackTop from '@/components/content/backTop/BackTop'


  import {getHomeMultidata, getHomeGoods } from 'network/home.js'


  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        isShowBackTop: false
      }
    },
    computed: {
      // 又进行一步封装
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    //全生命周期函数，在组件创建后获取接口数据
    created() {
      // 1.请求多个数据
      this.getHomeMultidata()

      // 2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

    },

    methods: {
      // 事件监听相关方法
      tabClick(index) {
        switch (index) {
          case 0: 
            this.currentType = 'pop';
            break
          case 1: 
            this.currentType = 'new';
            break
          case 2: 
            this.currentType = 'sell';
            break
        }
      },


      // 网络请求相关的方法
      getHomeMultidata() {
        getHomeMultidata().then(res => {
        // this.banners = res.jokes;
        // this.recommends = res.jokes;

        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // console.log(res);
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1; //当进行复次调用的时候page就会不断增加
        getHomeGoods(type, page).then(res => {
          //运用扩展运算符把list数据一个一个push进去，相当于for循环的效果
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;

          this.$refs.scroll.finishPullUp()
          //更新betterScroll
          this.$refs.scroll.scroll.refresh()

        })
      },

      backClick() {

        //第一个scroll是组件、第二个是scroll是data对象
        // this.$refs.scroll.scroll.scrollTo(0, 0, 500)
        //将scollTo封装成一个方法
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      contentScroll(position) {
        //根据等号右侧条件判断true or false
        this.isShowBackTop = Math.abs(position.y) > 1000
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
        
      }

    }
    
  }
  
</script>
<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: white;

    position: fixed;
    left: 0;
    right: 0;
    top: 0px;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    /* 防止透明 */
    background-color: #fff; 
    z-index: 9;
  }

  .content {
    height: calc(100vh - 93px);
    overflow: hidden;
  }
</style>