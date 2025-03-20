import { ref, type Ref } from 'vue'

// const toggle
type optionType<T> = {
  items: Array<T>
  initial: T
  loop: boolean
}

export default function useIncrement<T extends string>(
  options: optionType<T>
): [Ref<T[]>, Ref<T>, (inc: boolean | T) => void] {
  const { items, initial, loop } = options
  const list = ref<T[]>(items) as Ref<T[]>
  const currentTab = ref<T>(null) as Ref<T>
  if (!list.value.includes(initial)) {
    if (typeof initial === 'number') {
      if (list.value.length > initial) {
        currentTab.value = list.value[initial]
      } else {
        console.warn(
          `useToggleTab: Initial value ${initial} is not included in list`,
          list.value
        )
        currentTab.value = list.value[0]
      }
    } else {
      console.warn(
        `useToggleTab: Initial value ${initial} is not included in list`,
        list.value
      )
      currentTab.value = list.value[0]
    }
  } else {
    currentTab.value = initial
  }
  const toggleTab = (inc: boolean | T) => {
    let next = list.value.indexOf(currentTab.value)
    const prevNext = next
    if (typeof inc === 'boolean') {
      next = inc ? next + 1 : next - 1
    } else {
      const idx = list.value.indexOf(inc)
      if (idx === -1) {
        console.warn(
          `useToggleTab: Toggle value ${inc} is not included in list`,
          list.value
        )
      } else {
        next = idx
      }
    }
    if (next < 0 || next >= list.value.length) {
      if (loop) {
        next = (next + list.value.length) % list.value.length
      } else {
        next = prevNext
      }
    }
    currentTab.value = list.value[next]
  }

  return [list, currentTab, toggleTab]
}
