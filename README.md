# i18n best practices

An agent skill for writing user-facing texts that translate correctly: whole sentences, plurals by count, variants
by context, numbers and dates through a format, keys named by meaning, markup inside the sentence and the other rules
in [`SKILL.md`](skills/i18n-best-practices/SKILL.md). Your coding agent applies them each time it writes or changes a
text, not only when the app is set up.

From the i18next maintainers. The rules hold for any i18n library (i18next, next-intl, react-intl, vue-i18n, Lingui
and others); the examples use [i18next](https://www.i18next.com). The same rules for people:
[Best practices](https://www.i18next.com/principles/best-practices).

## Install

```bash
npx skills add i18next/i18n-best-practices
```

Or copy [`skills/i18n-best-practices`](skills/i18n-best-practices) into your agent's skills folder (for Claude Code,
`.claude/skills/` in the project or `~/.claude/skills/`).

## Setting up i18next itself

This skill covers the texts. To take an app from hardcoded strings to i18next, run
`npx i18next-cli localize --print-agent-prompt` and follow the steps it prints.

## License

[MIT](LICENSE)
