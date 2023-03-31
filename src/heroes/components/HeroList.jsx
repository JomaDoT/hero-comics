import { useMemo } from "react";
import { getHeroeByPublisher } from "../helpers/getHeroeByPublisher"
import { HeroCard } from "./";

export const HeroList = ({publisher}) => {
  
    const heroes = useMemo(() => getHeroeByPublisher(publisher),[publisher]);
    return (
    <>
    <div className="row rows-cols-1 row-cols-md-2 g-3" >
    {heroes.map(hero=>(
      <HeroCard 
      key={hero.id}
      {...hero}
      /> 
      ))}
    </div >
    </>
  )
}
