


/**
 * 
 * @param {'string'} carta  recibe un string de carta
 * @returns {HTMLImageElement}  retorna imagen html
 */


export const crearHtmlCarta = ( carta ) => {
    if (!carta) throw new Error ('La carta es un argumento obligatorio');

 // <img class="carta" src="assets/cartas/2C.png">
 const imgCarta = document.createElement('img');
 imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
 imgCarta.classList.add('carta');

 return imgCarta;

}
