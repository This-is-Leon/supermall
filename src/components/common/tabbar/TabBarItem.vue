<template>
  <div>
    <div @mouseover="btnClick" @mouseout="btnClick">
      <slot v-if="isActive" name="item-icon"></slot>
      <slot v-else name="item-icon-active"></slot>
      <div :style="activeStyle"><slot  name="item-text"></slot></div>
      <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
      <div>首页</div> -->
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TabBarItem',
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        isActive: true,
      }
    },
    computed: {
      activeStyle() {
        return !this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      btnClick() {
        this.isActive = !this.isActive;
        this.$router.replace(this.path)
      }
    }

  }
</script>
<style scoped>
  div {
      text-align: center;
      height: 49px;
      font-size: 14px;
    }
  div img {
    width: 24px;
    height: 24px;
    vertical-align: middle; /* 减小图片与文字间的间隙 */
    margin-bottom: 2px;
  }
  /* .active {
    color: pink;
  } */
</style>