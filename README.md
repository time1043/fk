# FK

An automated question-answering tool for online learning platforms (PTA, Gaoxiaobang).

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
│   │   ├── submit.js              # Submit helper
│   │   └── json.js                # JSON utilities
│   ├── module/                    # Modular business logic (importable)
│   └── script/                    # Standalone scripts
│       ├── pta/                   # PTA platform
│       │   ├── single/            # Single choice scripts
│       │   ├── multiple/          # Multiple choice scripts
│       │   └── coder/             # Programming scripts
│       └── gaoxiaobang/           # Gaoxiaobang platform
└── data/                          # Data storage
    ├── pta/
    │   ├── java/{chapter}-{type}/
    │   ├── mysql/{chapter}-{type}/
    │   └── network/{chapter}-{type}/
    └── gaoxiaobang/
        ├── java/{chapter}/
        └── xl/{chapter}/
```

### src/ Directory

| Directory | Description |
|-----------|-------------|
| `lib/` | Core libraries (LLM, prompts) - imported by other code |
| `utils/` | Shared utility functions - imported by other code |
| `module/` | Modular business logic - integrated into the module system |
| `script/` | Standalone scripts - executed independently |

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

| File | Description |
|------|-------------|
| `url-list.json` | Question URL list |
| `question-get.json` | Raw questions from browser |
| `question-get-clean.json` | Cleaned questions |
| `answer-ai.json` | AI-generated answers |
| `answer-ai-clean.json` | Cleaned AI answers |
| `answer-get.json` | Raw answers from browser |
| `answer-get-clean.json` | Cleaned fetched answers |
| `submit-data.json` | Data for browser submission |

### Script Files

| Prefix | Execution Environment |
|--------|----------------------|
| `__` (double underscore) | Browser console |
| `_` (single underscore) | Local Node.js |
| No prefix | Utility modules |

Script naming examples:
- `__question-get.js` - Fetch questions in browser
- `__answer-get.js` - Fetch answers in browser
- `__submit.js` - Submit answers in browser
- `_question-get-clean.js` - Clean questions locally
- `_answer-ai-clean.js` - Clean AI answers locally
- `_answer-get-clean.js` - Clean fetched answers locally

## Usage

```bash
# Install dependencies
pnpm install

# Run main script
pnpm dev

# Run specific scripts (see package.json for all commands)
pnpm psqc    # PTA single question clean
pnpm psaca   # PTA single answer clean from AI
```

## Tech Stack

- Node.js (ESM)
- LangChain (LLM integration)
- dotenvx (Environment management)

## License

ISC
