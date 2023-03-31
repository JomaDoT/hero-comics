import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import {HeroCard} from '../components';
import { getHeroByName } from '../helpers';

export const SearchPages = () => {
  
  const navigate = useNavigate();
  const locate = useLocation();

  const {q = ''} =  queryString.parse(locate.search);
  const heros = getHeroByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heros.length === 0;
  
  const {searchText,onInputChange} = useForm({
    searchText:q
  });

  const onSearchSubmit = (event)=>{
    event.preventDefault();
    navigate(`?q=${searchText}`);

  }
  return (
    <>
    <h1>Search</h1>
    <hr /> 
    <div className="row">
    <div className="col-5">
      <h4>searching</h4>
      <hr />
      <form onSubmit={onSearchSubmit}>
        <input type="text" placeholder="search hero"
        className="form-control"
        autoComplete="off"        
        name="searchText"
        value={searchText}
        onChange={onInputChange}
         />
         <button type='submit' className="btn btn-outline-primary mt-1">
          Search
         </button>
      </form>
    </div>

    <div className="col-7">
      <h4>Result</h4>
      <hr />

      {/* {
        (q === '')
        ? <div className="alert alert-primary">Search a Hero</div>
        : (heros.length === 0) && <div className="alert alert-danger"> No Hero with <b>{q}</b> </div>
      } */}
      <div className="alert alert-primary animate__animated animate__fadeIn"
       style={{display: (showSearch) ?'' : 'none'}}>
        Search a Hero
        </div>
        <div className="alert alert-danger animate__animated animate__fadeIn"
        style={{display: (showError) ?'' : 'none'}}> 
        No Hero with <b>{q}</b>
        </div>
      
      {
      heros.map(hero =>(
        <HeroCard key={hero.id} {...hero}/>
      ))
      }
    </div>
    </div>

    </>
    
  )
}
