<template>
  <div class="detail_ttl">
    <h2>{{ blogList[0].title }}</h2>
    <p>{{ blogList[0].date }}</p>
  </div>
</template>

<script>
export default {
  name: 'compList',
  data(){
    return {
      
    }
  },
  props: {
    blogList: Array
  }
}
</script>

<style>
.detail_ttl{text-align:center; padding:3rem 2rem;}
.detail_ttl h2{font-weight:700;}
.detail_ttl p{margin:1rem 0 0;}
</style>
