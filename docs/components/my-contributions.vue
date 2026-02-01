<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const data = useData()

const dark = computed(() => data.isDark.value)

const contributions = [
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

const pins = contributions.map((contribution) => {
  const { name, repo } = contribution

  const url = `https://github.com/${name}/${repo}/commits?author=betavs`
  const pin = `https://github-stats-extended.vercel.app/api/pin/?username=${name}&repo=${repo}&show_owner=true&hide_border=true&description_lines_count=2`

  const dark = `${pin}&theme=github_dark&bg_color=1b1b1f`
  const light = `${pin}&theme=default`

  const alt = repo
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return { url, alt, dark, light }
})
</script>

<template>
  <ul class="contribution-list">
    <li v-for="pin in pins" :key="pin.url" class="contribution-item">
      <a
        class="contribution-link"
        :href="pin.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img v-show="dark" :src="pin.dark" :alt="pin.alt" />
        <img v-show="!dark" :src="pin.light" :alt="pin.alt" />
      </a>
    </li>
  </ul>
</template>

<style scoped>
.contribution-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0;
  list-style: none;
}

.contribution-item {
  display: flex;
  margin: 0;
  width: 100%;
  border-radius: 6px;
  box-shadow: 0 0 0 1px;
  overflow: hidden;
  user-select: none;
}

@media (min-width: 768px) {
  .contribution-item {
    width: 48%;
  }
}

.contribution-link {
  padding-right: 20px;
}
</style>
