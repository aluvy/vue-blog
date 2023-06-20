<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Vuelog</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <router-link to="/list" class="nav-link">List</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./detail">Detail</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view :blogList="blogList"></router-view>

</template>

<script>
import blogList from './list.js'

export default {
  name: 'App',
  data(){
    return {
      blogList : blogList,
    }
  },
  components: {
  }
}
</script>

<style>
</style>
