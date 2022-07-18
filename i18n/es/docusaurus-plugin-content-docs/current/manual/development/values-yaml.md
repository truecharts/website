# Archivos Values.yaml

Los archivos Values.yaml generalmente siempre contienen configuración para cartas Helm, TrueCharts no es diferente. Sin embargo, tenemos múltiples archivos de valores diferentes, con objetivos diferentes. Debido a que TrueNAS SCALE funciona de forma ligeramente diferente a las cartas estándar de Helm

## Los Archivos

### valores.yaml

Este archivo contiene la configuración predeterminada al ejecutar la aplicación usando el casco de stock (no SCALE). También se utiliza para la suite de pruebas.

### ix_valores.yaml

Este archivo contiene valores de configuración que no están incluidos en questions.yaml, pero que deberían copiarse en la configuración resultante de todos modos. Se utiliza principalmente para asegurar que la configuración puede ser cambiada por el mantenedor con cada actualización, como versiones, lo que no es posible cuando se establecen las cosas como predeterminados dentro de las preguntas. bul

Este archivo, sin embargo, no está muy bien comprobado por validación y CI. Utilízalo cuando sea absolutamente necesario.

Una configuración importante en ix_values. aml es la configuración opcional: `startAsRoot: true` Este ajuste es un conmutador de compatibilidad para contenedores que necesitan ser iniciados por raíz, a menudo estos contenedores usan PUID y PGID para desescalar (inferior) lejos de la raíz pero requieren que se inicie.

Un ejemplo mínimo de ix_values.yaml sería:

```yaml
##
# Este archivo contiene contenido de Valores.yaml que se añade a la salida de preguntas. aml
# SÓLO está pensado para el contenido que el usuario NO espera que cambie.
# Ejemplo: Todo en "imagen" no está incluido en questions.yaml pero está incluido aquí.
##

imagen:
  repository: jacobalberty/unifi
  tag: 6.0. 5
  pullPolicy: IfNotPresent


##
# La mayoría de los otros valores predeterminados se establecen en preguntas. aml
# Para otras opciones, por favor consulte la wiki, default_values.yaml o el gráfico de librería común
##

```
