import { defineClientConfig } from 'vuepress/client'
import Tabs from '/Users/hzk/Documents/blog/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.175_esbuild@0.25.12_markdown-it@14.1.0_typescript@5.9_67c7212ef3da4450ad24764cb27bfbd7/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from '/Users/hzk/Documents/blog/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.175_esbuild@0.25.12_markdown-it@14.1.0_typescript@5.9_67c7212ef3da4450ad24764cb27bfbd7/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from '/Users/hzk/Documents/blog/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.175_esbuild@0.25.12_markdown-it@14.1.0_typescript@5.9_67c7212ef3da4450ad24764cb27bfbd7/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeNode from '/Users/hzk/Documents/blog/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.175_esbuild@0.25.12_markdown-it@14.1.0_typescript@5.9_67c7212ef3da4450ad24764cb27bfbd7/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeNode.vue'
import { setupMarkHighlight } from '/Users/hzk/Documents/blog/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.175_esbuild@0.25.12_markdown-it@14.1.0_typescript@5.9_67c7212ef3da4450ad24764cb27bfbd7/node_modules/vuepress-plugin-md-power/lib/client/composables/mark.js'

import '/Users/hzk/Documents/blog/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.175_esbuild@0.25.12_markdown-it@14.1.0_typescript@5.9_67c7212ef3da4450ad24764cb27bfbd7/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeNode', FileTreeNode)
  },
  setup() {
        setupMarkHighlight("eager")

  }
})
