# Notes d'installation

L'application Valheim ne supporte pas d'avoir des numéros de port différents pour le port `` et le `targetPort`. Le paramètre `port` définira le même numéro de port à `targetPort` et sa variable environnementale. ex: `STATUS_HTTP_PORT`, `SUPERVISOR_HTTP_PORT`, `SERVER_PORT`

Aussi, les services nommés `valheim1`, `valheim2`, `valheim3`, doivent être des numéros de port continus. eg 2456, 2457, 2458. Vous ne pouvez pas sauter un nombre!
