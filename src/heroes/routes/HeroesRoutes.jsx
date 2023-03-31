import { useNavigate, Route, Routes } from 'react-router-dom'
import { NavBar } from '../../ui'
import { DcPages, MarvelPages, SearchPages, HeroPages } from '../pages'
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
import { HeroesApp } from '../../HeroesApp';

export const HeroesRoutes = () => {

  const {user} = useContext(UserContext);

  const navigate = useNavigate();
  
  useEffect(() => {
    if(user === null)
    {
        navigate('/login',{
            replace:true
        });
    }
  }, [])
  
  return (
    <>
    <NavBar /> 

<div className='container'>
<Routes>
      <Route
      path="marvel"
      element={<MarvelPages />}
      />

      <Route
      path="dc"
      element={<DcPages />}
      />
    
      <Route
      path="search"
      element={<SearchPages />}
      />
      
      <Route
      path="hero/:id"
      element={<HeroPages />}
      />
      
      <Route
      path="HeroesApp"
      element={<HeroesApp />}
      />

      


      
</Routes>   
</div>
    </>
  )
}
