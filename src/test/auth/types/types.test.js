import { types } from "../../../auth";

describe('prueba en types', () => { 
    
    test('debe regresar todos los types', () => { 

         expect(types).toEqual(
            {
                login:  '[Auth] Login',
                logout: '[Auth] Logout',
                any: '',
            }          
         );
     });
 });