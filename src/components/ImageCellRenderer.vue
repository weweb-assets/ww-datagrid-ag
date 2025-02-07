<template>
    <div class="image-cell">
        <img v-if="params?.value" :src="params.value" :alt="params.value" />
        <div v-else class="no-image">No image</div>
    </div>
</template>

<script>
export default {
    name: 'ImageCellRenderer',
    props: {
        params: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.image-cell {
    height: 100%;
    display: flex;
    align-items: center;
}

.image-cell img {
    max-height: 40px;
    max-width: 60px;
    object-fit: contain;
}

.no-image {
    color: #999;
    font-style: italic;
}
</style>