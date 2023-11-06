import {buscarHeroe, buscarHeroeAsync} from './js/promesas.js';

buscarHeroe('capi')
.then(heroe => console.log(heroe))
.catch(console.warn);

buscarHeroeAsync('iron')
.then(heroe => console.log(heroe))
.catch(console.warn);