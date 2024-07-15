<script setup>
const props = defineProps({
  class: String,
  type: {
    validator: (value) => ['button', 'submit', 'reset'].includes(value),
    default: 'button'
  },
  disabled: Boolean,
  text: String,
  value: Number
})

const emits = defineEmits(['submit'])
</script>

<template>
  <button
    :class="props.class"
    :type="props.type"
    :disabled="props.disabled"
    @submit="emit('submit')"
  >
    <span class="btn-text">{{ props.text }}</span>
    <span class="btn-value">{{ props.value }}</span>
  </button>
</template>

<style scoped lang="scss"></style>
