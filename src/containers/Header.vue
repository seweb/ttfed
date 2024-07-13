<template>
  <header class="bg-blue-600 text-white py-4 header">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-lg font-bold">Your Company</div>
      <nav class="space-x-4">
        <router-link to="/" class="hover:text-gray-300">Home</router-link>
        <router-link to="/about" class="hover:text-gray-300">About</router-link>
        <router-link to="/contacts" class="hover:text-gray-300"
          >Contacts</router-link
        >
        <!-- <a href="#" class="hover:text-gray-300">Home</a>
        <a href="#" class="hover:text-gray-300">About</a>
        <a href="#" class="hover:text-gray-300">Contact</a> -->
      </nav>
    </div>
  </header>
</template>
