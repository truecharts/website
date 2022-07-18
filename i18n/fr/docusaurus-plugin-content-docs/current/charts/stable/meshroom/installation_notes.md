# Notes

Meshroom dans docker n'a pas d'interface web. Vous avez besoin d'un client ssh capable de X forwarding. Vous SSH dans l'application, avec `ssh -p 10243 -X root@<Your.Host.I.P.> /opt/Meshroom_bundle/Meshroom` Le mot de passe par défaut est `maille`
