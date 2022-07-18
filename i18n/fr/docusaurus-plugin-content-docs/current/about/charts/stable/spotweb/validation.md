# Validation de l'entrée

## Nom d'utilisateur admin

Les noms d'utilisateur pour un administrateur dans spotweb ont quelques restrictions.

* Les mots suivants ne sont pas autorisés :
  * dieu
  * mod
  * tache
  * Administrateur
  * drazix
  * superutilisateur
  * superviseur
  * racine
  * anonyme
* Les caractères suivants ne sont pas autorisés :
  * <
  * \>
* Regex utilisé pour valider le nom d'utilisateur (vous pouvez essayer en direct [ici](https://regex101.com/r/LA4Io7/1)) : `^((?!god|mod|spot|admin|drazix|superutilisateur|superviseur|root|anonyme)[^<>])*$`

## Prénom de l'administrateur et nom

Le prénom et le nom de famille dans spotweb ont quelques restrictions.

* Les caractères suivants ne sont pas autorisés :
  * <
  * \>
* Longueur minimale de 2 caractères est obligatoire
* Regex a utilisé pour valider le prénom et le nom de famille (vous pouvez essayer de vivre [ici](https://regex101.com/r/x2KGnU/1)): `^([^<>]{2})([^<>]*)$`

## E-mail de l'administrateur

Les adresses e-mail sont validées dans spotweb à l'aide du `_FILTER_VALIDATE_EMAIL` intégré.

* Regex utilisé pour valider l'email (vous pouvez essayer en direct [ici](https://regex101.com/r/yEmCoL/1)): ``^[a-zA-Z0-9. #$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$``

---
Si vous trouvez un champ dont vous pensez qu'il a besoin d'être validé, veuillez ouvrir un problème sur github
