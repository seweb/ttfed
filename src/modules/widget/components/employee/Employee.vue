<script setup>
import { ref } from 'vue'
import LeaveIcon from '@/assets/images/components/LeaveIcon.vue'

const props = defineProps({
  item: Object
})

//console.log('item', item)
</script>
<template>
  <div class="employee">
    <div class="employee-info">
      <div class="employee-ico">
        <img :src="item.employee.avatar" alt="employee" />
      </div>
      <div class="employee-desc">
        <h3>{{ item.employee.firstName }} {{ item.employee.lastName }}</h3>
        <h4>{{ item.employee.position }}</h4>
      </div>
    </div>
    <div class="leave-date">
      <span>Till {{ item.leaveRequestEndDate }}</span>
      <LeaveIcon width="26px" height="26px" />
    </div>
  </div>
</template>
