<script setup>
import HeaderIcon from '@/assets/images/components/HeaderIcon.vue'
import CloseIcon from '@/assets/images/components/CloseIcon.vue'
</script>
<template>
  <header class="flex justify-between items-center py-3 px-4">
    <div class="flex items-center space-x-4">
      <HeaderIcon width="36px" height="36px" />
      <h1 class="font-inter font-medium text-14">Who’s out today</h1>
    </div>
    <CloseIcon width="15px" height="15px" />
  </header>
</template>
