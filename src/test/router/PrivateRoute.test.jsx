import {render,screen} from '@testing-library/react';
import { AuthContext } from '../../auth';
import { PrivateRoute } from '../../router';
import { MemoryRouter } from 'react-router-dom';

describe('prueba en <privateroute>', () => { 
    
    test('debe retornar el children si esta authenticado', () => { 
     
        Storage.prototype.setItem =  jest.fn();

        const contextValue ={
            logged:true,
            user:{
                id:'sdsd',
                name:'juan'
            }
        }

        render(
        <AuthContext.Provider value={contextValue}>
         <MemoryRouter initialEntries={['/marvel']}>
            <PrivateRoute>
                <h1>private route</h1>
            </PrivateRoute>
         </MemoryRouter>
        </AuthContext.Provider>
        );

        expect(screen.getByText('private route')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel' );
        screen.debug();

     });
 });