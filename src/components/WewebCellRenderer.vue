<template>
    <div>
        <wwLayoutItemContext
            is-repeat
            :index="params.node.sourceRowIndex"
            :data="{ value: params.value, row: params.data }"
        >
            <wwElement v-bind="params.containerId"></wwElement>
        </wwLayoutItemContext>
    </div>
</template>

<script>
export default {
    name: "WewebCellRenderer",
    props: {
        params: {
            type: Object,
            required: true,
        },
    },
};
</script>
