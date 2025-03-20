import type { Ref } from 'vue'
import { isRef, watch, onMounted, onBeforeUnmount, unref } from 'vue'

export function useEventListener(
  // the target could be reactive ref which adds flexibility
  target: Ref<EventTarget | null> | EventTarget,
  event: string,
  handler: (e: Event) => any
) {
  if (isRef(target)) {
    watch(target, (value, oldValue) => {
      oldValue?.removeEventListener(event, handler)
      value?.addEventListener(event, handler)
    })
  } else {
    onMounted(() => {
      target.addEventListener(event, handler)
    })
  }
  onBeforeUnmount(() => {
    unref(target)?.removeEventListener(event, handler)
  })
}
