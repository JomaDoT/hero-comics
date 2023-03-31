import { Link } from "react-router-dom";

const CharacterByHero = ({alter_ego,characters})=>{
  // if(alter_ego === characters) return (<></>);
  // return (<p>{characters}</p>);

 return (alter_ego === characters)
 ? (<></>)
 : (<p>{characters}</p>);
}

export const HeroCard = ({
    id, superhero,
    alter_ego,first_appearance,
    characters
}) => {

  const sourceImgHero = `./assets/heroes/${id}.jpg`;

  // const CharacterByHero  =(<p>{characters}</p>);
  return (
    <div className="col animate__animated animate__fadeIn">
    <div className="card">
    <div className="row no-gutters">
    <div className="col-4">
        <img 
         className="card-img img-fluid"
         src={sourceImgHero}
         alt={superhero} 
         />
    </div>

    <div className="col-8">

      <div className="card-body">

        <h5 className="card-title">{superhero}</h5>
        <p className="card-text">{alter_ego}</p>

        <CharacterByHero characters={characters} alter_ego={alter_ego} />
        {/* {(alter_ego !== characters) && characterByHero} */}
        
        <p className="card-text">
          <small className="text-muted">{first_appearance}</small>
        </p>

        <Link to={`/hero/${id}`} >
           Detail....
        </Link>
      </div>
    </div>
    </div>
    </div>
    </div>

  )
}
