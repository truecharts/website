# Tests unitaires

Nous testons unanimement notre bibliothèque commune, alors qu'elle n'est pas proche de la couverture complète, mais elle offre des vérifications de base.

## Exécution des tests

L'exécution de ces tests peut se faire comme bon vous semble. Dans ce document, nous nous limitons à utiliser Visual Studio Code, en utilisant notre Conteneur de Développement.

### Utiliser Visual Studio Code

Notre dépôt est livré avec une définition de Visual Studio Code [conteneur de développement](https://code.visualstudio.com/docs/remote/containers) et `lancement. son` qui vous permettent de configurer rapidement un environnement dans lequel vous pouvez exécuter les tests.

#### Pré-requis

- Visual Studio Code est installé.
- Docker est installé et en cours d'exécution.
- L'extension "Remote - Containers" est installée et activée dans Visual Studio Code.

Pour plus de détails, veuillez vous référer à la [documentation officielle](https://code.visualstudio.com/docs/remote/containers#_system-requirements).

#### Exécution des tests

Une fois que Visual Studio Code est configuré, vous ouvrez l'espace de travail `graphiques` . vous verrez une popup vous demandant si vous souhaitez réouvrir l'espace de travail dans un conteneur de développement :

![popup de conteneur de développement de Visual Studio Code](https://raw.githubusercontent.com/k8s-at-home/charts/master/docs/images/vscode_devcontainer_popup.png)

Sélectionnez cette option et un espace de travail Dockerized sera construit. Vous pouvez maintenant utiliser Visual Studio Code comme d'habitude.

Pour exécuter ou déboguer les tests unitaires, cliquez sur le bouton "Démarrer" dans la barre latérale gauche et sélectionnez la configuration souhaitée :

![Les configurations de Visual Studio Code sont exécutées](https://raw.githubusercontent.com/k8s-at-home/charts/master/docs/images/vscode_run_unittests.png)

- _UnitTest - fichier de spécification actif seulement_: Cette configuration va essayer d'exécuter le fichier de test actuellement ouvert.

  **Remarque :** Assurez-vous que vous avez ouvert un fichier d'essai valide (`. b` fichiers dans le dossier `test/charts` ), ou cela ne fonctionnera pas.

- _UnitTest - tous les fichiers spec_: Cette configuration exécutera tous les fichiers de test dans le dossier `test/cartes`.

Ensuite, appuyez sur l'icône verte "Play". Les tests seront lancés dans une fenêtre de terminal.

## Sortie

Un test réussi affichera quelque chose comme ceci...

```text
Démarré avec les options d'exécution --seed 52955

common-test::statefulset volumeClaimTemplates
  peut définir des valeurs pour le volumeClaimTemplates PASS (0. 6s)
  volumeClaimTemplates doit être vide par défaut PASS (0. 6s)

Les paramètres common-test::ports
  targetPort peuvent être remplacés par PASS (0. 7s)
  le nom du port peut être remplacé par PASS (0. 7s)
  par défaut pour nommer "http" sur le port 8080 PASS (0. 6s)
  targetPort ne peut pas être un port PASS (0. 5s)

common-test::pod replicas
  par défaut à 1 PASS (0. 8s)
  accepte l'entier comme valeur PASS (0. 8s)

common-test::Paramètres d'environnement
  Vérifier pas de variables d'environnement PASS (0. 5s)
  définir "valueFrom" variables d'environnement PASS (0. 1s)
  définir les variables d'environnement "statique" et "Dynamic/Tpl" PASS (0. 5s)
  set "Dynamic/Tpl" variables d'environnement PASS (0. 1s)
  définit les variables d'environnement "statique" PASS (0. 0s)

common-test::ingress
  ingress with hosts PASS (0. 0s)
  doit être désactivé en cas d'ingress. nabled: faux PASS (0. 6s)
  ingress avec le modèle d'hôtes est évalué PASS (0. 1s)
  entrée avec hôtes et tls PASS (0. 5s)
  ingress avec des modèles d'hôtes et tls est évalué PASS (0. 6s)
  doivent être activés lors des ingress. nabled: vrai PASS (0. 6s)

common-test::controller type
  accept "daemonset" PASS (0. 6s)
  accepte le PASS "statefulset" (0. 6s)
  par défaut à "Deployment" PASS (0. 6s)

Terminé en 2.26077s
22 tests, 59 assertions, 0 échecs, 0 erreurs, 0 saut
```
