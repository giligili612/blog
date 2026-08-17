---
title: CMake
createTime: 2026/08/10 17:15:07
permalink: /reference/c-make/
---
CMake常用
## 顶层CMake
```cmake
cmake_minimum_required(VERSION 3.14)  # CMake最小版本

# project名字、版本，项目语言
# ${PROJECT_NAME} 可以拿到当前project名字
# ${CMAKE_PROJECT_NAME} 可以拿到最顶层的project名字
project(camel VERSION 1.0.0 LANGUAGES C CXX) 

# cpp语言相关配置，标准、强制标准、clangd
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

# 子文件夹
add_subdirectory(camel)
```
## 一般target
```cmake
add_executable(camel
  main.cc
  Camel.cc
)

# ${PROJECT_NAME}：当前 project 的名字
# ${PROJECT_SOURCE_DIR}：当前 project 的源码根目录
# ${CMAKE_PROJECT_NAME}：最顶层 project 的名字
# ${CMAKE_SOURCE_DIR}：最顶层 CMake 源码目录

# 把 ${PROJECT_SOURCE_DIR} 这个目录加入 camel 这个 target 的头文件搜索路径。
# PRIVATE 该include路径我自己需要；PUBLIC 我的使用者也需要
target_include_directories(camel PRIVATE ${PROJECT_SOURCE_DIR})

target_link_libraries(camel PRIVATE
  camel_base
  asio::asio
)
```
## 库target
```cmake
add_library(camel_db STATIC
  DataBase.cc
  ODB_Path.cc
  ODB_Station.cc
  ODB_TaskAction.cc
)

target_include_directories(camel_db PUBLIC ${PROJECT_SOURCE_DIR})
target_link_libraries(camel_db PUBLIC SQLiteCpp)

# 该target的上层target链接它
add_subdirectory(db)
add_library(camel_base STATIC
  Logger.cc
)

target_include_directories(camel_base PUBLIC ${PROJECT_SOURCE_DIR})

# PRIVATE:下游编译时不需要看到fmt的声明，只用包装好的对外公共API
# PUBLIC:下游编译时需要看到fmt的函数或者类型声明，下面两个例子是典型
# #define LOG_INFO(...) fmt::print(__VA_ARGS__) 下游需要fmt::print的声明
# void log(fmt::format_string<Args...>fmt, ...) 下游需要 fmt::format_string

target_link_libraries(camel_base
  PUBLIC
    camel_db
    fmt::fmt
)
```
