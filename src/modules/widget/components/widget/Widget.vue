<script setup>
import { ref, computed, nextTick } from 'vue'
import InputItem from '@/shared/components/ui/inputItem/InputItem.vue'
import Header from '../header/Header.vue'
import Tabs from '../tabs/Tabs.vue'
import EmployeeList from '../employeeList/EmployeeList.vue'
import { employees } from '@/utils/employees'
import debounce from '@/utils/debounce'

const searchQuery = ref('')
const listEmployees = ref([...employees])
const leaveType = ref('all')

const allCount = computed(() => employees.length)
const onLeaveCount = computed(
  () => employees.filter((item) => item.leaveRequestType === 'leave').length
)
const onHolidayCount = computed(
  () => employees.filter((item) => item.leaveRequestType === 'holiday').length
)

const handleTabClicked = (type) => {
  listEmployees.value = []
  leaveType.value = type
  searchQuery.value = ''
  setTimeout(() => {
    if (type === 'all') {
      listEmployees.value = [...employees]
    } else {
      listEmployees.value = employees.filter((item) => item.leaveRequestType === type)
    }
  }, 300)
}

const searchEmployee = async () => {
  let filtered = []
  if (leaveType.value === 'all') {
    filtered = employees.filter((item) => {
      const name = item.employee.firstName + item.employee.lastName
      return name.toLowerCase().includes(searchQuery.value.toLowerCase())
    })
  } else {
    filtered = employees.filter((item) => {
      const name = item.employee.firstName + item.employee.lastName
      return (
        name.toLowerCase().includes(searchQuery.value.toLowerCase()) &&
        item.leaveRequestType === leaveType.value
      )
    })
  }
  listEmployees.value = []
  await nextTick()
  listEmployees.value = filtered
}
const debouncedSearchEmployee = debounce(searchEmployee, 500)
</script>

<template>
  <div class="widget max-w-screen-lg border border-border bg-main-white rounded-[10px]">
    <Header />
    <div class="input-wrapper px-4 pt-2 pb-2">
      <InputItem
        class="input-item"
        type="text"
        :placeholder="'Search...'"
        v-model="searchQuery"
        @input="debouncedSearchEmployee"
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
