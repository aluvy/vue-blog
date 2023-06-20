<template>
  <div class="detail_ttl">
    <h2>{{ blogList[num].title }}</h2>
    <p>{{ blogList[num].date }}</p>
  </div>
  <div class="detail_content">
    {{ blogList[num].content }}
  </div>
  
  
  <div class="detail_tab">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link class="nav-link active" aria-current="page" :to="`/detail/${num}/author`">Ahthor</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="`/detail/${num}/comment`">Comment</router-link>
      </li>
    </ul>
  </div>

  <router-view></router-view>

  <div class="detail_foot">
    <router-link to="/list" class="btn btn-secondary">글목록</router-link>
  </div>
</template>

<script>
export default {
  name: 'compList',
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
.detail_ttl{text-align:center; padding:3rem 2rem;}
.detail_ttl h2{font-weight:700;}
.detail_ttl p{margin:1rem 0 0;}
.detail_content{border-top:1px solid #eee; border-bottom:1px solid #eee; padding:3rem 2rem;}

.detail_tab{padding:2rem 1rem;}

.detail_foot{text-align:center; padding:2rem;}
.detail_foot .btn-secondary{color:#fff;}
</style>