export const redirects = JSON.parse("{\"/demo/bar.html\":\"/demo/e402c809/\",\"/demo/car.html\":\"/demo/5l2ri11n/\",\"/demo/foo.html\":\"/demo/nty4m48h/\",\"/blog/preview/custom-component.example.html\":\"/blog/wjrae2y4/\",\"/blog/preview/markdown.html\":\"/blog/3s7y9814/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/hzk/Documents/blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"/Users/hzk/Documents/blog/docs/.vuepress/.temp/pages/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/demo/e402c809/", { loader: () => import(/* webpackChunkName: "demo_e402c809_index.html" */"/Users/hzk/Documents/blog/docs/.vuepress/.temp/pages/demo/e402c809/index.html.js"), meta: {"title":"bar"} }],
  ["/demo/5l2ri11n/", { loader: () => import(/* webpackChunkName: "demo_5l2ri11n_index.html" */"/Users/hzk/Documents/blog/docs/.vuepress/.temp/pages/demo/5l2ri11n/index.html.js"), meta: {"title":"car"} }],
  ["/demo/nty4m48h/", { loader: () => import(/* webpackChunkName: "demo_nty4m48h_index.html" */"/Users/hzk/Documents/blog/docs/.vuepress/.temp/pages/demo/nty4m48h/index.html.js"), meta: {"title":"foo"} }],
  ["/blog/wjrae2y4/", { loader: () => import(/* webpackChunkName: "blog_wjrae2y4_index.html" */"/Users/hzk/Documents/blog/docs/.vuepress/.temp/pages/blog/wjrae2y4/index.html.js"), meta: {"title":"自定义组件"} }],
  ["/blog/3s7y9814/", { loader: () => import(/* webpackChunkName: "blog_3s7y9814_index.html" */"/Users/hzk/Documents/blog/docs/.vuepress/.temp/pages/blog/3s7y9814/index.html.js"), meta: {"title":"Markdown"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/hzk/Documents/blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"/Users/hzk/Documents/blog/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"Blog"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"/Users/hzk/Documents/blog/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"/Users/hzk/Documents/blog/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"/Users/hzk/Documents/blog/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
