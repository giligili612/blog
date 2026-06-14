# 常用数学符号速查

## 希腊字母

```tex
\alpha \beta \gamma \delta \epsilon \varepsilon
\theta \lambda \mu \pi \rho \sigma \tau \phi \varphi \omega
\Gamma \Delta \Theta \Lambda \Pi \Sigma \Phi \Omega
```

## 上下标与分式

```tex
x_i
x^2
x_i^2
\frac{a}{b}
\sqrt{x}
\sqrt[n]{x}
```

## 求和、极限、积分

```tex
\sum_{i=1}^{n} i
\prod_{i=1}^{n} x_i
\lim_{x\to 0} \frac{\sin x}{x}
\int_a^b f(x)\,dx
\iint_D f(x,y)\,dA
\oint_C \mathbf{F}\cdot d\mathbf{r}
```

## 集合与逻辑

```tex
\in \notin \subset \subseteq \supset \supseteq
\cup \cap \emptyset
\forall \exists \nexists
\Rightarrow \Leftarrow \Leftrightarrow
\land \lor \neg
```

## 比较与近似

```tex
= \ne < \le > \ge
\approx \sim \simeq \equiv
\propto
```

## 向量、矩阵、线性代数

```tex
\mathbf{x}
\boldsymbol{\beta}
\vec{v}
\langle x, y \rangle
\|x\|_2
A^\mathsf{T}
A^{-1}
\det(A)
\operatorname{rank}(A)
```

矩阵：

```tex
\begin{bmatrix}
1 & 2\\
3 & 4
\end{bmatrix}
```

方程组对齐：

```tex
\begin{aligned}
ax + by &= c,\\
dx + ey &= f.
\end{aligned}
```

## 概率统计

```tex
P(A)
P(A \mid B)
\mathbb{E}[X]
\mathrm{Var}(X)
\mathrm{Cov}(X,Y)
X \sim \mathcal{N}(\mu,\sigma^2)
\hat{\theta}
\bar{X}
S^2
```

## 微积分

```tex
\frac{d}{dx} f(x)
\frac{\partial f}{\partial x}
\nabla f
\nabla \cdot \mathbf{F}
\nabla \times \mathbf{F}
\frac{\partial^2 u}{\partial t^2}
```

## 物理常用

```tex
\mathbf{F}=m\mathbf{a}
\mathbf{p}=m\mathbf{v}
E=mc^2
\hbar
\omega
\varepsilon_0
\mu_0
```

麦克斯韦方程组片段：

```tex
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0},\\
\nabla \times \mathbf{B} &=
\mu_0\mathbf{J}
+ \mu_0\varepsilon_0\frac{\partial \mathbf{E}}{\partial t}.
\end{aligned}
```

## 常用括号

```tex
\left( x \right)
\left[ x \right]
\left\{ x \right\}
\left| x \right|
\left\| x \right\|
```

## 在文章中的写法

行内：

```md
$X \sim \mathcal{N}(\mu,\sigma^2)$
```

块级：

```md
{{< math >}}
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
{{< /math >}}
```
