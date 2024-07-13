<script script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  class: String,
  placeholder: String,
  rows: {
    type: Number,
    default: 5
  },
  type: {
    validator: (value) => ['text', 'number'].includes(value),
    default: 'text'
  },
  modelValue: {
    type: [String, Number]
  }
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <fieldset class="form-group">
    <textarea
      :class="props.class"
      :type="props.type"
      :placeholder="props.placeholder"
      :value="props?.modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </fieldset>
</template>
