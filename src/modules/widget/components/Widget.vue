<script setup>
import { reactive, defineEmits } from 'vue'
import Button from '@/shared/components/ui/button/Button.vue'
import InputItem from '@/shared/components/ui/InputItem.vue'
import Header from './Header.vue'

// const emit = defineEmits(['submit'])

// const inputs = reactive({
//   username: '',
//   email: '',
//   password: ''
// })

// const handleSubmit = () => {
//   emit('submit', inputs)
// }
</script>

<template>
  <div class="widget max-w-screen-lg border-1">
    <Header />
    <div class="input-wrapper">
      <InputItem
        class="border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
        type="text"
        :placeholder="'Search'"
        v-model="inputValue"
      />
    </div>
  </div>
</template>

<style lang="scss">
.widget {
  border: 1px solid #dce5ef;
  background: #fff;
  border-radius: 10px;
}
</style>
