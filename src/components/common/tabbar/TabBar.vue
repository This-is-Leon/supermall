<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>
<script>
  export default {
    name: 'TabBar'
  }
</script>
<style scoped>
  #tab-bar {
        /* 父盒子设置伸缩布局 */
        display: flex;
        justify-content: space-around; /* 相当于给每个盒子添加了左右margin外边距 */
        background-color: #f6f6f6;

        /* 把盒子移到下面 */
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0px -1px 1px rgba(0,0,0,0.1);
      };
</style>