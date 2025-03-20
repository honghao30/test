<template>
    <div class="wrapper relative" v-if="props.loading">
      <div
        class="wrapper-box absolute left-[-29px] top-[-11px] h-34 w-65 rounded-5"
        :class="props.border && 'shadow-200'"
      ></div>
      <div class="dot-pulse"></div>
    </div>
  </template>
  <script lang="ts" setup>
  const props = defineProps({
    loading: Boolean,
    border: {
      type: Boolean,
      default() {
        return false
      },
    },
  })
  </script>
  <style scoped>
  .dot-pulse {
    position: relative;
    left: -9999px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: theme('colors.black');
    color: theme('colors.black');
    box-shadow: 9999px 0 0 -5px theme('colors.black');
    animation: dotPulse 1s infinite linear;
    animation-delay: 0.25s;
  }
  
  .dot-pulse::before,
  .dot-pulse::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: theme('colors.white');
    color: theme('colors.white');
  }
  
  .dot-pulse::before {
    box-shadow: 9984px 0 0 -5px theme('colors.white');
    animation: dotPulseBefore 1.5s infinite linear;
    animation-delay: 0s;
  }
  
  .dot-pulse::after {
    box-shadow: 10014px 0 0 -5px theme('colors.white');
    animation: dotPulseAfter 1.5s infinite linear;
    animation-delay: 0.5s;
  }
  
  @keyframes dotPulseBefore {
    0% {
      box-shadow: 9984px 0 0 -5px theme('colors.white');
    }
    30% {
      box-shadow: 9984px 0 0 2px theme('colors.white');
    }
    60%,
    100% {
      box-shadow: 9984px 0 0 -5px theme('colors.white');
    }
  }
  
  @keyframes dotPulse {
    0% {
      box-shadow: 9999px 0 0 -5px theme('colors.white');
    }
    30% {
      box-shadow: 9999px 0 0 2px theme('colors.white');
    }
    60%,
    100% {
      box-shadow: 9999px 0 0 -5px theme('colors.white');
    }
  }
  
  @keyframes dotPulseAfter {
    0% {
      box-shadow: 10014px 0 0 -5px theme('colors.white');
    }
    30% {
      box-shadow: 10014px 0 0 2px theme('colors.white');
    }
    60%,
    100% {
      box-shadow: 10014px 0 0 -5px theme('colors.white');
    }
  }
  </style>
  