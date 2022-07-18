# Feuille de triche de commande

Ce sont quelques commandes qui sont agréables pour garder une trace de:

**donner les permissions d'exécution à tous les fichiers sh :** `trouver . -name '*.sh' | xargs git update-index --chmod=+x`

**liste tous les dépôts utilisés dans le catalogue :** `trouver . -name 'valeurs'. aml' | xargs cat | grep "repository" | grep -v "{" | awk -F":" '{ print $2 }' | grep -v '^$' | tri --unique`
