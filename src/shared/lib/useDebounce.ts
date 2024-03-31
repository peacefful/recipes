import { ref, type Ref, watch } from "vue";

export const useDebounce = <T>(value: Ref<T>, delay = 100): Ref<T> => {
  const debouncedValue = ref(value.value) as Ref<T>;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  watch(value, () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      debouncedValue.value = value.value;
    }, delay);
  });

  return debouncedValue;
};
