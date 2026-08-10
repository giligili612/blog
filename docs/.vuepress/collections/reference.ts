import { defineCollection } from 'vuepress-theme-plume'

export default defineCollection({
  type: 'doc',
  dir: 'reference',
  linkPrefix: '/reference/',
  title: '手册',
  sidebar: [
    '',
    'CMake.md',
    'Git.md',
    'Linux.md',
  ]
})
