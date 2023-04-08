import {render,screen} from '@testing-library/react';
import { AuthContext } from '../../auth';
import { PublicRoute } from '../../router';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('prueba en <PublicRoute>', () => { 
    
    
    test('debe retornar el children si no esta authenticado', () => { 
        
        render(
        <AuthContext.Provider value={{logged:false}}>
            <PublicRoute>
                <h1>public route</h1>
            </PublicRoute>
        </AuthContext.Provider>
        );

        expect(screen.getByText('public route')).toBeTruthy();
        // screen.debug();

     });

     test('debe de navegar si est authenticado', () => { 
        
        const contextValue ={
            logged:true,
            user:{
                id:'sdsd',
                name:'juan'
            }
        }

        render(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path='marvel' element={<h1>pagina marvel</h1>}/>
                    <Route path='login' element={
                        <PublicRoute>
                          <h1>pagina login</h1>
                        </PublicRoute>
                        } 
                        />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
        );
        
        expect(screen.getByText('pagina marvel')).toBeTruthy();
        screen.debug();

     });
 });
