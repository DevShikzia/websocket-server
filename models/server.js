
const express = require('express');
const cors = require('cors');




class Server {
    
    constructor(){
        
        this.app = express();
        this.port = process.env.PORT;

        //rutas 
        this.paths = {}
        // Middlewares
 
        this.middlewares();

        // Rutas de mi aplicacion
        this.routes();
    }
        //conexion base de datos
      async connectDB(){
        await dbConnection();
      }

        middlewares() {
            
         // .use() esta propiedad se usa para declarar un middleware
            
                //CORS
            this.app.use( cors() );


                // Directorio Publico
            this.app.use(express.static('public'))
        }

        

        routes() {
              
        }

        listen() {

            this.app.listen(this.port, () => {
             console.log(`Example app listening on port ${this.port}`)
});
        }

}

module.exports = Server;




