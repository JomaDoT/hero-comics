import { useNavigate, Route, Routes } from 'react-router-dom'
import { HeroesApp } from '../../HeroesApp'
import { NavBar } from '../../ui'
import { DcPages, MarvelPages, SearchPages, HeroPages } from '../pages'
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
import { LoginPages } from '../../auth';

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
      path="/"
      element={<HeroesApp />}
      />
      
      <Route
      path="/*"
      element={<LoginPages />}
      />
</Routes>   
</div>
    </>
  )
}
