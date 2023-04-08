import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "../../../ui";
import { AuthContext } from "../../../auth";
import { MemoryRouter } from "react-router-dom";

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:() =>mockedUseNavigate,
}));
describe('prueba en <NavBar />', () => { 

    const contextValue ={
        logged:true,
        user:{
            id:'sdsd',
            name:'juan'
        },
        logout: jest.fn(),
    };

    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrar el nombre del usuario', () => { 

       

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                  <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.getByLabelText('navname').textContent).toBe('juan');
        // screen.debug();
     });

     test('debe navegar hacia el login si damos click logout', () => { 

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                  <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

    
        const logoutbtn = screen.getByRole('button');
        fireEvent.click(logoutbtn);


        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true});
     });
 });