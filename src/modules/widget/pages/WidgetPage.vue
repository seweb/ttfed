<script setup>
import ContactsForm from '../components/ContactsForm.vue';
const onSubmit = (form) => {
  console.log('forData', form);
};
</script>

<template>
  <h1 class="text-4xl font-bold text-gray-800 my-4">Contacts page</h1>
  <ContactsForm @submit="onSubmit" />
</template>
