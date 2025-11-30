<template>
  <div class="time-cell-display">
    {{ formattedTime }}
  </div>
</template>

<script>
export default {
  name: 'TimeCellRenderer',
  props: {
    params: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      currentValue: this.params?.value,
    };
  },
  computed: {
    timeFormat() {
      return this.params?.timeFormat || '24';
    },
    formattedTime() {
      const date = this.parseTimeValue(this.currentValue);
      if (!date) return '--:--';

      const hours = date.getHours();
      const minutes = date.getMinutes();
      const minutesStr = minutes.toString().padStart(2, '0');

      if (this.timeFormat === '12') {
        const period = hours >= 12 ? 'PM' : 'AM';
        const displayHours = hours % 12 || 12;
        return `${displayHours}:${minutesStr} ${period}`;
      } else {
        const hoursStr = hours.toString().padStart(2, '0');
        return `${hoursStr}:${minutesStr}`;
      }
    },
  },
  watch: {
    'params.value'(newValue) {
      console.log('TimeCellRenderer: params.value changed to:', newValue);
      this.currentValue = newValue;
    },
  },
  methods: {
    // Parse the cell value to a Date object
    parseTimeValue(value) {
      if (!value) return null;

      // If it's already a Date object
      if (value instanceof Date) return value;

      // If it's a timestamp (number)
      if (typeof value === 'number') return new Date(value);

      // If it's a string, try to parse it
      if (typeof value === 'string') {
        const parsed = new Date(value);
        return isNaN(parsed.getTime()) ? null : parsed;
      }

      return null;
    },

    // AG Grid ICellRendererComp interface method
    refresh(params) {
      console.log('TimeCellRenderer refresh() called:', {
        oldValue: this.currentValue,
        newValue: params?.value
      });
      // Update current value when AG Grid refreshes
      this.currentValue = params?.value;
      return true; // Tell AG Grid we handled the refresh
    },
  },
};
</script>

<style scoped lang="scss">
.time-cell-display {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 8px;
}
</style>
