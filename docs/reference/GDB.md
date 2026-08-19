---
title: GDB
createTime: 2026/08/16 20:51:24
permalink: /reference/gdb/
---
GDB 速查手册
应用程序编译时带`-g`参数才能方便调试

## 启动调试与退出
- `gdb <exe>` 调试相应程序
- `gdb --args <exe> <args>` 传入相应参数并调试程序
- 开始调试之后 `r <args>` 可以运行程序并传入相应参数
- 开始调试之后 `set args <args>` 可以设置参数
- `quit`、`q` 退出调试

## 程序已经启动，附加到进程
- `gdb --pid <pid>`
- `gdb attach <pid>`
- `detach` 剥离进程，程序继续运行，gdb退出不会关闭进程

附加到运行的进程时会中断进程，设置完相应的断点以及其他东西之后`c`继续运行进程

## 跟踪程序执行
- `next`、`n` 逐过程执行，直接进入下一行，执行这一行函数，不进入这一行的函数
- `step`、`s` 逐语句执行，一句一句执行，如果这一行有函数则进入该函数逐句执行
- `finish` 在函数内部时直接完成整个函数的执行，回到调用该函数的地方

## 断点设置
- `b <function>` 在函数入口设置断点
- `b <file>:<line>` 在文件的某一行设置断点
- `b <location> if <condition>` condition 满足某个条件时进入断点
    - `b main.cpp:42 if count == 100`，在循环时特别有用
- `tb <location>` 临时断点，只触发一次
- `i b` 查看断点信息
- `d <breakpoint-number>` 删除断点 断点编号使用`i b`查看
- `delete` 删除全部断点
- `disable/enable <breakpoint-number>` 禁用启用断点

## 观察点
- `watch <expression>` expression的值被写入时中断
- `rwatch <expression>` expression的值被读取时中断
- `awatach <expression>` expression的值被读取或者写入时中断

## 查看变量
- `p <expression>` 查看变量的值
- `info args` 查看函数参数
- `set print null-stop` 打印字符串时更干净
- `set print pretty` 打印结构体更漂亮
- `set print array on` 打印数组更漂亮
- `p strlen(str)`、`p sizeof(int)` p也可以配合这些函数使用来查看变量的信息
- `p <expression> = <value>` 修改expression的值为value
- `display <expression>` 每次程序暂停，gdb自动打印
- `undisplay <number>` number来自 `info display`