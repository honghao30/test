import type { Ref } from 'vue'
import { ref } from 'vue'

export default function useToggle(
  initialValue: boolean
): [Ref<boolean>, (flag?: boolean) => void] {
  const variable = ref<boolean>(initialValue)
  const toggleVariable = (flag?: boolean) => {
    const fl = flag == null ? !variable.value : flag
    variable.value = fl
  }
  return [variable, toggleVariable]
}
