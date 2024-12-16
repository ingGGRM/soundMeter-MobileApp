# Aplicación Móvil y Web para el Medidor de Ruido

Esta aplicación basada en React-Native utiliza una base de datos alojada en
FireBase para mostrar algunos valores de acumulación de ruido, temperatura y humedad relativa,
los cuales son medidos a través de un módulo integral de análisis basado en el ESP32.

## Para iniciar...

1. Install dependencies

    ```bash
     npm install
    ```

2. Start the app

    ```bash
     npx expo start
    ```

## Para compilar un build del proyecto

Si no has instalado el eas-cli hazlo con

```bash
 npm install -g eas-cli
```

luego,

```bash
 eas update
```

y luego,

```bash
 eas build -p android --profile preview
```

Finalmente ve a la ruta especificada en la terminal para encontrar el paquete apk
