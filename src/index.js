import './styles.css';
import { buscarHeroe } from './js/promesas.js';
import { buscarHeroe as buscarHeroeCallback } from './js/callbacks.js';

const heroeId1 = 'capi';
const heroeId2 = 'iron';

// buscarHeroe(heroeId, (err, heroe1) => {

//     if (err) { return console.error(err); }

//     buscarHeroe(heroeId2, (err, heroe2) => {

//         if (err) { return console.error(err); }

//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);

//     });
// });

buscarHeroe(heroeId1).then(heroe => {
    console.log(`Enviando a ${heroe.nombre} a la misión`);

    buscarHeroe(heroeId2).then(heroe2 => {
        console.log(`Enviando a ${heroe.nombre} y ${heroe2.nombre} a la misión`);
    });
});