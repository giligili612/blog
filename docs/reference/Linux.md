---
title: Linux
createTime: 2026/08/10 17:43:41
permalink: /reference/linux/
---
# Linux 常用命令

## 进程
假设进程名字是`camel`，进程号PID是`1000`

### 粗略查看
- 查看所有进程 `ps aux`
   ```bash
  USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
  root           1  0.0  0.1 169480 12480 ?        Ss   Aug10   0:02 /sbin/init
  hzk         1000  1.2  2.3 825412 189440 pts/0   Sl+  10:30   0:15 ./camel --port 8080

  %CPU: 单个CPU核的占用百分比，超过100的话就是占用了两个核了
  %MEM: 物理内存占用百分比
  VSZ: 虚拟内存(KB)
  RSS: 实际占用物理内存(KB)
  TTY: 终端；`?`表示无终端
  STAT: 状态：R 运行; S 睡眠; D 不可中断; Z 僵尸; T 停止; 后面跟 s 会话头; l 多线程; + 前台
  START: 启动时间
  TIME: 累积CPU时间
   ```
  - `ps aux | grep camel` **根据进程名字查信息**，值得注意的是这个命令的输出会带上该命令自己

- **根据PID查询** `ps -fp 1000` (这个命令的输出更清晰一点)，其中`PPID`指父进程pid
- 只**查询PID** `pidof camel`

### 精细查看
- **根据PID查询可执行文件真实路径** `ls -l /proc/1000/exe`
- **根据PID查询当前工作目录** `ls -l /proc/1000/cwd` (程序的相对路径、读文件都相对于这行命令的输出)
- **根据PID查询进程详细状态** `cat /proc/1000/status` 
  - `Threads`的值是当前进程的线程数
- **根据PID查询打开的文件、套接字** `ls -l /proc/1000/fd`

### 结束进程
- `kill 1000`     发SIGTERM，进程自己收尾退出
- `kill -9 1000`  强制杀掉进程
- `pkill camel`   根据进程名杀进程

## 网络
