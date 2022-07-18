# Validación de entrada

__`Nombre del servidor`__ Formatos aceptados son:

- FQDN único (por ejemplo, `collabora.mydomain.com` o `mydomain.com`)
- IP única (por ejemplo, `10.10.10.11`)

_Se aplican las mismas reglas para FQDN que en la sección anterior_

Regex usado para coincidir con: `^((([a-z\d](-?[a-z\d]){0,62})\.)*(([a-z\d](-?[a-z\d]){0,62})\. ([a-z](-?[a-z\d]){1,62})|((\d{1,3}\.){3}\d{1,3}))$` Puedes probar en vivo [aquí](https://regex101.com/r/mICKDp/1)

__`Contraseña para WebUI`__ Formatos aceptados son:

- Letras, números, símbolos, mínimo 8 caracteres (ej. `dg523$*a`- Acepta `a-z`, `A-Z`, `0-9` y `! #$%^&*?`

Regex utilizado para emparejar estos: `[a-zA-Z0-9!@#$%^&*?]{8,}` Puedes probar en vivo [aquí](https://regex101.com/r/ef3V88/1)

---

_Si encuentras un campo que crees que necesita validación, por favor abre un problema en github_
