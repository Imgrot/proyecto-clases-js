import { obtenerHeroesArr, obtenerHeroeAwait } from "./js/await";

console.time('await');

obtenerHeroeAwait('capia')
    .then(heroe => {
        console.log(heroe);

        console.timeEnd('await');
    }).catch(console.warn);
