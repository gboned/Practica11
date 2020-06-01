/****************************/
/*                          */
/*      RICK AND MORTY      */  
/*                          */
/****************************/

// Indico en unas variables constantes los detalles de la URL a la que necesito acceder.
const API_URL = "https://rickandmortyapi.com/api/";
const PERSONAJES_URL = "character/id";
const OPCIONES = { crossDomain: true };

// Creo una función para conseguir ciertos datos de los personajes.
const PERSONAJE = function (personaje) {
    // En caso de que el origen sea desconocido, que se muestre una frase determinada.
    if (personaje.origin.name === "unknown") {
        personaje.origin.name = "un lugar desconocido";
    }
    // Devuelvo en la página un texto con información sobre el personaje de la id introducida.
    document.write(`Hola mi nombre es ${personaje.name}, mi especie es ${personaje.species}, soy originario de ${personaje.origin.name}${"<br></br>"}`)
};
