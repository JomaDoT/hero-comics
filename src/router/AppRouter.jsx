import {
  Route,
  Routes
} from "react-router-dom";

import { LoginPages } from "../auth";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";

export const AppRouter = () =>{

return (

<>
 <Routes>
      
      <Route
      path="login"
      element={<LoginPages />}
      />

      {/* <Route
      path="/"
      element={<HeroesApp />}
      /> */}
      
      <Route
      path="/*"
      element={<HeroesRoutes />}
      />
</Routes>
      </>
  )
}