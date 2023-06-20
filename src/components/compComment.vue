<template>
  <div class="comment_wrap">
    코멘트
  </div>
</template>

<script>
export default {
  name: 'compComment',
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
.comment_wrap{padding:1rem 2rem;}
</style>