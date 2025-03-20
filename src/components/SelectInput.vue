<template>
  <div class="input-select-wrapper">
    <p>{{ props.title || $t('main.contact.form.purpose') }}</p>
    <div class="input-select-container">
      <input type="text" class="dummy" ref="dummy" inputmode="none" />
      <div
        class="input-select hover-pointer"
        @click="toggleDropDown()"
        @focus="() => blur()"
      >
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
            @click="onSelect(item)"
            @focus="() => blur()"
            :key="idx"
          >
            <span>{{ props.skipTranslate ? item.label : $t(item.label) }}</span>
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
import { ref, watch, computed } from 'vue'
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
    type: Array,
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
const emit = defineEmits(['onSelect'])
const isInvalid = ref(false)

const onSelect = (value) => {
  emit('onSelect', value)
  toggleDropDown(false)
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
.input-select-wrapper {
  margin-bottom: 40px;
  width: 100%;
  p {
    @include regular(16);
    color: rgba($text-grey, 1);
    margin-bottom: 8px;
  }
  .input-select-container {
    height: 42px;
    border-radius: 6px;
    width: calc(100% + 2px);
    border: 1px solid rgba(196, 196, 196, 0.6);
    margin-bottom: 16px;
    @include relative;
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
      padding: 0px 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        @include medium(18);
        @include mobile {
          @include medium(14);
        }
        &.placeholder {
          color: $bt-secondary-stroke-disabled;
        }
      }
      i {
        color: rgba(196, 196, 196, 0.6);
        font-size: 32px;
      }
    }
  }
  .input-select-dropdown {
    border: solid 1px rgba(196, 196, 196, 0.6);
    border-radius: 0px 0px 6px 6px;
    width: calc(100% + 2px);
    @include absolute(left -1px top 36px);
    background: $white;
    .input-select-dropdown-item {
      width: 100%;
      @include medium(18);
      padding: 4px 12px;
      @include mobile {
        @include medium(14);
      }
      &:hover {
        color: $main;
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
