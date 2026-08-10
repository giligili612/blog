export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/hzk/Dev/blog/docs/README.md"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/hzk/Dev/blog/docs/.vuepress/.temp/pages/404.html.vue"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"/home/hzk/Dev/blog/docs/.vuepress/.temp/pages/blog/index.html.vue"), meta: {"title":"Blog"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"/home/hzk/Dev/blog/docs/.vuepress/.temp/pages/blog/tags/index.html.vue"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"/home/hzk/Dev/blog/docs/.vuepress/.temp/pages/blog/archives/index.html.vue"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"/home/hzk/Dev/blog/docs/.vuepress/.temp/pages/blog/categories/index.html.vue"), meta: {"title":"分类"} }],
]);
