<script setup>
import { ref, defineEmits } from 'vue'
import Button from '@/shared/components/ui/button/Button.vue'

const props = defineProps({
  leaveAmount: Object
})

const emits = defineEmits(['onTabClicked'])

const leaveType = ref('all')
const handleTabBtnClick = (type) => {
  leaveType.value = type
  emits('onTabClicked', type)
}
</script>
<template>
  <div class="tabs px-4 pt-3 pb-3">
    <Button
      :class="{ active: leaveType === 'all' }"
      class="btn"
      type="button"
      text="All"
      :value="leaveAmount.allCount"
      @click="handleTabBtnClick('all')"
    />
    <Button
      :class="{ active: leaveType === 'leave' }"
      class="btn"
      type="button"
      text="On leave"
      :value="leaveAmount.onLeaveCount"
      @click="handleTabBtnClick('leave')"
    />
    <Button
      :class="{ active: leaveType === 'holiday' }"
      class="btn"
      type="button"
      text="Holidays"
      :value="leaveAmount.onHolidayCount"
      @click="handleTabBtnClick('holiday')"
    />
  </div>
</template>
