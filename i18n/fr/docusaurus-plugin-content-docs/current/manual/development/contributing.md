# Directives de contribution

Ce projet se félicite de toutes les contributions, mais nous avons besoin de quelques directives de qualité. Ces lignes directrices seront illustrées dans ce document.

## GIT Guidelines

---

### Nouveau sur GIT

Si vous n'avez jamais utilisé git auparavant, vous pouvez consulter notre référence générale sur notre wiki.

### Git et vous

GIT est un système fantastique, mais tout en l'utilisant, nous avons quelques directives pour le garder fantastique pour tout le monde.

- Soumettre les PR terminées.
- Ajoutez [DNM] si vous ne voulez pas encore que votre PR soit fusionné.
- Essayez toujours de remplir l'ensemble du formulaire, même pour les petites PR.
- Ne fermez pas quand un réviseur demande des modifications (il suffit de pousser les modifications ou de demander de l'aide).
- Expliquez ce que vous avez fait dans votre PR.
- Soyez minutieux.
- Si vous pouvez ajouter des captures d'écran pour clarifier.
- Toujours essayer d'ajouter "Corrige #000" (où le problème est le problème que votre RP corrige)
- vous avez trouvé quelque chose que vous voulez réparer vous-même ? Je vous en prie, faites également une question.

## Directives de la structure

---

### Inclusion des fichiers et des dossiers

Bien que GIT soit assez convivial dans ce qu'il accepte en termes de fichiers et de changements de dossier dans une livraison, le temps d'un correcteur ou d'un correcteur de bogues n'est pas illimité. Pour cette raison, nous avons quelques lignes directrices spécifiques en ce qui concerne l'inclusion de fichiers et de dossiers dans votre PR.

- N'inclure que les fichiers que vous avez réellement changés.
- Essayez de ne pas inclure plusieurs changements dans un RP
- Vous voulez également modifier le formatage de plusieurs fichiers ? Faire une PR séparée.

## Lignes directrices du code

---

### Votre code, votre style, mon avis

Chez TrueCharts, nous apprécions les gens qui ont leur propre style. Mais ton code doit aussi être modifiable par les autres. Pour cette raison, nous avons quelques directives de codage de base

- **Toujours** expliquer l'expression régulière dans un commentaire dans votre code.
- Écrivez du code simple et n'essayez pas d'impressionner.
- Nous allons exécuter (Basic) une réforme automatique du code de temps en temps.
- Documentez vos modifications dans votre code et, le cas échéant, sur le wiki.
- Tous les PR devraient être en mesure de passer nos tests automatisés.

#### Exigences des applications

- Les applications doivent toujours enregistrer des données spécifiques à l'utilisateur dans un emplacement persistant. Cela peut être connecté à la fois par IXVolume ou Hostpath
- Les applications ne doivent pas nécessiter que l'utilisateur modifie un fichier de configuration lui-même. Toutes les modifications de configuration doivent être automatisées ou utiliser l'interface utilisateur
- Les applications ne doivent pas utiliser les mots de passe par défaut, l'utilisateur doit toujours être forcé(!) à mettre les identifiants manuellement

## Revoir les lignes directrices

---

Même nous révisons les dieux ont besoin de quelques directives de temps en temps.

- Laissez les gens apprendre de leurs erreurs
- Revoir au lieu de fusionner sans commentaires
- Abide par ces directives dans votre revue
- Les tests existent pour une raison. Ne pas fusionner avec les échecs du test

## Todo vs Feature vs bug

---

Veuillez prendre note de la différence entre un TODO et une fonctionnalité

- Bug : Un comportement inattendu du script ou d'un plantage. Y compris, mais sans s'y limiter, des erreurs et des avertissements.
- Todo : Quand vous rencontrez quelque chose qui a besoin d'être modifié/ajouté pendant le développement, ce n'est pas un comportement inattendu
- Caractéristique: Lorsque vous voulez, par préférence personnelle, quelque chose est ajouté ou changé.

### Voilà!

---

Quelqu'un viendra examiner les changements. Si tout semble bien, alors ils le fusionneront avec le dépôt principal. Si vous avez besoin d'aide, n'ayez pas peur de demander dans le canal discord : [https://discord.gg/tFcTpBp](https://discord.gg/tFcTpBp)
