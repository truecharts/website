# Eingabeüberprüfung

## Admin-Benutzername

Benutzernamen für einen Administrator im Spotweb haben einige Einschränkungen.

* Folgende Wörter sind nicht erlaubt:
  * Gott
  * mod
  * Spot
  * admin
  * drazix
  * superuser
  * aufseher
  * wurzel
  * anonym
* Folgende Zeichen sind nicht erlaubt:
  * <
  * \>
* Regex wird verwendet, um den Benutzernamen zu überprüfen (du kannst es live [hier](https://regex101.com/r/LA4Io7/1)versuchen</a> ): `^((?!god|mod|spot|admin|drazix|superuser|superuser|root|anonymous)[^<>])*$`

## Admin-Vorname und Nachname

Vorname und Nachname im Spotweb haben einige Einschränkungen.

* Folgende Zeichen sind nicht erlaubt:
  * <
  * \>
* Mindestlänge von 2 Zeichen ist erzwungen
* Regex wurde verwendet, um den Vornamen und den Nachnamen zu überprüfen (du kannst hier live [versuchen](https://regex101.com/r/x2KGnU/1)): `^([^<>]{2})([^<>]*)$`

## Admin-E-Mail

Die E-Mail-Hinzufügungen werden im Spotweb mit dem eingebauten `_FILTER_VALIDATE_EMAIL` überprüft.

* Regex wurde verwendet, um die E-Mail zu überprüfen (du kannst es live [hier](https://regex101.com/r/yEmCoL/1)versuchen): ``^[a-zA-Z0-9. #$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])*$``

---
Wenn du ein Feld findest, das deiner Meinung nach einer Überprüfung bedarf, öffne bitte ein Problem auf github
