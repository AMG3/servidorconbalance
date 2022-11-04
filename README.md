# servidorconbalance

Para ver las 4 instancias escuchando en los puertos 8080, 8082, 8083, 8084 y 8085, se debe insertar los siguientes comandos en la terminal:

pm2 start .src/server.js --name="server1" --watch -- 8080

pm2 start .src/server.js --name="server2" --watch -- 8082

pm2 start .src/server.js --name="server3" --watch -- 8083

pm2 start .src/server.js --name="server4" --watch -- 8084

pm2 start .src/server.js --name="server5" --watch -- 8085
