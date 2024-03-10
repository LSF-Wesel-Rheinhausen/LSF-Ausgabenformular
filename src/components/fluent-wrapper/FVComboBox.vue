<template>
    <fluent-combobox :value="modelValue" @change="onChange">
        <slot></slot>
    </fluent-combobox>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps<{
    modelValue: string | number;
}>();

const emit = defineEmits(['update:modelValue']);

const onChange = (event: Event) => {
    const target = event.target as HTMLInputElement; // Typumwandlung für TypeScript
    emit('update:modelValue', target.value);
};
</script>