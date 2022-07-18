# Richtlinien für Beiträge

Dieses Projekt begrüßt alle Beiträge, aber wir brauchen ein paar Qualitätsrichtlinien. Diese Leitlinien werden hier in diesem Dokument untersucht werden.

## GIT Guidelines

---

### Neu bei GIT

Wenn du Git noch nie benutzt hast, kannst du unsere allgemeine Referenz in unserem Wiki nachschlagen.

### Git und Sie

GIT ist ein fantastisches System, aber während wir es verwenden, haben wir ein paar Richtlinien, um es für alle fantastisch zu halten.

- Vollständige PRs abschicken.
- Fügen Sie [DNM] hinzu, wenn Sie Ihre PR noch nicht zusammengeführt haben möchten.
- Versuchen Sie immer, das gesamte Formular auszufüllen, auch für kleine PRs.
- Schließen Sie nicht, wenn ein Überprüfer Änderungen anfordert (schieben Sie einfach die Änderungen oder bitten Sie um Hilfe).
- Erklären Sie, was Sie in Ihrem PR gemacht haben.
- Seien Sie gründlich.
- Wenn Sie Screenshots zur Klarstellung hinzufügen können.
- Versuchen Sie immer, "Fixes #000" hinzuzufügen (wobei 000 das Problem Ihre PR-Korrekturen sind)
- hat etwas gefunden, das du selbst reparieren möchtest? Bitte machen Sie auch ein Problem.

## Strukturrichtlinien

---

### Inklusion von Dateien und Ordnern

Obwohl GIT in Bezug auf Dateien und Ordneränderungen in einem Commit recht freundlich ist, Die Zeit eines Überprüfers oder Bugfixers ist nicht unbegrenzt. Aus diesem Grund haben wir einige spezielle Richtlinien für die Aufnahme von Dateien und Ordnern in Ihren PR .

- Fügen Sie nur Dateien hinzu, die Sie tatsächlich geändert haben.
- Versuche nicht mehrere Änderungen in einem PR einzufügen
- Möchten Sie auch die Formatierung von mehreren Dateien ändern? Einen separaten PR erstellen.

## Code-Richtlinien

---

### Ihr Code, Ihr Stil, meine Bewertung

Hier bei TrueCharts schätzen wir Menschen, die ihren eigenen Stil haben. Aber Ihr Code muss auch von anderen überprüft und editierbar sein. Aus diesem Grund haben wir einige grundlegende Kodierungsrichtlinien

- **Immer** erkläre Regex in einem Kommentar innerhalb deines Codes.
- Schreibe einfachen Code und versuche nicht zu beeindrucken.
- Wir werden (Basic) das automatisierte Formatieren des Codes in einer Weile durchführen.
- Dokumentieren Sie Ihre Änderungen in Ihrem Code und wenn nötig, im Wiki.
- Alle PRs sollten unsere automatisierten Tests bestehen können.

#### App-Anforderungen

- Apps sollten immer benutzerspezifische Daten an einem persistenten Ort speichern. Dies kann sowohl über IXVolume als auch über Hostpath verbunden werden
- Apps sollten nicht verlangen, dass der Benutzer eine Konfigurationsdatei selbst bearbeitet. Alle Konfigurationsänderungen sollten entweder automatisiert sein oder die Benutzeroberfläche verwenden
- Apps sollten keine Standard-Passwörter verwenden, der Benutzer sollte immer gezwungen sein (!) Anmeldeinformationen manuell einzufügen

## Richtlinien zur Überprüfung

---

Selbst wir Rezensionen Götter brauchen einige Leitlinien in einer Weile.

- Menschen sollen aus ihren Fehlern lernen
- Überprüfen statt ohne Kommentare zusammenführen
- Befolgen Sie diese Richtlinien in Ihrer Bewertung
- Tests gibt es aus einem Grund. Nicht mit Testfehlern zusammenführen

## Todo vs Feature vs Fehler

---

Bitte beachten Sie den Unterschied zwischen einem TODO und einer Funktion

- Fehler: Ein unerwartetes Verhalten des Skripts oder ein Absturz. Enthält, aber nicht beschränkt auf Fehler und Warnungen.
- Todo: Wenn Sie auf etwas stoßen, das während der Entwicklung optimiert/hinzugefügt werden muss, ist kein unerwartetes Verhalten
- Feature: Wenn Sie aus persönlichen Vorlieben etwas hinzufügen oder ändern wollen.

### Das war's!

---

Jemand wird kommen und die Änderungen überprüfen. Wenn alles gut aussieht, werden sie es mit der Hauptreppe verschmelzen. Wenn du Hilfe benötigst, scheue dich nicht, im Discord Kanal zu fragen: [https://discord.gg/tFcTpBp](https://discord.gg/tFcTpBp)
