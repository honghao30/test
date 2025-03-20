import { isRef } from 'vue'
import type { Ref } from 'vue'
import { useEventListener } from './useEventListener'
export function useOnClickOutside(
  rootEl: Ref<HTMLElement | null> | HTMLElement,
  callback: () => any
) {
  // `mousedown` or `mouseup` is better than `click` here because it doesn't bubble up like `click`
  // if you've used `click` here, the callback will be run immediatly.
  useEventListener(window, 'touchend', (e: Event) => {
    const clickedEl = e.target as HTMLElement
    // skip if the root element contains the clicked element
    if (isRef(rootEl)) {
      if (rootEl.value?.contains(clickedEl)) {
        return
      }
    } else {
      if (rootEl?.contains(clickedEl)) {
        return
      }
    }
    // otherwise execute the action
    callback()
  })
}
