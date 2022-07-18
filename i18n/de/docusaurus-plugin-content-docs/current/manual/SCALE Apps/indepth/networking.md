# Netzwerk

TrueCharts enthalten eine Reihe von Netzwerk-Optionen, einige super-einfach, andere quite-fortgeschritten. In diesem Dokument werden wir versuchen, einen allgemeinen Überblick über die allgemeinen Konfigurationsoptionen und deren Nachteile zu geben.

## Allgemeine Optionen

### Host-Netzwerk

Diese Option gilt als erweiterte Option und wird selten benötigt. Es verbindet den Netzwerk-Stack des Hosts mit der App.

Der Grund, warum dies in den meisten Apps nicht benötigt wird, liegt daran, dass wir bereits großartige Optionen haben, um mit den meisten Formen des Netzwerkverkehrs umzugehen und jeder Betreuer hat das Ziel, sicherzustellen, dass Sie diese Einstellung nicht benötigen.

Bitte lesen Sie die Dokumentation einzelner Apps oder den Support-Abschnitt zu github, wenn Sie denken, dass Sie diese Einstellung in Ihrem speziellen Anwendungsfall benötigen könnten

### ClusterIP

Der "Basic"-Netzwerk-Modus erzeugt einen speziellen Lastausgleicher, der als "Dienst" bezeichnet wird, der nur im internen Netzwerk zwischen den Apps verfügbar ist.

Sie können sich aber nicht damit verbinden, da unser [Reverse Proxy](https://wiki.truecharts.org/general/reverse-proxy/) die meisten Traffic für Sie weiterleiten kann!

### Knotenport

Der Name macht bereits deutlich, was diese tun: Er verbindet sich mit einem Port auf Ihrem Knoten (der PC Hosting Ihrer App).

Es ist eine spezielle ClusterIP, die den gesamten Verkehr von einem bestimmten Port auf Ihrem Host-System aka "Knoten" direkt an den Dienst weiterleitet. Es ist aber auch noch eine ClusterIP, so ist es sehr gut möglich, sowohl den Reverse-Proxy als auch den NodePort zu verwenden, einfach nicht am selben Port.

Es gibt jedoch mehrere Nachteile für die Verwendung von Knotenpunkten:

- Sie können nur Ports über 9000 auswählen
- Sie können zwei Apps nicht mit dem gleichen Port verbinden

### LoadBalancer

Loadbalancer verbindet einen Service TargetPort direkt mit dem Host Network. Auf jeden Fall kann es dies in geringeren Bereichen tun als NodePort, was es zu einer großartigen Lösung für Dinge wie DNS-Server macht.

Es gibt jedoch Nachteile bei der Verwendung von LoadBalancer:

- Sie können zwei Apps nicht mit dem gleichen Port verbinden
