<script setup>
import { defineProps, defineEmits } from 'vue';

// interface ButtonProps {
//   class: string
//   type: 'button' | 'submit' | 'reset' | undefined
//   disabled?: boolean
//   text: string
//   isLoading?: boolean
// }

const props = defineProps({
  class: String,
  type: {
    validator: (value) => ['button', 'submit', 'reset'].includes(value),
    default: 'button'
  },
  disabled: Boolean,
  text: String
});

// const emit = defineEmits<{
//   (e: 'submit'): void
// }>()
const emits = defineEmits(['submit']);
</script>

<template>
  <button
    :class="props.class"
    :type="props.type"
    :disabled="props.disabled"
    @submit="emit('submit')"
  >
    <span class="button-text">{{ props.text }}</span>
  </button>
</template>

<style scoped lang="scss"></style>
