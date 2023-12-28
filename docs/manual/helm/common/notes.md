---
title: Notes
---

## Keys

Appears in:

- `.Values.notes`

---

### notes

Define values for `NOTES.txt`

- Key: `notes`
- Type: `map`
- Required: `❌`
- tpl: `❌`
- Default:

```yaml
notes:
  header: # See notes.header
  custom: # See notes.custom
  footer: # See notes.footer
```

---

### notes.header

Define header

- Key: `notes.header`
- Type: `string`
- Required: `❌`
- tpl: `✅`
- Default:

```yaml
header: |
  # Welcome to SCALE
  Thank you for installing <{{ .Chart.Name }}>.
```

---

### notes.custom

Define custom message, this go between header and footer

- Key: `notes.custom`
- Type: `string`
- Required: `❌`
- tpl: `✅`
- Default: `""`

---

### notes.footer

Define footer

- Key: `notes.footer`
- Type: `string`
- Required: `❌`
- tpl: `✅`
- Default:

```yaml
footer: |
  # Documentation
  Documentation for this chart can be found at ...
  # Bug reports
  If you find a bug in this chart, please file an issue at ...
```

---

## Full Examples

```yaml
notes:
  custom: |
    This is a custom message
```
