# Hoja de Comandos

Estos son algunos comandos que son agradables de seguir:

**dar permisos de ejecución a todos los archivos sh:** `find . -name '*.sh' | xargs git update-index --chmod=+x`

**listar todos los repositorios usados en el catálogo:** `find . -nombre 'valores. aml' | xargs cat | grep "repository" | grep -v "{" | awk -F":" '{ print $2 }' | grep -v '^$' | sort --unique`
