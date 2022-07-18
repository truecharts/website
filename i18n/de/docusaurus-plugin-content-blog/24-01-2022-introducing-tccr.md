---
slug: "Einführung: TrueCharts Container Repository"
title: "Einführung: TrueCharts Container Repository"
authors:
  - ornias
---

Im letzten Jahr haben wir uns immer schneller entwickelt, indem wir Code und Benutzer alle paar Monate verdoppeln. Einige Probleme konnten schnell und einfach behoben werden, während andere Probleme viel komplexer waren. Eines dieser Probleme war das verworrene Chaos verschiedener Containerquellen.

Diese Containerquellen hatten alle verschiedene Tag-Formate, Bewertungsbeschränkungen, Ausfallzeiten und man entschied sich sogar, Tags zu löschen, was zu einer Unterbrechung der Anwendungen führte. Dies war natürlich nicht die Erfahrung, die wir unseren Nutzern zukommen lassen wollten.

Deshalb haben wir die bessere Zeit im Dezember damit verbracht, ein eigenes Containerverteilungssystem einzurichten. Das TrueCharts Container Repository oder TCCR kurz. TCCR ist eine Kombination von Containern, die wir selbst und Container gebaut haben, die wir in einem standardisierten Format spiegeln, abschirmen und neu markieren. Dies ermöglichte es uns auch, *alle* Container aus mehreren Quellen zur Verfügung zu stellen: GHCR, Quay und DockerHub.

Um dies zu erreichen, haben wir uns mit Schal verbunden. h, was uns erlaubt, einfach zwischen Containerquellen für unser Repository zu wechseln und uns auch etwas Neues zu geben: Metriken. Wir können endlich sehen, welche Container populär sind und welche nicht. aber wir können auch sehen, ob es noch Leute gibt, die ältere Versionen von Anwendungen verwenden. Dies ermöglicht es uns, unseren Entscheidungsprozess zu verbessern: an welchen Apps zu arbeiten ist und an welchen älteren Versionen sie weiterhin unterstützt werden.

Sie alle haben (unter der Haube) bereits TCCR betrieben und wir hatten nur eine Handvoll von Problemen, die damit zusammenhängen. Wir freuen uns, etwas geschaffen zu haben, das uns erneut als die Nummer 1 der TrueNAS SCALE Applikationen hervorhebt.
