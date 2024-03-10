<template>
    <fluent-text-field :value="modelValue" @input="onChange">
        <slot></slot>
    </fluent-text-field>
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