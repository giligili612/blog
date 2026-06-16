---
author: "giligili612"
title: "新的开始"
date: "2026-06-14"
description: "新博客的第一篇文章。"
tags: ["blog"]
categories: ["diary"]
---

奶奶在2026年6月9日去世的，也要开始面临离别了呢。还是得在这个世界上留下些什么，送给我爱的一切。

本人对该网站所有内容负责，我不否认ai很多时候帮助甚至参与到了文章的攥写，但是我会按照自己的想法修改、组织、输出，相信点进来的你是来看人写的东西的。

下面试一下多语言代码块：

{{< code-tabs >}}

{{< code-tab label="C++" lang="cpp" >}}
#include <iostream>
#include <string>

std::string greet(const std::string& name) {
    return "hello, " + name;
}

int main() {
    std::cout << greet("world") << '\n';
}
{{< /code-tab >}}

{{< code-tab label="C" lang="c" >}}
#include <stdio.h>

void greet(const char *name) {
    printf("hello, %s\n", name);
}

int main(void) {
    greet("world");
    return 0;
}
{{< /code-tab >}}


{{< code-tab label="Python" lang="python" >}}
def greet(name: str) -> str:
    return f"hello, {name}"

if __name__ == "__main__":
    print(greet("world"))
{{< /code-tab >}}


{{< code-tab label="Java" lang="java" >}}
public class Main {
    static String greet(String name) {
        return "hello, " + name;
    }

    public static void main(String[] args) {
        System.out.println(greet("world"));
    }
}
{{< /code-tab >}}


{{< code-tab label="Go" lang="go" >}}
package main

import "fmt"

func greet(name string) string {
    return "hello, " + name
}

func main() {
    fmt.Println(greet("world"))
}
{{< /code-tab >}}

{{< /code-tabs >}}
