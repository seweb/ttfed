<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow p-6">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
