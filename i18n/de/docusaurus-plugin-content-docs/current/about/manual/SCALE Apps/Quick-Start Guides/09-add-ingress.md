# 09 - Apps mit Ingress und Traefik exponieren

Um Traefik als ingress nutzen zu können, müssen Sie nur in der App Ihrer Wahl "ingress" aktivieren und ein kleines Formular ausfüllen. Wir benötigen zur Zeit die Installation von Traefik, bevor Sie die ingress in Ihrer App aktivieren.

## Anforderungen

- Stellen Sie sicher, dass Ihr Speicherpool erstellt wurde und funktioniert
- Stellen Sie sicher, dass Sie Ihren Speicherpool beim ersten Öffnen der "Apps" Schnittstelle ausgewählt haben wenn nicht, lesen Sie bitte den Schnellstart-Leitfaden `01 - Erstmaliges Einrichten von Apps`
- Stellen Sie sicher, dass Sie eine funktionierende Internetverbindung haben und github und truecharts.org vom Host-System aus erreichen können.
- Stellen Sie sicher, dass Sie den TrueCharts-Katalog von Guide 02 bereits hinzugefügt haben
- Stellen Sie sicher, dass Ihre App installiert ist und, vorzugsweise, funktioniert
- Stellen Sie sicher, dass Sie Ihre Zertifikate in der Anleitung 07 hinzugefügt haben
- Stellen Sie sicher, dass Sie Traefik im Leitfaden 08 eingerichtet haben

## Video-Leitfaden

![typ:video](https://www.youtube.com/embed/0Rmav5gyAwI)

## Notizen

Es gibt ein paar Highlights zu berücksichtigen, wenn man eine ingress zu einer App hinzufügt:

- Hinzufügen von Hosts ist erforderlich Standardmäßig ist die Host-Liste leer, Dies liegt an Upstream-Design-Entscheidungen und ist ein Problem, das noch zu lösen ist. Allerdings ist das Hinzufügen von Hosts (vorzugsweise nur einer) erforderlich, damit KEINE App mit aktivierter ingress funktioniert. Apps installieren und werfen keine Fehler, wenn Sie keine Hosts hinzufügen.

- Traefik akzeptiert keine Zertifikate Manchmal wird Traefik Ihr Zertifikat ignorieren. Dies liegt am wahrscheinlichsten daran, dass sich die Domain auf Ihrem Zertifikat von der Domain unterscheidet, die Sie im Reverse-Proxy-Host-Feld eingegeben haben. Traefik erfordert, dass Ihr Zertifikat mit der Domain übereinstimmt, die für Ingress verwendet wird. Dies ist eine vorgelagerte Designentscheidung und etwas, das wir einfach und sicher deaktivieren können.
