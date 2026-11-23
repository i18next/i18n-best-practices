// Fails when the rules of this skill and of www.i18next.com/principles/best-practices drift apart:
// each rule here names the page's rule in a `<!-- page: … -->` line, and both lists must match in number and order.
import { readFile } from 'node:fs/promises'

const res = await fetch('https://www.i18next.com/principles/best-practices.md')
if (!res.ok) throw new Error(`the page answered ${res.status}`)
const pageRules = [...(await res.text()).matchAll(/^## (\d+\. .+)$/gm)].map((m) => m[1].trim())
const skill = await readFile(new URL('./skills/i18n-best-practices/SKILL.md', import.meta.url), 'utf8')
const skillRules = [...skill.matchAll(/<!-- page: (.+?) -->/g)].map((m) => m[1].trim())

if (pageRules.length === 0) throw new Error('no rules found on the page')
if (JSON.stringify(pageRules) !== JSON.stringify(skillRules)) {
  console.error('The rules differ from the page. Page:', pageRules, 'Skill:', skillRules)
  process.exit(1)
}
console.log(`${pageRules.length} rules in sync with the page`)
