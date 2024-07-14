<script setup>
import { reactive, defineEmits } from 'vue'
import Button from '@/shared/components/ui/button/Button.vue'
import InputItem from '@/shared/components/ui/inputItem/InputItem.vue'
import Header from '../header/Header.vue'

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
    <div class="input-wrapper px-4 pt-2 pb-2">
      <InputItem
        class="input-item"
        type="text"
        :placeholder="'Search...'"
        v-model="inputValue"
        :searchIcon="true"
      />
    </div>
    <div class="tabs px-4 pt-3 pb-3">
      <Button class="btn" type="button" text="All" value="22" active="false" />
      <Button class="btn active" type="button" text="On leave" value="15" active="true" />
      <Button class="btn" type="button" text="Holidays" value="12" active="true" />
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
