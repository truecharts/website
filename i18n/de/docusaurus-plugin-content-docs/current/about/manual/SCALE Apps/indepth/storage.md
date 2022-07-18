# Speicher

TrueCharts verwendet mehrere verschiedene Speichersysteme:

## Speicherarten

Speicher ist derzeit in zwei Arten aufgeteilt:

1. Integrierter Dauerspeicher (PVC)
2. Eigener Speicher alias "hostPathMounts"

## Integrierter Dauerspeicher

Die integrierte Dauerspeicherung basiert auf Kubernetes PVCs, um so eng wie möglich in TrueNAS SCALE zu integrieren. Sie sind auch stark vorkonfiguriert, so optimal wie möglich zu arbeiten und bieten Optionen für zukünftige Erweiterungen wie NFS und Gluster Optionen. Diese Speicheroptionen sind grundsätzlich nicht gut geeignet, um mit mehreren Anwendungen geteilt zu werden.

Dieser Speicher ist in TrueNAS SCALE integriert und unterstützt komplett rückgängige Upgrades. Dies ist der Grund, warum dies die Standard-(und nur tatsächlich unterstützte!) Möglichkeit ist, App-Konfigurationsdateien zu speichern.

## Benutzerdefinierter App-Speicher auch "hostPathMounts"

Neben dem zuvor erwähnten Integrierten Persistent Speichern bieten wir Ihnen auch die Möglichkeit, beliebig viele Hostordner einzuhängen.

hostPathMounts sind eigentlich ganz einfach: Es mountet ein Verzeichnis von Ihrem TrueNAS SCALE System direkt in ein Verzeichnis innerhalb der App, die Sie installieren.

## Berechtigungen

Berechtigungseinstellungen sind ziemlich wichtig und sind oft etwas, das Probleme für Benutzer verursacht. Sowohl für den integrierten Dauerspeicher als auch für den benutzerdefinierten Speicher bieten wir spezielle Optionen, um automatisch Berechtigungen für Ihren Container festzulegen.

### Integrierter Dauerspeicher

Diese werden automatisch auf den Besitz gesetzt: **PGID**

### Benutzerdefinierter App-Speicher auch "hostPathMounts"

Wir bieten eine optionale automatische Einstellung der Berechtigungen gemäß App fsGroup oder PUID.

Setting permissions automatically means we `chown` the folder and all folder within it, to a user and group of your choice. Wir tun dies jedoch nur, wenn wir eine App installieren oder aktualisieren.

Bitte beachten Sie, dass das automatische Setzen von Eigentum/Berechtigungen bedeutet, dass es Ihre aktuellen CHOWN und CHMOD Einstellungen überschreibt. Dies könnte Dinge kaputt machen und ja, es wird Ihr System zerstören, wenn es sorglos verwendet wird. Es ist auch nicht klug, die automatischen Berechtigungen für gemountete Freigaben von einem externen System zu aktivieren. Diese Berechtigung wird basierend auf dem Benutzer und der Gruppe, die Sie im App-Konfigurationsdialog eingeben und standardmäßig `568` (der SCALE Standard-App-Benutzer).
