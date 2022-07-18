# 13 - Docker-Compose auf SCALE

Während Docker-Compose nicht offiziell von iX Systems unterstützt wird, haben wir eine spezielle "Docker-Compose"-App entworfen, die im "Kern" Zug erhältlich ist. Diese App kann verwendet werden, um einfach eine Kompositionsdatei in einer komplett isolierten Docker-Composite-Umgebung bereitzustellen.

Unsere Docker-Compose App hat folgende Funktionen:

- Bindung von Ports an den Host, direkt von Docker-Compose

- Interne Docker-Compose-Netzwerke

- `/mnt`, `/root` und `/cluster` sind standardmäßig im Docker-Compose Container erreichbar

- Die Docker-Bilder und Docker-Volumen, werden in einem speziellen PVC innerhalb des Apps-Systems von TrueNAS SCALE gespeichert

- Dateien können automatisch beim Start unserer Docker-Compose App geladen werden

- Überlebende Updates von TrueNAS SCALE

- Wird das Host-OS nicht ändern

- Kann mit der SCALE App kombiniert werden, um es Benutzern zu ermöglichen, langsam vom Docker-Composer auf native SCALE Apps zu migrieren

Ein paar Dinge, die man beachten muss:

- Um Befehle für Docker oder Docker zu erstellen, müssen Sie sich in der Docker-Compose App Shell (nicht die Host-Shell) befinden

- Bitte stellen Sie sicher, dass Ihre Docker-Compose Netzwerke nicht mit den Kubernetes Netzwerken in den Einstellungen des SCALE Apps-Systems kollidieren.

- Bitte beachten Sie, dass Docker-Compose Container nicht innerhalb des kubernetes Netzwerks erreichbar sind. So können Sie beispielsweise keinen "Launch Docker" Container mit einer Docker-Compose gehosteten Datenbank kombinieren.

Einfach ausgedrückt: Unsere Docker-komponierte Lösung funktioniert fast wie auf dem Host, aber ohne die TrueNAS SCALE Appliance OS zu beeinträchtigen.

## Video-Leitfaden

![typ:video](https://www.youtube.com/embed/QXooywQSfJY)
