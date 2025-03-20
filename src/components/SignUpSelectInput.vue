<template>
  <div class="input-select-wrapper">
    <div class="input-select-container">
      <input type="text" class="dummy" ref="dummy" inputmode="none" />
      <div class="input-select hover-pointer" @click="toggleDropDown()">
        <span
          :class="{
            selected: props.selected,
            placeholder: !props.selected,
          }"
          >{{
            props.selected
              ? props.skipTranslate
                ? props.selected.label
                : $t(props.selected.label)
              : props.placeholder || 'Select'
          }}</span
        >
        <i className="material-icons noselect">
          {{ showDropdown ? 'expand_less' : 'expand_more' }}
        </i>
      </div>
      <transition name="slide-up">
        <div class="input-select-dropdown" v-show="showDropdown">
          <div
            class="input-select-dropdown-item hover-pointer"
            v-for="(item, idx) in props.items"
            @click="($evt) => onSelect($evt, item)"
            :key="idx"
          >
            <span>{{ item.label }}</span>
          </div>
        </div>
      </transition>
      <div
        class="input-select-error"
        :class="{ active: props.valid === false }"
      >
        Please Select!
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, computed, PropType } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

type Item = {
  id?: number
  value?: string
  label?: string
  ref?: string
}
const props = defineProps({
  placeholder: {
    type: String,
    required: false,
  },
  items: {
    type: Array as PropType<
      {
        id: number
        value: string
        label: string
        ref?: string
      }[]
    >,
    default() {
      return []
    },
  },
  selected: {
    type: Object,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  skipTranslate: {
    type: Boolean,
    default() {
      return false
    },
  },
  valid: {
    type: Boolean,
    required: false,
  },
})
const emit = defineEmits(['onSelect', 'blur'])
const isInvalid = ref(false)

const onSelect = ($evt, value) => {
  $evt.stopPropagation()
  emit('onSelect', value)
  toggleDropDown(false)
}

const blur = (value) => {
  emit('blur', value)
}

const showDropdown = ref(false)
const toggleDropDown = (flag?) => {
  showDropdown.value = flag == null ? !showDropdown.value : flag
  if (!showDropdown.value) {
    if (!props.selected) isInvalid.value = true
  } else isInvalid.value = false
}

const dummy = ref<HTMLInputElement>(null)
const selected = computed(() => props.selected)

watch(selected, (v) => {
  if (!v) isInvalid.value = true
  else isInvalid.value = false
})

watch(showDropdown, (v) => {
  if (v) {
    dummy.value.focus()
  }
})
</script>
<style lang="scss" scoped>
* {
  font-family: 'Poppins' !important;
}
.input-select-wrapper {
  width: 100%;

  p {
    @include regular(16);
    color: rgba($text-grey, 1);
    margin-bottom: 8px;
  }
  .input-select-container {
    @include relative;
    height: 38px;
    width: 100%;
    border: none;
    border-bottom: 1.5px solid #e5e5e5;
    margin-bottom: 16px;

    @include en-mobile {
      height: 30px;
    }

    .dummy {
      position: absolute;
      width: 0px;
      height: 0px;
      border: none;
      padding: 0;
    }
    .input-select {
      width: 100%;
      height: 100%;
      padding: 0px 6px 0px 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        @include medium(13);

        &.placeholder {
          @include medium(13);
          color: rgba(112, 112, 112, 0.8);
        }
      }
      i {
        @include medium(20);
        color: rgba(112, 112, 112, 0.8);
      }
    }
  }
  .input-select-dropdown {
    @include absolute(left 0px top 36px);
    border: solid 1px #e5e5e5;
    border-radius: 0px 0px 5px 5px;
    width: 100%;
    background: $white;
    z-index: 9;

    @include en-mobile {
      @include absolute(left 0px top 29px);
    }

    .input-select-dropdown-item {
      @include medium(12);
      width: 100%;
      padding: 4px 12px;
      color: rgba(112, 112, 112, 0.8);

      &:hover {
        background-color: #f0f0f0;
      }

      &:active {
        background-color: #ebedfe;
      }
    }
  }
  .input-select-error {
    width: 100%;
    @include regular(12);
    color: transparent;
    text-align: right;
    &.active {
      color: #ff8686;
    }
  }
}
</style>
