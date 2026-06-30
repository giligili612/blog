---
author: "giligili612"
title: "vscode配置"
date: "2026-06-25"
description: "vscode配置"
tags: ["tools"]
categories: ["CS"]
---
# 配置

写不同项目用不同的配置文件，一般一种配置文件对应一种语言或者一种工作场景。

左下角设置->配置文件，新建配置文件并命名，这样即可配置不同工作场景所需的扩展。

## 默认配置
- chinese 语言包
- material icon theme
- catppuccin for vscode latte

设置里需要调的
- editor font size，这个根据不同屏幕需要调整，一般14 ～ 18,目前我4k 27寸屏调的16
- 在系统上安装JetBrains Mono字体，之后将它加入到 font family的第一个
- json里面加上 ` "chat.disableAIFeatures": true, `，禁用内置ai功能

后面其他配置文件均可在此配置文件上复制，继续配置

## c/c++

- clangd 不要参数名、推导类型等行内提示，不要自动加头文件

在配置json里面修改
```json
    "editor.inlayHints.enabled": "off",
    "clangd.arguments": [
       "--header-insertion=never"
    ],
```
- cmake  只需要cmake的语言提示即可，cmake tools隐藏太多细节了，cmake使用命令行更透明一些，不需要通过gui操作

## latex

开始之前先把texlive装好，直接安装完整版即可。 `sudo apt install texlive-full`

- Latex WorkShop
```json
    "latex-workshop.latex.tools": [
        {
            "name": "latexmk-xelatex-build",
            "command": "latexmk",
            "args": [
                "-xelatex",
                "-synctex=1",
                "-interaction=nonstopmode",
                "-file-line-error",

                // 每个 tex 单独一个 build 子目录
                "-outdir=build/%DOCFILE%",
                "-auxdir=build/%DOCFILE%",

                "%DOC%"
            ],
            "env": {
                // 让 LaTeX 从 TEXINPUTS 目录查找 input/include 文件
                "TEXINPUTS": "/home/hzk/math//:"
            }
        }
    ],

    "latex-workshop.latex.recipes": [
        {
            "name": "latexmk-xelatex-build",
            "tools": [
                "latexmk-xelatex-build"
            ]
        }
    ],

    "latex-workshop.latex.recipe.default": "first",
    "latex-workshop.view.pdf.viewer": "tab",
    "latex-workshop.latex.autoBuild.run": "onSave",
    "latex-workshop.latex.autoClean.run": "never",
    "latex-workshop.intellisense.package.enabled": true,
    "latex-workshop.view.pdf.internal.synctex.keybinding": "double-click"
```

-themes 把想用的主题放到上面`TEXINPUTS`的文件夹的themes文件夹底下
    - ElegantBook

```latex
\documentclass[cn,11pt,chinese]{elegantbook}

% =========================
% 基本信息
% =========================

\title{线性代数笔记}
\subtitle{Linear Algebra Notes}
\author{hzk}
\date{\today}

\begin{document}

% =========================
% 封面与目录
% =========================

\maketitle
\tableofcontents

% =========================
% 章节结构
% =========================

\chapter{向量空间}

\section{集合与向量}

\subsection{基本概念}

线性代数研究的核心对象之一是向量空间。直观地说，向量空间是一类可以进行加法和数乘运算的对象集合。

% =========================
% 定义环境
% =========================

\begin{definition}[向量空间]
设 $V$ 是一个集合，$\mathbb{F}$ 是一个域。如果 $V$ 上定义了加法和数乘，并且满足封闭性、结合律、交换律、零元、负元、分配律等公理，则称 $V$ 是定义在 $\mathbb{F}$ 上的向量空间。
\end{definition}

% =========================
% 例子环境
% =========================

\begin{example}
$\mathbb{R}^n$ 是定义在实数域 $\mathbb{R}$ 上的向量空间。
\end{example}

% =========================
% 公式
% =========================

给定向量 $v_1, v_2, \dots, v_n$ 和标量 $a_1, a_2, \dots, a_n$，表达式

\[
a_1v_1 + a_2v_2 + \cdots + a_nv_n
\]

称为这些向量的一个线性组合。

% =========================
% 定理环境
% =========================

\begin{theorem}
如果 $V$ 是向量空间，那么任意有限个向量的线性组合仍然属于 $V$。
\end{theorem}

% =========================
% 证明环境
% =========================

\begin{proof}
由向量空间对加法和数乘封闭可得。
\end{proof}

% =========================
% 命题、引理、推论
% =========================

\begin{lemma}
零向量是唯一的。
\end{lemma}

\begin{proposition}
向量的加法逆元是唯一的。
\end{proposition}

\begin{corollary}
若 $v \in V$，则 $0v = 0$。
\end{corollary}

% =========================
% 注记
% =========================

\begin{remark}
向量空间的定义看起来抽象，但它统一了几何向量、函数空间、多项式空间等对象。
\end{remark}

% =========================
% 习题
% =========================

\begin{exercise}
证明 $\mathbb{R}^2$ 在通常的向量加法和数乘下构成向量空间。
\end{exercise}

% =========================
% 分段与列表
% =========================

\section{线性组合}

线性组合可以用来描述一个向量是否能由一组向量生成。

\begin{enumerate}
    \item 如果一个向量可以写成若干向量的线性组合，则称它可以由这些向量表示。
    \item 所有线性组合构成的集合称为这些向量的张成空间。
\end{enumerate}

\begin{itemize}
    \item 加法对应向量之间的组合。
    \item 数乘对应向量的缩放。
    \item 线性组合同时使用加法和数乘。
\end{itemize}

% =========================
% 小结
% =========================

\section*{本章小结}

本章介绍了向量空间、线性组合以及基本的封闭性思想。

\end{document}
```