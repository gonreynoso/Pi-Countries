
// #### **📍 POST | /activities**

// -  Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados.
// -  Toda la información debe ser recibida por body.
// -  Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno).
const postActivityHandler = (req, res) => {
 res.send(200, "Creo un país")
 
 }
 
 module.exports = {
  postActivityHandler
 }

