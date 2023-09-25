import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";
import { crearHtmlCarta } from "./crear-carta-html";


// turno de la computadora

/**
 * 
 * @param {number} puntosMinimos puntos minimos a superar
 * @param {HTMLElement} puntosHTML elemento html donde se muestran los puntos
 * @param {HTMLElement} divCartasComputadora div de cartas
 * @param {Array <string>} deck array de deck
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = []   ) => {


    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearHtmlCarta (carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
