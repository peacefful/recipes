<template>
  <VaInput
    class="h-10 text-md"
    :color="color || 'primary'"
    v-model="value"
    :placeholder="placeholder"
    strict-bind-input-value
  >
    <template #prepend>
      <VaIcon 
        name="search" 
        :size="23" 
        class="mr-2" 
        color="secondary" 
      />
    </template>
  </VaInput>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

type TInput = {
  placeholder: string;
  color?: string;
};

defineProps<TInput>();

const text = ref("");

const value = computed({
  get() {
    return text.value;
  },
  set(v) {
    text.value = v.replace(/[^0-9]/g, "").slice(0, 5);
  },
});
</script>
