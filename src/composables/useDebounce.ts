import _debounce from 'lodash.debounce'
import { ref, type Ref } from 'vue'

type OPT_TYPE = {
  initial?: boolean
}

const debounceFunction = (
  fn: (...args: any[]) => any,
  delay = 0,
  throttle = false
) => {
  return _debounce((...args) => fn(...args), delay, {
    leading: throttle,
  })
}

const useDebounce = (
  fn: (...args: any[]) => any,
  delay: number,
  opt: OPT_TYPE = {}
) => {
  const initial = ref(opt.initial || false)
  if (initial.value) {
    initial.value = false
    return debounceFunction(fn, delay, true)
  }
  return debounceFunction(fn, delay, false)
}

export default useDebounce
