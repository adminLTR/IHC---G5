# HARDWARE

Esta carpeta contiene el código del hardware del proyecto, código que será insertado en el microcontrolador trabajado. A continuación encontrarás las instrucciones necesarias para trabajar con el proyecto, algunas librerias usadas y material adicional.

## Tecnologías utilizadas

A continuación algunas tecnologías utilizadas *(sujeto a cambios)*

### Hardware

- **ESP32 CAM**: Microcontrolador que contiene una cámara OV2640, cuya resolución no es muy alta pero para el proyecto nos sirve. Puedes encontrar información técnica [aquí](https://randomnerdtutorials.com/esp32-cam-video-streaming-face-recognition-arduino-ide/)
- **ESP32 CAM MB**: Es un adaptador para cargar el código en el ESP32CAM, dado que este no cuenta con un puerto USB para la comunicación serial con el computador. Existen otros en el mercado, pero este adaptador es el que yo recomiendo. Puedes encontrar información de su uso [aquí](https://randomnerdtutorials.com/upload-code-esp32-cam-mb-usb/)
- **GPS NEO 6M u-blox**: Es un circuito GPS, que se comunica a través de los pines RX y TX. Brinda información precisa de la longitud y laitud. Puedes encontrar información de su uso [aquí](https://randomnerdtutorials.com/esp32-neo-6m-gps-module-arduino/)

### Software

- **WiFi.h**: Es la librería de Arduino que permite conexiones WiFi con el microcontrolador. Puedes encontrar información de su uso [aquí](https://randomnerdtutorials.com/esp32-useful-wi-fi-functions-arduino/)
- **HTTPClient.h**: Librería de Arduino para gestionar peticiones HTTP, se pueden realizar peticiones tipo GET, POST, PUT y DELETE. Puedes encontrar más información de su uso [aquí](https://randomnerdtutorials.com/esp32-http-get-post-arduino/)

## Requisitos previos

Para trabajar con el ESP32, es importante tener instalado el IDE de arduino, puedes instalarlo de la página oficial en el siguiente [enlace](https://www.arduino.cc/en/software)

También debes tener en cuenta que necesitas un driver para que tu computador pueda leer la placa de ESP32, puedes seguir los pasos de instalación del siguiente [video](https://www.youtube.com/watch?v=I-NW9gTfIUY&t=1s)