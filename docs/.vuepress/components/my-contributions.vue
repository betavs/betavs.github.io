<script setup lang="ts">
import { useDarkMode } from '@vuepress/theme-default/client'

const dark = useDarkMode()

// spell-checker: words tdesign miniprogram opentiny Oteam primefaces primevue primereact
const contributors = [
  { name: 'element-plus', repo: 'element-plus' },
  { name: 'Tencent', repo: 'tdesign-miniprogram' },
  { name: 'Tencent', repo: 'tdesign-vue-next' },
  { name: 'opentiny', repo: 'tiny-vue' },
  { name: 'Tencent', repo: 'tdesign-vue' },
  { name: 'Tencent', repo: 'tdesign-react' },
  { name: 'Tencent', repo: 'tdesign-mobile-vue' },
  { name: 'Tencent', repo: 'tdesign-mobile-react' },
  { name: 'Tencent', repo: 'tdesign-common' },
  { name: 'TDesignOteam', repo: 'tdesign-api' },
  { name: 'primefaces', repo: 'primevue' },
  { name: 'primefaces', repo: 'primereact' },
  { name: 'arco-design', repo: 'arco-design-vue' }
]

const pins = contributors.map((contributor) => {
  const { name, repo } = contributor

  const url = `https://github.com/${name}/${repo}/commits?author=betavs`
  const dark = `https://github-readme-stats.vercel.app/api/pin/?username=${name}&repo=${repo}&theme=github_dark&show_owner=true&hide_border=true&bg_color=1b1b1f`
  const light = `https://github-readme-stats.vercel.app/api/pin/?username=${name}&repo=${repo}&theme=default&show_owner=true&hide_border=true`

  const alt = repo
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return { url, alt, dark, light }
})
</script>

<template>
  <ul class="contributors-list">
    <li v-for="pin in pins" :key="pin.url" class="contributors-item">
      <a :href="pin.url" target="_blank" rel="noopener noreferrer">
        <img v-show="dark" :src="pin.dark" :alt="pin.alt" />
        <img v-show="!dark" :src="pin.light" :alt="pin.alt" />
      </a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.contributors-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;

  .contributors-item {
    display: flex;
    margin-top: 20px;
    width: 360px;
    height: 130px;
    border-radius: 6px;
    box-shadow: 0 0 0 1px;
    overflow: hidden;
    user-select: none;

    a::after {
      --external-link-icon: none;
      --external-link-c-icon: none;
    }
  }
}
</style>
