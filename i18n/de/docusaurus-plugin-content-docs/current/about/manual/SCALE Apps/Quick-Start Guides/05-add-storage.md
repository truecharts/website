# 05 - Zusätzlichen Speicher hinzufügen

Wir bieten die Möglichkeit, beliebig viele Hostordner einzuhängen.

hostPathMounts sind eigentlich ganz einfach: Es mountet ein Verzeichnis von Ihrem TrueNAS SCALE System direkt in ein Verzeichnis innerhalb der App, die Sie installieren.

## Berechtigungen

Wir bieten eine optionale automatische Einstellung der Berechtigungen gemäß App fsGroup oder PUID.

Setting permissions automatically means we `chown` the folder and all folder within it, to a group of your choice. Wir tun dies jedoch nur, wenn wir eine App installieren oder aktualisieren.

Bitte beachten Sie, dass das automatische Setzen von Eigentum/Berechtigungen bedeutet, dass es Ihre aktuellen CHOWN und CHMOD Einstellungen überschreibt. Dies könnte Dinge kaputt machen und ja, es wird Ihr System zerstören, wenn es sorglos verwendet wird. Es ist auch nicht klug, die automatischen Berechtigungen für gemountete Freigaben von einem externen System zu aktivieren.

## Video-Leitfaden

![typ:video](https://www.youtube.com/embed/aktv1r-KRI0)

### Zusätzliche Dokumentation
