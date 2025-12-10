# Project Rules

## Important Rules

- **NEVER read the contents of `.json` files in the `data/` directory** - These files are large and not useful for development. You may list the directory structure (`ls`), but do not read file contents.

## Documentation

- README.md should be written in English by default
- Always create a 1:1 Chinese version as README.zh.md

## Naming Conventions

### Directory Structure

```
data/{platform}/{subject}/{chapter}-{question_type}/
```

Question types must use full names (no abbreviation):

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

### File Variants

Use dot notation for language/type variants (not hyphen):

- `question-get-clean.sql.js` (correct)
- `question-get-clean-sql.js` (incorrect)
- `question-get-clean.java.js` (correct)
- `question-get-clean-java.js` (incorrect)

### Script Files

| Prefix                   | Environment     | Description                           |
| ------------------------ | --------------- | ------------------------------------- |
| `__` (double underscore) | Browser console | Scripts executed in browser DevTools  |
| `_` (single underscore)  | Local Node.js   | Standalone local scripts              |
| No prefix                | Module          | Utility functions serving the project |

Script naming pattern:

- `__question-get.js` - Fetch questions in browser
- `__answer-get.js` - Fetch answers in browser
- `__submit.js` - Submit answers in browser
- `_question-get-clean.js` - Clean questions locally
- `_answer-ai-clean.js` - Clean AI answers locally
- `_answer-get-clean.js` - Clean fetched answers locally

### Source Directory Structure

```
src/
├── main.js              # Main entry
├── lib/                 # Core libraries (importable)
│   ├── llm.js           # LLM integration
│   └── prompt/          # AI prompts
├── utils/               # Shared utility functions (importable)
├── module/              # Modular business logic (importable, integrated into module system)
└── script/              # Standalone scripts (executed independently)
    ├── {platform}/
    │   └── {question_type}/   # Scripts with _ or __ prefix
```

| Directory | Purpose                                                          |
| --------- | ---------------------------------------------------------------- |
| `lib/`    | Core libraries - imported by other code                          |
| `utils/`  | Shared utilities - imported by other code                        |
| `module/` | Business modules - integrated into the module system, importable |
| `script/` | Standalone scripts - executed independently, not imported        |

## Code Style

- Use ESM modules (`import`/`export`)
- Project uses pnpm as package manager
- **All code comments must be in English** - No Chinese in `.js` files (except `src/lib/prompt/` for AI prompts)
