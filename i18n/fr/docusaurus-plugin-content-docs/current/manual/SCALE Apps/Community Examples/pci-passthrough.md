# Périphériques PCI (-E) Passthrough

Pour passer vos cartes PCI (-E), vous devez :

- Aller aux applications installées
- Cliquez sur le bouton de menu sur le côté droit de la carte App
- Sélectionner l'édition
- Faites défiler la section "Ressources et périphériques" vers le bas
- Sous Configurer les périphériques USB Monter cliquez sur le bouton Ajouter à droite (cela fonctionnera également pour les périphériques PCI*)
- Dans "Chemin du périphérique hôte" & "Chemin du périphérique de conteneur" entrez le chemin /dev/path de votre carte (ex: pour les périphériques dvb, ce sera : /dev/dvb)
- Soumettre vos modifications

> *Cette méthode n'est pas garantie de fonctionner, et nous n'offrons officiellement aucune prise en charge des périphériques PCI (-E) Passthrough pour le moment.
