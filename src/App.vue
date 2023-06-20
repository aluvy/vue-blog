<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Vuelog</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" aria-current="page" class="nav-link active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/list" class="nav-link">List</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/detail/0" class="nav-link">Detail</router-link>
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
