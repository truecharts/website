# Notes d'installation

- Si vous activez `Ingress` pour cette application, vous devez définir `SECURE_CONNECTION` à `false` et `Type de port` à `HTTP`, sinon vous pourriez rencontrer des erreurs pour `Trop de redirections`.
- Vous ne pouvez pas activer `Ingress` pour `VNC` si vous voulez utiliser `VNC`, vous devez définir ce service à `Simple` à la place
- `VNC` avec `SECURE_CONNECTION` set `vrai`, ne fonctionne qu'avec très peu de clients. L'un d'eux est `SSVNC`.
- `SECURE_CONNECTION` affecte à la fois `WebUI` et `VNC`.

---

- Si vous passez à travers des périphériques tels que `Lecteurs Optiques`, vous devez cliquer sur `Paramètres de sécurité du conteneur` et définir `PUID` à `0`.
