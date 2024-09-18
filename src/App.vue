<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/footer.vue'
</script>

<template>
    <NavBar />
    <main>
      <router-view></router-view>
    </main>
    <!-- <router-view></router-view> -->
    <Footer />
</template>

<style scoped>
main{
  margin-top: 130px;
}
@media (min-width: 768px) {
  main{
  margin-top: 160px;
}
}

</style>
