<template>
  <div class="author_wrap">
    작가소개
  </div>
</template>

<script>
export default {
  name: 'compAuthor',
  data(){
    return {
      num: this.$route.params.id,
    }
  },
  props: {
    blogList: Array
  }
}
</script>

<style>
.author_wrap{padding:1rem 2rem;}
</style>