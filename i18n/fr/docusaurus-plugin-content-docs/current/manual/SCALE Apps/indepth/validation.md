# Validation

La validation s'assure que votre entrée est dans le format souhaité, de sorte que l'application peut l'analyser sans problème. Vous trouverez ci-dessous plus d'informations sur les champs ayant la validation mentionnée et sur les formats acceptés.

## Toutes les applications

---

## Ressources et Appareils

**`CPU`** Les formats acceptés sont:

- Nombre entier brut (par ex. `1`) - Cela signifie 1 hyperfil
- Float (par ex. `0.5`) - Cela signifie mi-hyperfil
- Milicpu (par ex. `500m`) Cela signifie aussi un demi hyperfil

Regex utilisé pour correspondre à ceux-ci: `^(?!^0(\.0|m|)$)([0-9]+)(\.[0-9]|m? $` Vous pouvez essayer de vivre [ici](https://regex101.com/r/WxComc/1) Plus d'infos détaillées peuvent être trouvées [ici](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-cpu)

**`Mémoire RAM`** Les formats acceptés sont:

- Suffixé avec E, P, T, G, M, K (par ex. `5G`) - Cela signifie 5Gigaoctet de RAM
- Suffixé avec Ei, Pi, Ti, Gi, Mi, Ki (par exemple. `5Gi`) - Cela signifie 5Gibibyte de RAM
- `134217728`) - Cela signifie 128Mégaoctets de RAM
- En tant que format d'exposant (par ex. `134e6`) cela signifie ~128mégaoctets de RAM

Regex utilisé pour correspondre à ceux-ci: `^(?! 0(e[0-9]|[EPTGMK]i?|)$)([0-9]+)(|[EPTGMK]i? e[0-9]+)$` Vous pouvez essayer en direct [ici](https://regex101.com/r/LyDc6u/1) Plus d'informations peuvent être trouvées [ici](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-memory)

## Chemins

Les formats acceptés sont :

- Chemins préfixés par `/`, sans caractères d'espacement au début ou à la fin de chaque segment (par ex. `/media`, `/media/shows`, `/media/files/`)

Les caractères acceptés sont :

- `a-z`, `A-Z`
- `0-9`
- `.`, `-`, `_`
- `" "` (espace blanc, pas au début ou à la fin)

Regex utilisé pour correspondre à ceux-ci: `^\/([a-zA-Z0-9._-]+(\s?[a-zA-Z0-9._-]+|\/?))+$` Vous pouvez essayer en direct [ici](https://regex101.com/r/WjSpXg/1)

---

_Si vous trouvez un champ dont vous pensez qu'il a besoin d'être validé, veuillez ouvrir un problème sur github_
