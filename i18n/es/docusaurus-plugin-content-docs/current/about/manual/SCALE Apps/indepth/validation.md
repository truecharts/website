# Validación

La validación se asegura de que la entrada esté en el formato deseado, para que la aplicación pueda analizarla sin problemas. A continuación puede encontrar más información sobre qué campos tienen la validación mencionada y qué formatos son aceptados.

## Todas las aplicaciones

---

## Recursos y dispositivos

**`CPU`** formatos aceptados son:

- Entero simple (ej. `1`) - Esto significa 1 hiperhilo
- Float (ej. `0.5`) - Esto significa medio hiperhilo
- Milicpu (por ejemplo, `500m`) Esto también significa medio hiperhilo

Regex usado para emparejar estos: `^(?!^0(\.0|m|)$)([0-9]+)(\.[0-9]|m? $` Puedes probar en vivo [aquí](https://regex101.com/r/WxComc/1) Puedes encontrar información más detallada [aquí](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-cpu)

**`RAM de memoria`** formatos aceptados son:

- Sufijo con E, P, T, G, M, K (ej. `5G`) - Esto significa 5Gigabyte de RAM
- Sufijo con Ei, Pi, Ti, Gi, Mi, Ki (ej. `5Gi`) - Esto significa 5Gibibyte de RAM
- Entero llano (ej. `134217728`) - Esto significa 128Megabyte de RAM
- Como formato exponente (por ejemplo, `134e6`) Esto significa ~128Megabyte de RAM

Regex usado para coincidir eso: `^(?! 0(e[0-9]|[EPTGMK]i?|)$)([0-9]+)(|[EPTGMK]i? e[0-9]+)$` Puedes probar en vivo [aquí](https://regex101.com/r/LyDc6u/1) Puedes encontrar más información [aquí](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#meaning-of-memory)

## Rutas

Los formatos aceptados son:

- Rutas prefijadas con `/`, sin caracteres en espacios en blanco al principio o al final de cada segmento (por ejemplo. `/media`, `/media/shows`, `/media/movies/`)

Los caracteres aceptados son:

- `a-z`, `A-Z`
- `0-9`
- `.`, `-`, `_`
- `" "` (Espacio en blanco, no en principio o final)

Regex utilizada para emparejar estos: `^\/([a-zA-Z0-9._-]+(\s?[a-zA-Z0-9._-]+|\/?))+$` Puedes probar en vivo [aquí](https://regex101.com/r/WjSpXg/1)

---

_Si encuentras un campo que crees que necesita validación, por favor abre un problema en github_
