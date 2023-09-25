import _ from 'underscore';



/**
 * crea nuevo deck de cartas
 * @param {Array<string>} tipos ej: ['C','D','H','S'];
 * @param {Array<string>} especiales ej: ['A','J','Q','K'];
 * @returns {Array<string>}
 */

export const crearDeck = (tipos, especiales) => { //Exporto con la palabra reservada

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}


//export default crearDeck; //Haciendo este tipo de exportacion, cuando importo lo puedo nombrar como quiera, es el caso del _ underscore