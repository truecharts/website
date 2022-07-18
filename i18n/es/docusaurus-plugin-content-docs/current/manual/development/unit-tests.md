# Pruebas de unidad

Unidad prueba nuestra biblioteca común, mientras que no está cerca de una cobertura completa pero ofrece algunas comprobaciones básicas.

## Ejecutar las pruebas

Ejecutar estas pruebas se puede hacer de la manera que quieras. En este documento nos limitamos a usar Visual Studio Code, usando nuestro Contenedor de Desarrollo.

### Usando Visual Studio Code

Nuestro repositorio viene con un contenedor de desarrollo [Visual Studio Code](https://code.visualstudio.com/docs/remote/containers) definición y `lanzamiento. hijo` que le permite configurar rápidamente un entorno en el que puede ejecutar las pruebas.

#### Prerrequisitos

- Visual Studio Code está instalado.
- Docker está instalado y ejecutándose.
- La extensión "Remote - Contenedores" está instalada y habilitada en Visual Studio Code.

Para obtener más información, consulte la [documentación oficial](https://code.visualstudio.com/docs/remote/containers#_system-requirements).

#### Pruebas en ejecución

Una vez que Visual Studio Code está configurado, abre el espacio de trabajo `grafica` . verá una ventana emergente preguntando si desea volver a abrir el área de trabajo en un contenedor de desarrollo:

![Ventana de desarrollo de Visual Studio Code](https://raw.githubusercontent.com/k8s-at-home/charts/master/docs/images/vscode_devcontainer_popup.png)

Seleccione para hacerlo y se construirá un espacio de trabajo Dockerizado. Ahora puede utilizar Visual Studio Code de forma normal.

Para ejecutar o depurar las pruebas unitarias, haga clic en el botón "Ejecutar" en la barra lateral izquierda y seleccione la configuración deseada:

![Visual Studio Code ejecuta configuraciones](https://raw.githubusercontent.com/k8s-at-home/charts/master/docs/images/vscode_run_unittests.png)

- _UnitTest - archivo de especificación activo sólo_: Esta configuración intentará ejecutar el archivo de prueba actualmente abierto.

  **Nota:** Asegúrese de que ha abierto un archivo de prueba válido (`. b` archivos en la carpeta `test/charts` ), o esto no funcionará.

- _UnitTest - todos los archivos de especificaciones_: Esta configuración ejecutará todos los archivos de prueba en la carpeta `test/charts`.

A continuación, pulse el icono verde "Jugar". Esto iniciará las pruebas mostrando el resultado en una ventana de terminal.

## Salida

Una prueba exitosa producirá algo como lo siguiente...

```text
Started with run options --seed 52955

common-test::statefulset volumeClaimTemplates
  can set values for volumeClaimTemplates                         PASS (0.16s)
  volumeClaimTemplates should be empty by default                 PASS (0.06s)

common-test::ports settings
  targetPort can be overridden                                    PASS (0.17s)
  port name can be overridden                                     PASS (0.17s)
  defaults to name "http" on port 8080                            PASS (0.16s)
  targetPort cannot be a named port                               PASS (0.05s)

common-test::pod replicas
  defaults to 1                                                   PASS (0.08s)
  accepts integer as value                                        PASS (0.08s)

common-test::Environment settings
  Check no environment variables                                  PASS (0.05s)
  set "valueFrom" environment variables                           PASS (0.11s)
  set "static" and "Dynamic/Tpl" environment variables            PASS (0.15s)
  set "Dynamic/Tpl" environment variables                         PASS (0.11s)
  set "static" environment variables                              PASS (0.10s)

common-test::ingress
  ingress with hosts                                              PASS (0.10s)
  should be disabled when ingress.enabled: false                  PASS (0.06s)
  ingress with hosts template is evaluated                        PASS (0.11s)
  ingress with hosts and tls                                      PASS (0.15s)
  ingress with hosts and tls templates is evaluated               PASS (0.16s)
  should be enabled when ingress.enabled: true                    PASS (0.06s)

common-test::controller type
  accepts "daemonset"                                             PASS (0.06s)
  accepts "statefulset"                                           PASS (0.06s)
  defaults to "Deployment"                                        PASS (0.06s)

Finished in 2.26077s
22 tests, 59 assertions, 0 failures, 0 errors, 0 skips
```
