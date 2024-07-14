<script setup>
import { ref, computed } from 'vue'
import Widget from '../components/Widget.vue'
import Button from '@/shared/components/ui/button/Button.vue'
const onSubmit = (form) => {
  console.log('forData', form)
}

const isVisible = ref(false)
const toggleWidget = () => {
  isVisible.value = !isVisible.value
}
const btnText = computed(() => {
  return isVisible.value ? 'show' : 'hide'
})
</script>

<template>
  <div class="wrapper">
    <div>{{ isVisible }}</div>
    <Button
      v-if="!isVisible"
      class="btn"
      type="button"
      :disabled="false"
      :text="`${btnText}`"
      @click="toggleWidget"
    />
    <Widget @submit="onSubmit" />
  </div>
</template>
