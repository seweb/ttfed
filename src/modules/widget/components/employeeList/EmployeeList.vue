<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import Employee from '../employee/Employee.vue'
import { perPage } from '@/constants/settings'

const props = defineProps({
  employees: Array
})

const displayedEmployees = ref([])

const loadItems = () => {
  const nextItems = props.employees.slice(
    displayedEmployees.value.length,
    displayedEmployees.value.length + perPage
  )
  displayedEmployees.value = displayedEmployees.value.concat(nextItems)
}

const handleScroll = () => {
  const container = document.querySelector('.employee-list-content')
  if (container.scrollTop + container.clientHeight >= container.scrollHeight - 1) {
    loadItems()
  }
}

onMounted(() => {
  loadItems()

  const container = document.querySelector('.employee-list-content')
  if (container) {
    container.addEventListener('scroll', handleScroll)
  }

  onUnmounted(() => {
    container.removeEventListener('scroll', handleScroll)
  })
})
</script>
<template>
  <div class="employee-list custom-scrollbar mt-2 py-2 pr-1 border-t border-border">
    <div class="employee-list-content px-4">
      <Employee v-for="(item, idx) in displayedEmployees" :key="idx" :item="item" />
    </div>
  </div>
</template>
