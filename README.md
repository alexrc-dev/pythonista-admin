# Pythonista Admin Client

Implementación de un cliente para la API Pythonista, desarrollado con NextJS y ReactJS.

### Instrucciones de implementación

* Clonar este repositorio:

```shell
git clone https://github.com/alexrc-dev/pythonista-admin.git
```

* Ingresar en el directorio 

```shell
cd pythonista-admin
```

* Instalar dependencias

```shell
npm install
```

* Configurar las variables de entorno en ```.env.production```

```text
NEXT_PUBLIC_CLIENT_PATH=https://your-admin-domain.com
NEXT_PUBLIC_API_PATH=https://your-api-domain.com/api/v1
```
* Configurar los secretos de entorno creando el archivo ```.env.local``` con el comando ```touch .env.local``` y agregando el siguiente formato:

```text
NEXT_PUBLIC_CLIENT_ID=<your-client-id>
NEXT_PUBLIC_AUTH_HEADER=<clave cifrada en base64 con el formato client_id:client_secret>
```

* Especificar el entorno para producción con:

  * linux & mac: ```export NODE_ENV=production```
  * windows: ```$env:NODE_ENV = 'production'```


* Crear una version de producción con:
```shell
npm run build
```

* Una vez finalizada con éxito la compilación para producción iniciar el servidor con:
```shell
npm run start
```

* Verificar en el navegador si todo es correcto ingresando a: ```http://localhost:4242```

### Configuración extra para ```apache``` y ```nginx```

#### apache

...pending for editing

#### nginx

...pending for editing
