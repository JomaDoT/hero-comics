import { HeroList } from "./heroes/components"

export const HeroesApp = () => {
  return (
    <>
    <h1>Heros App</h1>
    <hr />
    <div className="row">  
      <div className="col-6">
           <h1>Dc Comics</h1>
           <HeroList publisher='DC Comics' />
      </div>

      <div className="col-6">
           <h1>MarvelPages</h1>
           <HeroList publisher='Marvel Comics' />
      </div>
  </div>   

    </>
  )
}
