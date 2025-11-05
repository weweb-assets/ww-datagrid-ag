<template>
  <input
    ref="input"
    type="time"
    v-model="timeValue"
    class="time-input"
  />
</template>

<script>
export default {
  name: 'TimeCellEditor',
  props: {
    params: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      timeValue: '',
    };
  },
  mounted() {
    // Initialize from cell value (Date object)
    if (this.params.value) {
      const date = new Date(this.params.value);
      if (!isNaN(date.getTime())) {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        this.timeValue = `${hours}:${minutes}`;
      }
    }

    // Focus and try to show picker
    this.$nextTick(() => {
      if (this.$refs.input) {
        this.$refs.input.focus();
        this.$refs.input.select();
        try {
          this.$refs.input.showPicker?.();
        } catch (e) {
          // showPicker not supported
        }
      }
    });
  },
  methods: {
    // AG Grid calls this method to get the value when editing stops
    getValue() {
      if (!this.timeValue) return this.params.value;

      const [hours, minutes] = this.timeValue.split(':').map(Number);

      // Preserve the date part from original value or use today
      const date = this.params.value ? new Date(this.params.value) : new Date();
      date.setHours(hours);
      date.setMinutes(minutes);
      date.setSeconds(0);
      date.setMilliseconds(0);

      return date;
    },
  },
};
</script>

<style scoped>
.time-input {
  width: 100%;
  height: 100%;
  border: 2px solid #007aff;
  border-radius: 0;
  padding: 0 8px;
  margin: 0;
  font-size: inherit;
  font-family: inherit;
  color: inherit;
  outline: none;
  background-color: white;
  box-sizing: border-box;
}

.time-input:focus {
  border-color: #0051d5;
}

.time-input::-webkit-calendar-picker-indicator {
  cursor: pointer;
  opacity: 0.6;
}

.time-input::-webkit-calendar-picker-indicator:hover {
  opacity: 1;
}
</style>
