# Zero 架构学习工作区

这是一个用 `/teach` 搭建的学习工作区,目标是**通过读一手源码理解 Zero 这个终端 coding agent 的架构**,直到能自己画出一个可比的 agent 骨架。

- 学习对象:`github.com/Gitlawb/zero`(约 68 个 internal 包)
- 源码检出在相邻目录 `../zero`,课程里所有引用都用相对路径 `../zero/...`,并精确到 `file:line`。
- 本工作区刻意放在 Zero 仓库**之外**,不污染干净的 checkout。

> 完整的使命说明见 [MISSION.md](MISSION.md)。

## 怎么用

课程入口是根目录的 [`index.html`](index.html) —— 按分组列出全部课程,建议按序读(后面的课常回指前面的)。放在根目录是为了能直接开 GitHub Pages(Settings → Pages,Source 选 `main` 分支根目录,站点首页即此文件)。

```sh
open index.html
```

每一课只讲**一个架构决定**,配三道回忆测验和一份「接下来该读的源码」清单。遇到不清楚的地方,直接在 `/teach` 里追问即可 —— agent 就是你的老师。

## 目录结构

| 路径 | 内容 |
| --- | --- |
| `MISSION.md` | 学习使命:为什么学、学成什么样、边界 |
| `NOTES.md` | 教学偏好与学习者画像(资深 Go 开发,讲设计不讲语法,课程用中文) |
| `RESOURCES.md` | 可信资源清单(主要就是仓库本身) |
| `index.html` | 课程目录首页(GitHub Pages 站点根) |
| `lessons/` | 全部课程(`0001-*.html` … `0020-*.html`) |
| `reference/` | 压缩后的速查文档,跨课复用 |
| `diagrams/` | 时序图 / 流程图 |
| `assets/` | 共享组件:`course.css`(统一样式)、`quiz.js`(测验控件) |
| `learning-records/` | 已被验证的关键理解记录(暂空) |

## 进度

已完成 **20 课**,覆盖:核心循环与上下文(01–05)、交互与持久化(06–08)、Provider 与流(09–12)、沙箱安全(13–14)、会话拓扑与专家子会话(15–16)、工具与扩展系统(17–20)。

想继续时,在 Zero 仓库目录下运行 `/teach <你想学的主题>` 即可;不指定主题时,agent 会依据学习记录和使命挑选下一课。
