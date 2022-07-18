---
slug: "Docker-Compose auf TrueNAS SCALE mit TrueCharts"
title: "Docker-Compose auf TrueNAS SCALE mit TrueCharts"
authors:
  - ornias
---

Seit den Anfängen der TrueNAS SCALE Entwicklung haben wir viele Beschwerden darüber gelesen, dass das Docker-Compose von TrueNAS SCALE nicht unterstützt wurde. Es ist verständlich, da es eine der am häufigsten genutzten Docker-Bereitstellungsoptionen für Heimanwender ist.

Die TrueNAS SCALE Community hat interessante Wege gefunden, Docker-Compose zu ermöglichen. Aber diese Ansätze haben alle eine Reihe von Nachteilen:

- Es ist nicht in Zukunft bewiesen, es kann permanent und ohne Vorwarnung mit einem TrueNAS SCALE Update angeordnet werden.

- Es bricht inhärent SCALE Anwendungen und erfordert oft sogar deren Deaktivierung.

- Für diese Lösung gibt es keine Unterstützung.

Um dieses Problem zu lösen, haben wir uns entschieden, die Dinge in unsere eigenen Hände zu nehmen. Wir freuen uns, endlich unsere Lösung bekanntzugeben:

**Docker-Compose Anwendung für TrueNAS SCALE von TrueCharts**

Es wurde von Grund auf so konzipiert, dass Benutzer fast die gleiche Erfahrung haben wie Docker-Compose auf dem Host-System laufen lassen und enthält sogar einige schöne Tweaks:

- Es wird vollständig von TrueNAS SCALE Applications unterstützt, so dass es Updates überleben wird.

- Es gibt eine GUI-Option, um Ihre Docker-Compose Datei einzugeben, die Neustarts überlebt.

- Komplett selbständig und ändert nicht den Standard-Docker-Stack.

- Voll kompatibel zu anderen TrueNAS SCALE Anwendungen, so dass Sie Ihre Docker-Compose Anwendungen einfach auf TrueNAS SCALE Anwendungen migrieren können.

- Wir sind Ihre Unterstützung, wenn die Bewerbung nicht wie beworben funktioniert.

Alles mit nur einem Vorbehalt:

- Der Befehl Docker-Compose muss aus der Container-Shell heraus ausgeführt werden.

Wir haben unsere Lösung auf dem offiziellen Docker-in-Docker-Container von Docker basiert, mit einigen zusätzlichen Werkzeugen, um sie für den Einsatz mit einem Container zu optimieren. Am interessantesten ist, dass der Container native Zugriff auf `/mnt`hat, `/root` und `/cluster`, damit Sie mit Ihren Containern arbeiten können, wie Sie am Host arbeiten.

Mit diesem Schritt hoffen wir, dass TrueNAS SCALE endlich beginnen kann, die großen Schuhe von Lösungen wie Unraid und TrueNAS Core zu füllen und der Gemeinschaft zu geben, was sie wollen, nicht nur, was sie brauchen!
