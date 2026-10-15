+++
title = '多项式插值简介'
date = 2026-03-19
draft = false
description = 'Lagrange 插值与误差项的简要说明。'
math = true
+++

## 问题设定

给定互异节点 $x_0, x_1, \ldots, x_n$ 及对应函数值 $y_i = f(x_i)$，求次数不超过 $n$ 的多项式 $p$，使得

$$
p(x_i) = y_i, \quad i = 0, 1, \ldots, n.
$$

## Lagrange 形式

定义基函数

$$
\ell_i(x) = \prod_{j \neq i} \frac{x - x_j}{x_i - x_j},
$$

则插值多项式可写为

$$
p(x) = \sum_{i=0}^{n} y_i \, \ell_i(x).
$$

对光滑函数 $f$，在区间上的插值误差可写成

$$
f(x) - p(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!} \prod_{i=0}^{n} (x - x_i)
$$

其中 $\xi$ 依赖于 $x$。

## 实践提示

高次等距节点插值可能出现 Runge 现象；实际计算中更常使用分段插值或 Chebyshev 节点。

行内公式示例：局部截断误差常记为 $O(h^{n+1})$。
