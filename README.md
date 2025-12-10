# FK

> **Note**: This documentation is AI-generated and may contain errors.

An automated question-answering tool for online learning platforms (PTA).

[中文文档](./README.zh.md)

## Project Structure

```
fk/
├── src/
│   ├── main.js                    # Main entry
│   ├── lib/                       # Core libraries
│   │   ├── llm.js                 # LLM integration
│   │   └── prompt/                # AI prompts
│   ├── utils/                     # Shared utilities
│   ├── cli/                       # CLI entry points (user-facing)
│   │   └── pta/
│   │       ├── single/            # Single choice CLI
│   │       ├── multiple/          # Multiple choice CLI
│   │       └── coder/             # Programming CLI
│   ├── module/                    # Core parsing modules (pure logic)
│   │   └── pta/
│   │       ├── single/            # Single choice modules
│   │       ├── multiple/          # Multiple choice modules
│   │       └── coder/             # Programming modules
│   └── script/                    # Legacy scripts (early experiments)
└── data/                          # Data storage
    └── pta/
        ├── java/{chapter}-{type}/
        ├── mysql/{chapter}-{type}/
        └── network/{chapter}-{type}/
```

### src/ Directory

| Directory | Description                                                  |
| --------- | ------------------------------------------------------------ |
| `lib/`    | Core libraries (LLM, prompts) - imported by other code       |
| `utils/`  | Shared utility functions - imported by other code            |
| `cli/`    | CLI entry points - handles args, file I/O, calls module      |
| `module/` | Core parsing modules - pure data transformation, no file I/O |
| `script/` | Legacy scripts - early experiments, not recommended          |

## Naming Conventions

### Directory Naming

```
data/{platform}/{subject}/{chapter}-{question_type}/
```

Question types (full name, no abbreviation):

- `single` - Single choice questions
- `multiple` - Multiple choice questions
- `coder` - Programming questions

### Data Files

| File                      | Description                 |
| ------------------------- | --------------------------- |
| `url-list.json`           | Question URL list           |
| `question-get.json`       | Raw questions from browser  |
| `question-get-clean.json` | Cleaned questions           |
| `answer-ai.json`          | AI-generated answers        |
| `answer-ai-clean.json`    | Cleaned AI answers          |
| `answer-get.json`         | Raw answers from browser    |
| `answer-get-clean.json`   | Cleaned fetched answers     |
| `submit-data.json`        | Data for browser submission |

### Script Files

| Prefix                   | Execution Environment |
| ------------------------ | --------------------- |
| `__` (double underscore) | Browser console       |
| `_` (single underscore)  | Local Node.js         |
| No prefix                | Utility modules       |

## Usage

```bash
# Install dependencies
pnpm install
```

### Workflow

#### Single/Multiple Choice

```
1. Browser: Refresh page, capture ajax response from Network panel → question-get.json
2. Local:   pnpm sqg/mqg → question-get-clean.json

3. AI:     Generate answers → answer-ai.json
4. Local:   pnpm saa/maa → answer-ai-clean.json

5. Browser: Run __submit.js with answer-ai-clean.json
```

#### Coder (Programming)

```
1. Browser: Get url-list.json (problem set info)

2. Local:   pnpm cuq → url-list-question-clean.json (question URLs)
3. Browser: Run __question-get.js with URLs → question-get.json
4. Local:   pnpm cqg:java/sql → question-get-clean.json

5. AI:     Generate answers → answer-ai.json
6. Local:   pnpm caa:java → answer-ai-clean.json

7. Browser: Run __submit.js with answer-ai-clean.json


# Or fetch existing answers:
4. Local:   pnpm cua → url-list-answer-clean.json (answer URLs)

5. Browser: Run __answer-get.js with URLs → answer-get.json
6. Local:   pnpm cag:java → answer-get-clean.json
```

### Commands

```bash
# Initialize data directory
pnpm s:init <data-dir>   # For single/multiple: creates question-get.json, answer-ai.json
pnpm c:init <data-dir>   # For coder: creates question-get.json, answer-ai.json, answer-get.json, url-list.json

# Single choice
pnpm sqg <data-dir>     # Clean questions
pnpm saa <data-dir>     # Clean AI answers

# Multiple choice
pnpm mqg <data-dir>     # Clean questions
pnpm maa <data-dir>     # Clean AI answers

# Coder (Java)
pnpm cqg:java <data-dir>    # Clean questions
pnpm cag:java <data-dir>    # Clean fetched answers
pnpm caa:java <data-dir>    # Clean AI answers
pnpm cuq <data-dir> <url>   # Generate question URLs
pnpm cua <data-dir> <url>   # Generate answer URLs

# Coder (SQL)
pnpm cqg:sql <data-dir>     # Clean questions
```

## Tech Stack

- Node.js (ESM)
- LangChain (LLM integration)
- dotenvx (Environment management)

## License

ISC
