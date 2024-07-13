<script setup>
import { reactive, defineEmits } from 'vue';
import Button from '@/shared/components/ui/button/Button.vue';
import InputItem from '@/shared/components/ui/InputItem.vue';

const emit = defineEmits(['submit']);

const inputs = reactive({
  username: '',
  email: '',
  password: ''
});

const handleSubmit = () => {
  emit('submit', inputs);
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <InputItem
      class="border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
      type="text"
      :placeholder="'User name'"
      v-model="inputs.username"
    />
    <InputItem
      class="border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
      type="text"
      :placeholder="'Email'"
      v-model="inputs.email"
    />
    <InputItem
      class="border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
      type="text"
      :placeholder="'Password'"
      v-model="inputs.password"
    />
    <Button
      class="btn"
      type="submit"
      :disabled="false"
      :text="'submit form'"
      @submit="handleSubmit"
    />
  </form>
</template>
