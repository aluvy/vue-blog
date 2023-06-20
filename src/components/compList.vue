<template>
  <div class="blog_list">
    <ul>
      <li v-for="(a, i) in blogList" :key="i">
        <!-- <a v-bind:href="`./detail/${a.number}`"> -->
        <a href="#" @click="$router.push(`/detail/${i}`)">
          <h5>{{ a.title }}</h5>
          <p>{{ a.content }}</p>
        </a>
      </li>
    </ul>
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
.blog_list ul{border-top:1px solid #aaa; margin:0; padding:0;}
.blog_list ul li{border-bottom:1px solid #ddd; padding:2rem;}
.blog_list ul li a{text-decoration: none; color:#222;}
.blog_list ul li h5{font-weight:700;}
.blog_list ul li p{margin:0.5rem 0 0;}
</style>
