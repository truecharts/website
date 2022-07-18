# Validierung

Die Validierung stellt sicher, dass Ihre Eingabe im gewünschten Format ist, so dass die Anwendung sie problemlos parsen kann. Nachfolgend finden Sie weitere Informationen darüber, welche Felder die oben genannte Validierung haben und welche Formate akzeptiert werden.

## Alle Apps

---

## Ressourcen und Geräte

**`CPU`** Akzeptierte Formate sind:

- Einfache Ganzzahl (z. B. `1`) - Das bedeutet 1 Hyperthread
- Float (zB. `0,5`) - Das bedeutet Halb-Hyperthread
- Milicpu (z. B. `500m`) Das bedeutet auch den halben Hyperthread

Regex entspricht diesen: `^(?!^0(\.0|m|)$)([0-9]+)(\.[0-9]|m? $` Sie können live versuchen [hier](https://regex101.com/r/WxComc/1) Weitere Details finden Sie [hier](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-cpu)

**`Speicher RAM`** Akzeptierte Formate sind:

- Erreicht mit E, P, T, G, M, M, K (z. B. `5G`) - Das bedeutet 5Gigabyte RAM
- Ausgefüllt mit Ei, Pi, Ti, Gi, Mi, Ki (zB. `5Gi`) - Das bedeutet 5Gibyte RAM
- Einfacher Integer (z. B. `134217728`) - Das bedeutet 128Megabyte RAM
- Als Exponent Format (z.B. `134e6`) bedeutet ~128Megabyte RAM

Regex passt zu diesen: `^(?! 0(e[0-9]|[EPTGMK]i?|)$)([0-9]+)(|[EPTGMK]i? e[0-9]+)$` Sie können live versuchen [hier](https://regex101.com/r/LyDc6u/1) Weitere Details finden Sie [hier](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-memory)

## Pfade

Akzeptierte Formate sind:

- Pfade mit `/`, ohne Leerzeichen am Anfang oder Ende jedes Segments (z. B. `/media`, `/media/shows`, `/media/movies/`)

Akzeptierte Zeichen sind:

- `a-z`, `A-Z`
- `0-9`
- `.`, `-`, `_`
- `"` (Leerraum, nicht am Anfang oder Ende)

Regex passt zu diesen: `^\/([a-zA-Z0-9._-]+(\s?[a-zA-Z0-9._-]+|\/?))+$` Hier können Sie live versuchen [](https://regex101.com/r/WjSpXg/1)

---

_Wenn du ein Feld findest, das deiner Meinung nach einer Überprüfung bedarf, öffne bitte ein Problem auf github_
