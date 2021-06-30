<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <div><img :src="item.image" alt=""></div> 
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'RecommendView',
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>
<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px; /* 上、左右、下 */
    border-bottom: 10px solid #eee;
  }
  /* .recommend-item {
    flex: 1;
    width: 50px;
  }  */
  .recommend img {
    margin: 0 7px;
    width: 90%;
  }
</style>