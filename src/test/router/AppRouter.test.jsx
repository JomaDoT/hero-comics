import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth";
import { AppRouter } from "../../router";

describe('purebas en <AppRouter>', () => { 
    

    test('debe de dirigirlo al login si no esta authenticado', () => { 
        const contextValue ={
            logged:false,
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getAllByText('Login').length).toBe(2);
        screen.debug();
        
     });

     test('debe de dirigirlo marvel si esta authenticado', () => { 
        const contextValue ={
            logged:true,
            user:{
                id:'sdsd',
                name:'juan'
            }
        }
        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        screen.debug();

        expect(screen.getAllByText('Marvel').length).toBe(1);
        
     });
 });