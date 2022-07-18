# Validation de l'entrée

__`Nom du serveur`__ Les formats acceptés sont:

- FQDN unique (par exemple. `collabora.mydomain.com` ou `mydomain.com`)
- IP unique (par ex. `10.10.10.11`)

_Les mêmes règles s'appliquent pour le FQDN comme dans la section ci-dessus_

Regex a utilisé cette correspondance : `^((([a-z\d](-?[a-z\d]){0,62})\.)*(([a-z\d](-?[a-z\d]){0,62})\. ([a-z](-?[a-z\d]){1,62})|(\d{1,3}\.){3}\d{1,3}))$` Vous pouvez essayer de vivre [ici](https://regex101.com/r/mICKDp/1)

__`Mot de passe pour WebUI`__ Les formats acceptés sont:

- Lettres, chiffres, symboles, minimum 8 caractères (ex. `dg523$*a`) - Il accepte `a-z`, `A-Z`, `0-9` et `! #$%^&*?`

Regex utilisé pour les faire correspondre : `[a-zA-Z0-9!@#$%^&*?]{8,}` Vous pouvez essayer en direct [ici](https://regex101.com/r/ef3V88/1)

---

_Si vous trouvez un champ dont vous pensez qu'il a besoin d'être validé, veuillez ouvrir un problème sur github_
