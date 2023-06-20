<template>
  <div class="blog_home">
    <h4>Vue 개발자의 블로그 입니다.</h4>
    <p>- Vue로 만들었음 -</p>
  </div>
</template>

<script>
export default {
  name: 'compHome',
  data(){
    return {
      
    }
  },
  props: {
    // blogList: Array
  }
}
</script>

<style>
.blog_home{text-align:center; padding:2rem;}
.blog_home h3{font-weight:700;}
</style>
