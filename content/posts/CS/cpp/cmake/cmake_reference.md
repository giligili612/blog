---
author: "giligili612"
title: "CMake 常用配置手册"
date: "2026-06-16"
description: "CMake Most Common Used Reference"
tags: ["cpp", "cmake", "reference"]
categories: ["CS"]
---

# CMake 常用配置手册

## 项目最顶层配置
```cmake
# cpp标准配置，以下两句配置一般一起使用

# 后续创建的target默认使用cpp17进行编译，                                     
set(CMAKE_CXX_STANDARD 17)              # cmake >= 3.1
# 必须支持 CMAKE_CXX_STANDARD 配置的标准，否则无法编译                         
set(CMAKE_CXX_STANDARD_REQUIRED ON)     # cmake >= 3.1


# 编译器配置

# 关闭编译器扩展，用于跨平台项目
set(CMAKE_CXX_EXTENSIONS OFF)           # cmake >= 3.1
```
