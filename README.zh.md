# FK

在线学习平台（PTA、高校邦）的自动答题工具。

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
│   │   ├── submit.js              # 提交辅助
│   │   └── json.js                # JSON 工具
│   ├── module/                    # 模块化业务逻辑（可导入）
│   └── script/                    # 独立脚本
│       ├── pta/                   # PTA 平台
│       │   ├── single/            # 单选题脚本
│       │   ├── multiple/          # 多选题脚本
│       │   └── coder/             # 编程题脚本
│       └── gaoxiaobang/           # 高校邦平台
└── data/                          # 数据存储
    ├── pta/
    │   ├── java/{章节}-{题型}/
    │   ├── mysql/{章节}-{题型}/
    │   └── network/{章节}-{题型}/
    └── gaoxiaobang/
        ├── java/{章节}/
        └── xl/{章节}/
```

### src/ 目录说明

| 目录 | 说明 |
|------|------|
| `lib/` | 核心库（LLM、提示词）- 被其他代码导入 |
| `utils/` | 通用工具函数 - 被其他代码导入 |
| `module/` | 模块化业务逻辑 - 融入模块系统 |
| `script/` | 独立脚本 - 单独执行 |

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

| 文件名 | 说明 |
|--------|------|
| `url-list.json` | 题目链接列表 |
| `question-get.json` | 从浏览器获取的原始题目 |
| `question-get-clean.json` | 清洗后的题目 |
| `answer-ai.json` | AI 生成的答案 |
| `answer-ai-clean.json` | 清洗后的 AI 答案 |
| `answer-get.json` | 从浏览器获取的原始答案 |
| `answer-get-clean.json` | 清洗后的获取答案 |
| `submit-data.json` | 浏览器端提交用的数据 |

### 脚本文件

| 前缀 | 执行环境 |
|------|---------|
| `__`（双下划线） | 浏览器控制台 |
| `_`（单下划线） | 本地 Node.js |
| 无前缀 | 工具模块 |

脚本命名示例：
- `__question-get.js` - 浏览器获取题目
- `__answer-get.js` - 浏览器获取答案
- `__submit.js` - 浏览器提交答案
- `_question-get-clean.js` - 本地清洗题目
- `_answer-ai-clean.js` - 本地清洗 AI 答案
- `_answer-get-clean.js` - 本地清洗获取的答案

## 使用方法

```bash
# 安装依赖
pnpm install

# 运行主脚本
pnpm dev

# 运行特定脚本（完整命令见 package.json）
pnpm psqc    # PTA 单选题目清洗
pnpm psaca   # PTA 单选 AI 答案清洗
```

## 技术栈

- Node.js (ESM)
- LangChain (LLM 集成)
- dotenvx (环境变量管理)

## 许可证

ISC
