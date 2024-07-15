<script setup>
import { ref, reactive, defineEmits, computed, nextTick } from 'vue'
import Button from '@/shared/components/ui/button/Button.vue'
import InputItem from '@/shared/components/ui/inputItem/InputItem.vue'
import Header from '../header/Header.vue'
import Tabs from '../tabs/Tabs.vue'
import EmployeeList from '../employeeList/EmployeeList.vue'
import { employees } from '@/utils/employees'

const searchQuery = ref('')
const listEmployees = ref([...employees])

console.log('employees', employees)

const allCount = computed(() => employees.length)
const onLeaveCount = computed(
  () => employees.filter((item) => item.leaveRequestType === 'leave').length
)
const onHolidayCount = computed(
  () => employees.filter((item) => item.leaveRequestType === 'holiday').length
)

const handleTabClicked = (type) => {
  listEmployees.value = []
  //searchQuery.value = ''
  setTimeout(() => {
    if (type === 'all') {
      listEmployees.value = [...employees]
    } else {
      listEmployees.value = employees.filter((item) => item.leaveRequestType === type)
    }
  }, 300)
}

const searchEmployee = async (event) => {
  const searchValue = event.target.value.toLowerCase()
  console.log('event', searchValue)
  const filtered = employees.filter((item) => {
    return item.employee.firstName.toLowerCase().includes(searchValue.toLowerCase())
  })
  console.log('filtered', filtered)

  listEmployees.value = []

  await nextTick()
  listEmployees.value = filtered

  //listEmployees.value = []
  // setTimeout(() => {
  //   listEmployees.value = []
  //   listEmployees.value = [...filtered]
  // }, 0)
}
</script>

<template>
  <div class="widget max-w-screen-lg border border-border bg-main-white rounded-[10px]">
    <Header />
    <div class="input-wrapper px-4 pt-2 pb-2">
      <InputItem
        class="input-item"
        type="text"
        :placeholder="'Search...'"
        :value="searchQuery"
        @input="searchEmployee"
      />
    </div>
    <Tabs
      :leaveAmount="{ allCount, onLeaveCount, onHolidayCount }"
      @onTabClicked="handleTabClicked"
    />
    <transition name="fade">
      <div v-if="listEmployees.length">
        <EmployeeList :employees="listEmployees" />
      </div>
    </transition>
  </div>
</template>

<style lang="scss"></style>
