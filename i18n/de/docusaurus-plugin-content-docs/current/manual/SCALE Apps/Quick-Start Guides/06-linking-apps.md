# 06 - Interne Verlinkung von Apps

Oft müssen wir einzelne Apps miteinander verbinden, zum Beispiel: Sonarr und SABnzbd. Das bedeutet, dass wir zuerst wissen müssen, wie wir diese Apps erreichen.

## Apps intern verknüpfen

Das Backend für TrueNAS SCALE Apps ist Kubernetes. Die Verknüpfung von Apps in Kubernetes erfolgt etwas anders als in anderen Systemen, da man nicht direkt auf andere Container zeigen kann, die seine IP-Adresse verwenden.

Stattdessen müssen wir ihren internen (!) Domain-Namen verwenden. Achtung: Dieser Name ist nur zwischen Apps verfügbar und kann nicht vom Host/Knoten oder Ihrem eigenen PC aus erreicht werden.

Das Format für den internen Domain-Namen für den Hauptdienst wird weiter unten erklärt. Bitte ersetzen Sie `$NAME` mit dem Namen, den Sie Ihrer App bei der Installation gegeben haben, und `$APP` mit dem Namen, den die App im Katalog hat, wo sie benötigt wird.

**Wenn Ihr App-Name ** den Namen der App wie im Katalog enthält, ist das Format folgendermaßen:**

- `$NAME.ix-$NAME.svc.cluster.local`

**Wenn Ihr App-Name *NICHT den Namen der App* wie im Katalog enthält, ist das Format folgendermaßen:**

- `$NAME-$APP.ix-$NAME.svc.cluster.local`

Wenn Sie einen anderen Service erreichen müssen (was nicht oft der Fall ist! , benötigen Sie ein etwas anderes Format, wobei `$SVCNAME` der Name des Dienstes ist, den Sie erreichen möchten:

**Wenn Ihr App-Name ** den Namen der App wie im Katalog enthält, ist das Format folgendermaßen:**

- `$NAME-$SVCNAME.ix-$NAME.svc.cluster.local`

**Wenn Ihr App-Name *NICHT den Namen der App* wie im Katalog enthält, ist das Format folgendermaßen:**

- `$NAME-$APPNAME-$SVCNAME.ix-$NAME.svc.cluster.local`

## Interner Domänenname Generator

### Beispiel

Um eine App mit dem Namen "my-sabnzbd-app" oder "sabnzbd" (Name enthält den Namen der Katalog-App) in Sonarr zu erreichen, können wir folgende interne Domain-Namen verwenden:

- `sabnzbd.ix-sabnzbd.svc.cluster.local` oder
- `sabnzbd.ix-sabnzbd`

Um eine App mit dem Namen "sab" (Name enthält NICHT den Namen der Katalog-App) innerhalb von Sonarr zu erreichen, können wir folgenden internen Domain-Namen verwenden:

- `sab-sabnzbd.ix-sab.svc.cluster.local` oder
- `sab-sabnzbd.ix-sab`

![linking-beispiel-sonarrsabnzbd](/img/linking/linking-example-sonarrsabnzbd.png)

### Video-Leitfaden

![typ:video](https://www.youtube.com/embed/mWJL-XDgH98)

### Zusätzliche Dokumentation

Für weitere Hilfe zur Fehlerbehebung der DNS-Auflösung in Kubernetes lesen Sie die offizielle Dokumentation: https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/
