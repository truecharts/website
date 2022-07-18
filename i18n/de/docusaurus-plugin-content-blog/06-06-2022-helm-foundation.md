---
slug: "Helm als Fundament"
title: "Helm als Fundament"
authors:
  - ornias
---

Nach eingehender Überlegung, wie wir das Projekt voranbringen wollen, haben wir uns entschlossen, unsere Helm Charts als ersten und anderen Lösungen an die erste Stelle zu setzen. Unsere Argumentation, dies zu tun ist, dass wir den Benutzern erlauben wollen, flexibler zu sein, auf welcher kubernetes Plattform sie alle tollen Projekte nutzen, die da draußen sind.

**SCALE und TrueCharts**

Was bedeutet das für unsere SCALE-Benutzer? Nicht so sehr wirklich: Wir werden SCALE Apps weiterhin vollständig unterstützen und bauen. Allerdings, es bedeutet, dass wir unsere Arbeit offener als "Charts" anstelle von "Apps" nennen und einige neue Charts SCALE nicht außerhalb der Box unterstützen werden.

**Helm und TrueCharts**

Wir werden auch unser Spiel erheblich verbessern, um Benutzer zu unterstützen, die das YAML direkt mit Helm anpassen wollen. Mehr Apps mit flexiblerer Konfiguration. Gleichzeitig werden wir daran arbeiten, die SCALE GUI Generation automatischer zu machen. Während dies zu einer "überfüllten" GUI führen kann, wird es mehr in "Synchronisieren" mit den einheimischen Helm-Einsätzen bringen, die wir anbieten.

Für neue Entwickler bietet das alles eine viel einfachere Erfahrung: Bauen Sie einfach das Steuerdiagramm und reichen Sie dafür die PR-Adresse ein. Keine Mühen mehr, sich durch hunderte Zeilen der SCALE GUI Beschreibung zu bewegen.

Mit all diesen Änderungen kombinieren wir unser großartiges Repository von Charts für mehr Leute, viel schneller!
