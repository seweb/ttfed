<script setup>
import Widget from '../components/Widget.vue'
const onSubmit = (form) => {
  console.log('forData', form)
}
</script>

<template>
  <h1 class="text-4xl font-bold text-gray-800 my-4">Contacts page</h1>
  <Widget @submit="onSubmit" />
</template>
