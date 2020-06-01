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

// Creo una función con el parámetro id.
function pedirPersonaje(id) {
    // Creo un prompt que solicite al usuario el número de id.
    var id = Number(prompt("Introduce el id del personaje que quieres ver:"));
    // En caso de introducir un número menor que 1 o mayor que 591, se devuelve por pantalla una frase determinada.
    if (id < 1 || id > 591) {
        document.write(`Este id no corresponde a ningún personaje actual.`)
    } else {
    // Si el número es correcto, se reemplaza la palabra "id" de la URL de personajes, por el número introducido.
    const URL = `${API_URL}${PERSONAJES_URL.replace("id", id)}`;
    // Se obtiene la información del personaje indicado.
    $.get(URL, OPCIONES, PERSONAJE);
    
    }
}
