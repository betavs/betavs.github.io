<script setup lang="ts">
import VPDarkIcon from '@theme/VPDarkIcon.vue'
import VPLightIcon from '@theme/VPLightIcon.vue'
import { useDarkMode } from '@theme/useDarkMode'
import { useData } from '@theme/useData'

const { themeLocale } = useData()
const isDarkMode = useDarkMode()

const toggleColorMode = async () => {
  if (!document.startViewTransition) {
    isDarkMode.value = !isDarkMode.value
    return
  }

  const target = document.querySelector('.vp-toggle-color-mode-button')
  const { innerWidth, innerHeight } = window
  const { top, left, width, height } = target.getBoundingClientRect()

  const x = left + width / 2
  const y = top + height / 2

  const radius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  )

  const ratioX = (100 * x) / innerWidth
  const ratioY = (100 * y) / innerHeight

  const refer = Math.hypot(innerWidth, innerHeight) / Math.SQRT2
  const ratio = (100 * radius) / refer

  const clipPath = [
    `circle(0% at ${ratioX}% ${ratioY}%)`,
    `circle(${ratio}% at ${ratioX}% ${ratioY}%)`
  ]

  const transition = document.startViewTransition(() => {
    isDarkMode.value = !isDarkMode.value
  })

  await transition.ready

  document.documentElement.animate(
    {
      clipPath: isDarkMode.value ? clipPath.reverse() : clipPath
    },
    {
      duration: 500,
      easing: 'ease-in',
      pseudoElement: '::view-transition-new(root)'
    }
  )
}
</script>

<template>
  <button
    type="button"
    class="vp-toggle-color-mode-button"
    :title="themeLocale.toggleColorMode"
    @click="toggleColorMode"
  >
    <VPLightIcon v-show="!isDarkMode" />
    <VPDarkIcon v-show="isDarkMode" />
  </button>
</template>

<style lang="scss">
.vp-toggle-color-mode-button {
  display: flex;

  margin: auto;
  margin-inline-start: 1rem;
  border: 0;

  background: none;
  color: var(--vp-c-text);

  opacity: 0.8;
  cursor: pointer;

  @media print {
    display: none;
  }

  &:hover {
    opacity: 1;
  }

  .light-icon,
  .dark-icon {
    width: 1.25rem;
    height: 1.25rem;
  }
}
</style>
