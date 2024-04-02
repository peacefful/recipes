<template>
  <VaInput
    class="h-10 text-md"
    :color="color"
    v-model="value"
    :placeholder="placeholder"
    strict-bind-input-value
  >
    <template #prepend>
      <slot />
    </template>
  </VaInput>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

type TInput = {
  color: string;
  placeholder: string;
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
