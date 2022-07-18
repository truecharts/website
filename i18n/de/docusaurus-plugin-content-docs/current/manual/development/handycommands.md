# Befehls-Cheatsheet

Dies sind einige Befehle, die schön sind, um den Überblick zu behalten.

**listet alle verwendeten Repositories im Katalog auf:** `find . -Name 'Werte. aml' | xargs cat | grep "repository" | grep -v "{" | awk -F":" '{ print $2 }' | grep -v '^$' | sort --unique`

**listet alle verwendeten Repositories im Katalog auf:** `find . -Name 'Werte. aml' | xargs cat | grep "repository" | grep -v "{" | awk -F":" '{ print $2 }' | grep -v '^$' | sort --unique`
