+++
title = '原子操作入门'
date = 2026-03-18
draft = false
description = '用 std::atomic 理解原子读改写与基本同步语义。'
math = false
+++

## 为什么需要原子操作

在多线程程序中，对共享变量的普通读写可能被编译器与处理器重排，也可能以非原子方式完成。`std::atomic` 提供了不可分割的读、写与读改写操作。

## 最小示例

```cpp
#include <atomic>
#include <thread>
#include <iostream>

std::atomic<int> counter{0};

void worker() {
    for (int i = 0; i < 1000; ++i) {
        counter.fetch_add(1, std::memory_order_relaxed);
    }
}

int main() {
    std::thread t1(worker);
    std::thread t2(worker);
    t1.join();
    t2.join();
    std::cout << counter.load() << '\n';
}
```

上面的 `fetch_add` 保证计数更新本身是原子的；若还需要线程间的同步与可见性约束，则需选择合适的 [内存序](/cpp/memory-model/)。

## 示意图

下图示意两个线程对同一原子变量的并发更新（示意，非精确时序）：

![原子计数示意](/images/cpp/memory-model/atomic-counter.svg)

## 小结

| 操作 | 作用 |
| --- | --- |
| `load` | 原子读取 |
| `store` | 原子写入 |
| `fetch_add` | 原子加并返回旧值 |
| `compare_exchange_*` | 条件交换 |

下一步可阅读同一专题中关于内存序的笔记。
