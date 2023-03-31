import { heroes } from "../data/heroes";

export const getHeroeByPublisher = (publisher) => {

    const validPublisher = ['Marvel Comics','DC Comics'];

    if(!validPublisher.includes(publisher)){
        throw new Error(`${publisher} IS NOT VALID`);
    }


    return heroes.filter(heroe => heroe.publisher===publisher);
}
