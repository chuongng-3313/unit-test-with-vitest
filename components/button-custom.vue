<template>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="emit('handleClick')">{{ props.text }}</button>
</template>

<script setup lang="ts">
const props = defineProps<{
    text: String
}>()

const emit = defineEmits<{
    handleClick: []
}>()

</script>

<style scoped></style>