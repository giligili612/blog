import { defineClientConfig } from 'vuepress/client'
import VPCopyButton from '/home/hzk/Dev/blog/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.204_@types+markdown-it@14.1.2_@vuepress+bundler-vite@_d57b90ee665682d2dd13f8c5bf71b3a2/node_modules/vuepress-plugin-md-power/dist/client/components/VPCopyButton.vue'
import Tabs from '/home/hzk/Dev/blog/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.204_@types+markdown-it@14.1.2_@vuepress+bundler-vite@_d57b90ee665682d2dd13f8c5bf71b3a2/node_modules/vuepress-plugin-md-power/dist/client/components/Tabs.vue'
import CodeTabs from '/home/hzk/Dev/blog/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.204_@types+markdown-it@14.1.2_@vuepress+bundler-vite@_d57b90ee665682d2dd13f8c5bf71b3a2/node_modules/vuepress-plugin-md-power/dist/client/components/CodeTabs.vue'
import Plot from '/home/hzk/Dev/blog/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.204_@types+markdown-it@14.1.2_@vuepress+bundler-vite@_d57b90ee665682d2dd13f8c5bf71b3a2/node_modules/vuepress-plugin-md-power/dist/client/components/Plot.vue'
import FileTreeNode from '/home/hzk/Dev/blog/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.204_@types+markdown-it@14.1.2_@vuepress+bundler-vite@_d57b90ee665682d2dd13f8c5bf71b3a2/node_modules/vuepress-plugin-md-power/dist/client/components/FileTreeNode.vue'
import { setupMarkHighlight } from '/home/hzk/Dev/blog/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.204_@types+markdown-it@14.1.2_@vuepress+bundler-vite@_d57b90ee665682d2dd13f8c5bf71b3a2/node_modules/vuepress-plugin-md-power/dist/client/composables/mark.js'

import '/home/hzk/Dev/blog/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.204_@types+markdown-it@14.1.2_@vuepress+bundler-vite@_d57b90ee665682d2dd13f8c5bf71b3a2/node_modules/vuepress-plugin-md-power/dist/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('VPCopyButton', VPCopyButton)
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeNode', FileTreeNode)
  },
  setup() {
        setupMarkHighlight("eager")

  }
})
