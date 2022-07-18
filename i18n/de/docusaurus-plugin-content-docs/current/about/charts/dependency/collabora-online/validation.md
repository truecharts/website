# Eingabeüberprüfung

__`Servername`__ Akzeptierte Formate sind:

- Single FQDN (z. B. `collabora.mydomain.com` oder `mydomain.com`)
- Einzelne IP (z. B. `10.10.10.11`)

_Gleiche Regeln gelten für FQDN wie in dem obigen Abschnitt_

Regex wird verwendet, um dies zu folgen: `^(([a-z\d](-?[a-z\d]){0,62})\.)*(([a-z\d](-?[a-z\d]){0,62})\. ([a-z](-?[a-z\d]){1,62})|((\d{1,3}\.){3}\d{1,3}))$` Du kannst live versuchen [hier](https://regex101.com/r/mICKDp/1)

__`Passwort für WebUI`__ Akzeptierte Formate sind:

- Buchstaben, Zahlen, Symbole, mindestens 8 Zeichen (z. `dg523$*a`) - Es akzeptiert `a-z`, `A-Z`, `0-9` und `! #$%^&*?`

Regex passt zu diesen: `[a-zA-Z0-9!@#$%^&*?]{8,}` Hier können Sie live versuchen [](https://regex101.com/r/ef3V88/1)

---

_Wenn du ein Feld findest, das deiner Meinung nach einer Überprüfung bedarf, öffne bitte ein Problem auf github_
