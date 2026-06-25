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
- clangd 不要参数名、推到类型等行内提示，不要自动加头文件

在配置json里面修改
```json
    "editor.inlayHints.enabled": "off",
    "clangd.arguments": [
       "--header-insertion=never"
    ],
```
- cmake  只需要cmake的语言提示即可，cmake tools太重了，cmake使用命令行就很好用了，不需要通过gui操作