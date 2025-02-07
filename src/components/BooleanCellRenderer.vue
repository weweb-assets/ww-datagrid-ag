<template>
    <div class="boolean-cell">
        <span v-if="params?.value" class="true">✓</span>
        <span v-else class="false">✗</span>
    </div>
</template>

<script>
export default {
    name: 'BooleanCellRenderer',
    props: {
        params: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.boolean-cell {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.true {
    color: #4caf50;
    font-weight: bold;
}

.false {
    color: #f44336;
    font-weight: bold;
}
</style>