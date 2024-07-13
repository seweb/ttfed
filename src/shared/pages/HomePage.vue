<script setup>
import { useUserStore } from '@/stores/user';
import { useCartStore } from '@/stores/cart';

const userStore = useUserStore();
const cartStore = useCartStore();

const login = () => {
  userStore.setUserInfo({ name: 'John Doe' });
};

const addItemToCart = () => {
  cartStore.addItem({ name: 'New Item' });
};
</script>

<template>
  <div class="home-page p-4 bg-gray-100">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-2xl font-bold mb-4">User Info</h1>
      <p class="mb-4" v-if="userStore.userInfo?.name">
        {{ userStore.userInfo.name }}
      </p>
      <button
        @click="login"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Login
      </button>

      <h2 class="text-2xl font-bold mt-8 mb-4">Cart</h2>
      <ul class="list-disc pl-5 mb-4">
        <li v-for="(item, index) in cartStore.items" :key="index" class="mb-2">
          {{ item.name }}
        </li>
      </ul>
      <button
        @click="addItemToCart"
        class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add Item
      </button>
    </div>
  </div>
</template>
