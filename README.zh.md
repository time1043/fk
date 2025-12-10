# FK

在线学习平台（PTA）的自动答题工具。

[English](./README.md)

## 项目结构

```
fk/
├── src/
│   ├── main.js                    # 主入口
│   ├── lib/                       # 核心库
│   │   ├── llm.js                 # LLM 集成
│   │   └── prompt/                # AI 提示词
│   ├── utils/                     # 通用工具
│   ├── cli/                       # CLI 入口（面向用户）
│   │   └── pta/
│   │       ├── single/            # 单选题 CLI
│   │       ├── multiple/          # 多选题 CLI
│   │       └── coder/             # 编程题 CLI
│   ├── module/                    # 核心解析模块（纯逻辑）
│   │   └── pta/
│   │       ├── single/            # 单选题模块
│   │       ├── multiple/          # 多选题模块
│   │       └── coder/             # 编程题模块
│   └── script/                    # 遗留脚本（早期尝试）
└── data/                          # 数据存储
    └── pta/
        ├── java/{章节}-{题型}/
        ├── mysql/{章节}-{题型}/
        └── network/{章节}-{题型}/
```

### src/ 目录说明

| 目录      | 说明                                           |
| --------- | ---------------------------------------------- |
| `lib/`    | 核心库（LLM、提示词）- 被其他代码导入          |
| `utils/`  | 通用工具函数 - 被其他代码导入                  |
| `cli/`    | CLI 入口 - 处理参数、文件读写，调用 module     |
| `module/` | 核心解析模块 - 纯数据转换，不涉及文件读写      |
| `script/` | 遗留脚本 - 早期尝试，不推荐使用                |

## 命名规范

### 目录命名

```
data/{平台}/{科目}/{章节}-{题型}/
```

题型使用全称，不缩写：

- `single` - 单选题
- `multiple` - 多选题
- `coder` - 编程题

### 数据文件

| 文件名                    | 说明                   |
| ------------------------- | ---------------------- |
| `url-list.json`           | 题目链接列表           |
| `question-get.json`       | 从浏览器获取的原始题目 |
| `question-get-clean.json` | 清洗后的题目           |
| `answer-ai.json`          | AI 生成的答案          |
| `answer-ai-clean.json`    | 清洗后的 AI 答案       |
| `answer-get.json`         | 从浏览器获取的原始答案 |
| `answer-get-clean.json`   | 清洗后的获取答案       |
| `submit-data.json`        | 浏览器端提交用的数据   |

### 脚本文件

| 前缀             | 执行环境     |
| ---------------- | ------------ |
| `__`（双下划线） | 浏览器控制台 |
| `_`（单下划线）  | 本地 Node.js |
| 无前缀           | 工具模块     |

## 使用方法

```bash
# 安装依赖
pnpm install
```

### 工作流程

#### 单选题/多选题

```
1. 浏览器: 获取 url-list.json（题集信息）
2. 浏览器: 执行 __question-get.js → question-get.json
3. 本地:   pnpm sqg/mqg → question-get-clean.json
4. AI:    生成答案 → answer-ai.json
5. 本地:   pnpm saa/maa → answer-ai-clean.json
6. 浏览器: 使用 answer-ai-clean.json 执行 __submit.js
```

#### 编程题

```
1. 浏览器: 获取 url-list.json（题集信息）
2. 本地:   pnpm cuq → url-list-question-clean.json（题目 URL 列表）
3. 浏览器: 使用 URL 列表执行 __question-get.js → question-get.json
4. 本地:   pnpm cqg:java/sql → question-get-clean.json
5. AI:    生成答案 → answer-ai.json
6. 本地:   pnpm caa:java → answer-ai-clean.json
7. 浏览器: 使用 answer-ai-clean.json 执行 __submit.js

# 或者获取已有答案:
2. 本地:   pnpm cua → url-list-answer-clean.json（答案 URL 列表）
3. 浏览器: 使用 URL 列表执行 __answer-get.js → answer-get.json
4. 本地:   pnpm cag:java → answer-get-clean.json
```

### 命令

```bash
# 初始化数据目录
pnpm s:init <data-dir>   # 单选/多选: 创建 question-get.json, answer-ai.json
pnpm c:init <data-dir>   # 编程题: 创建 question-get.json, answer-ai.json, answer-get.json, url-list.json

# 单选题
pnpm sqg <data-dir>     # 清洗题目
pnpm saa <data-dir>     # 清洗 AI 答案

# 多选题
pnpm mqg <data-dir>     # 清洗题目
pnpm maa <data-dir>     # 清洗 AI 答案

# 编程题 (Java)
pnpm cqg:java <data-dir>    # 清洗题目
pnpm cag:java <data-dir>    # 清洗获取的答案
pnpm caa:java <data-dir>    # 清洗 AI 答案
pnpm cuq <data-dir> <url>   # 生成题目 URL 列表
pnpm cua <data-dir> <url>   # 生成答案 URL 列表

# 编程题 (SQL)
pnpm cqg:sql <data-dir>     # 清洗题目
```

## 技术栈

- Node.js (ESM)
- LangChain (LLM 集成)
- dotenvx (环境变量管理)

## 许可证

ISC
