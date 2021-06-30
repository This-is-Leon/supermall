<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
  export default {
    name: 'NavBar'
  }
</script>
<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px; 
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
    /* background-color: pink; */
  }
  .left, .right {
    width: 60px;
    /* background-color: skyblue; */
  }
  .center {
    flex: 1;
    /* 因为left和right设置了width，那么剩余部分均会被flex占据 */
  }
</style>