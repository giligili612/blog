# 写文章速查

## 新建文章

文章放在 `content/posts/` 下面，可以继续分目录：

```sh
hugo new content/posts/cs/cpp/my-note.md
hugo new content/posts/math/calculus/limit.md
hugo new content/posts/physics/mechanics/newton.md
```

常用 front matter：

```md
---
title: "文章标题"
date: "2026-06-14"
description: "一句话简介。"
categories: ["Math", "Calculus"]
tags: ["calculus", "limit"]
math: true
---
```

有数学公式的文章加 `math: true`。

## 目录建议

```text
content/posts/
  cs/
    cpp/
    python/
    algorithm/
    operating-system/
  math/
    probability/
    statistics/
    calculus/
    linear-algebra/
  physics/
  history/
  fiction/
```

目录主要给自己管理文件；`categories` 和 `tags` 用于网页分类。

## 数学公式

行内公式用 `$...$`：

```md
当 $x \to 0$ 时，$\sin x \sim x$。
```

块级公式用 `math` shortcode：

```md
{{< math >}}
\int_a^b f(x)\,dx = F(b)-F(a)
{{< /math >}}
```

矩阵、多行公式也用 `math` shortcode：

```md
{{< math >}}
\begin{bmatrix}
1 & 2\\
3 & 4
\end{bmatrix}
{{< /math >}}
```

```md
{{< math >}}
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0},\\
\nabla \cdot \mathbf{B} &= 0.
\end{aligned}
{{< /math >}}
```

## 代码块

用三反引号并标明语言：

````md
```cpp
#include <iostream>

int main() {
    std::cout << "hello\n";
}
```
````

## 本地预览

```sh
npm run dev
```

生产构建检查：

```sh
npm run build
```
