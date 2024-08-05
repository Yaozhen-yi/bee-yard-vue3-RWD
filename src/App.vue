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
  margin-top: 10rem;
}
@media (min-width: 768px) {
  main{
  margin-top: 12rem;
}
}
@media (min-width: 912px) {
  main{
  margin-top: 12rem;
}
}
 
 @media (min-width: 1024px) {
  main{
  margin-top: 10rem;
}
 }
 @media (min-width: 1240px) {
  main{
  margin-top: 12rem;
}
 }
</style>
