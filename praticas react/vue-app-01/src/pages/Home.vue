<template>
  <div class="home">
    <Header :mudarPagina="mudarPagina" />
    <Profile />
    <BlogList />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Profile from '../components/Profile.vue'
import BlogList from '../components/BlogList.vue'

export default{
    name: "Home",
    props: {
        mudarPagina: {
        type: Function,
        required: true
    }
  },

    components: {
        Header,
        Profile,
        BlogList
  }

}
</script>

<style scoped>
.home {
  padding: 20px;
}

.home section {
  margin-bottom: 30px;
}
</style>