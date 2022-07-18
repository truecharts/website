# 01 - TrueCharts zu SCALE hinzufügen

Das Hinzufügen des TrueCharts Community App-Katalogs ist relativ unkompliziert.

## Anforderungen

- Stellen Sie sicher, dass Ihr Speicherpool erstellt wurde und funktioniert
- Stellen Sie sicher, dass Sie eine funktionierende Internetverbindung haben und github und truecharts.org vom Host-System aus erreichen können.

## Adding TrueCharts

Beim ersten Öffnen des App-Menüpunktes auf TrueNAS SCALE werden Sie aufgefordert, einen neuen Pool für Apps einzurichten. Dies erzeugt einen neuen Datensatz auf dem ausgewählten Pool namens "ix-applications", der alle Docker-Container und die meisten Anwendungsdaten enthält, sofern nicht anders angegeben.

- Gehe zu "Apps" im linken Menü
- Wählen Sie die Registerkarte "Kataloge verwalten"
- Klicken Sie auf "Katalog hinzufügen" und geben Sie die erforderlichen Informationen ein:

- Name: `truecharts`
- Repository: `https://github.com/truecharts/catalog`
- Bevorzugte Züge: `stabil`
- Zweig: `Haupt`

Wir empfehlen auch Personen, die mit TrueCharts und dem Rest dieser Anleitung beginnen, sehr dringend, sicherzustellen, dass `Core` und `stable` zu den bevorzugten Zügen hinzugefügt werden. Ohne diese beiden Züge können Sie nicht alle Schritte befolgen, die wir in den "Quick Start Guides" beschrieben haben. Sie können auch andere Züge aktivieren, siehe unten für eine Beschreibung des Inhalts der einzelnen Züge.

## Unterschied zwischen Stall und Inkubator

TrueCharts hat mehrere "Zugs": Alle Züge enthalten Apps, die gut funktionieren. Sie haben jedoch eine etwas andere Bedeutung:

- `stable` enthält die meisten unserer Apps. Diese werden als stabil angesehen und funktionieren.
- `Abhängigkeiten` enthalten Apps, die hauptsächlich als Abhängigkeiten verwendet werden. Dieser Zug wird außer Fehlerbehebungen nicht unterstützt.
- `Inkubator` Diese Apps befinden sich noch in der Entwicklung und/oder werden nicht als hochwertig angesehen.

## Video-Leitfaden

![typ:video](https://www.youtube.com/embed/Vomm8uvdCM0)

## Notizen

- Wenn dies nicht sofort funktioniert, versuchen Sie, auf "Katalog aktualisieren" zu klicken.
