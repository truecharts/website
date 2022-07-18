# Validación de entrada

## Usuario Admin

Los nombres de usuario de un administrador de spotweb tienen algunas restricciones.

* Las siguientes palabras no están permitidas:
  * dios
  * mod
  * punta
  * administrador
  * drazix
  * superusuario
  * supervisor
  * raíz
  * anónimo
* No se permiten los siguientes caracteres:
  * <
  * \>
* Regex utilizado para validar el nombre de usuario (puedes intentar en vivo [aquí](https://regex101.com/r/LA4Io7/1)): `^((?!god|mod|spot|admin|drazix|superusuario|supervisor|root|anónimo)[^<>])*$`

## Primer nombre y apellido del administrador

El nombre y apellido en spotweb tienen algunas restricciones.

* No se permiten los siguientes caracteres:
  * <
  * \>
* Se aplica una longitud mínima de 2 caracteres
* Regex utilizada para validar el nombre y apellido (puedes probar en vivo [aquí](https://regex101.com/r/x2KGnU/1)): `^([^<>]{2})([^<>]*)$`

## Email Admin

Las direcciones de correo electrónico se validan en spotweb usando el `_FILTER_VALIDATE_EMAIL` incorporado.

* Regex utilizado para validar el correo electrónico (puedes probar en vivo [aquí](https://regex101.com/r/yEmCoL/1)): ``^[a-zA-Z0-9. #$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$``

---
Si encuentras un campo que crees que necesita validación, por favor abre un problema en github
