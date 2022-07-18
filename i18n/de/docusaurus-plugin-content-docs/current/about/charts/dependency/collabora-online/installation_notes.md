# Installationshinweise

Wenn Sie `Reverse Proxy` bei `Collabora` nicht aktivieren (Es wird nicht empfohlen, da es unsicher ist), damit es funktioniert, müssen Sie

* Entferne `-o:ssl.termination=true -o:ssl.enable=false` von `Zusätzlichen Parametern`.
* Setze `Server Name` auf `hostIP:port` (Die Portnummer, die Sie für `NodePort` gesetzt haben)
* Setze `Service Typ` auf `NodePort`
* Setze `Port Typ` auf `HTTPS`
* Deaktivieren Sie die Zertifikatsvalidierung in der App, die Sie verwenden möchten. (zB. Nextcloud haben ein Kontrollkästchen unter Collabora's URL, um die Cert Validierung zu deaktivieren)
