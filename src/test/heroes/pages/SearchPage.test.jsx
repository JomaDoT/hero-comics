import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../heroes/pages";

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate,
}));
describe('pruebas en <searchPage />', () => { 

    beforeEach(()=> jest.clearAllMocks());

    test('debe retornar los valores por defecto', () => { 
        
        const {container} = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )

       expect(container).toMatchSnapshot();
     });

     test('debe retornar a batman y el imput con el valor del query string', () => { 
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman');

        
        const img = screen.getByRole('img');
        expect(img.src).toContain('http://localhost/assets/heroes/dc-batman.jpg');

        const alertSearch = screen.getByLabelText('display-search');
        expect(alertSearch.style.display).toBe('none');

        const alertDanger = screen.getByLabelText('display-danger');
        expect(alertDanger.style.display).toBe('none');
        // screen.debug();
     });

     test('debe de mostrar un error si no se escuentra el hero', () => { 
        
        render(
            <MemoryRouter initialEntries={['/search?q=papa']}>
                <SearchPage />
            </MemoryRouter>
        )

        // screen.debug();

        const alertSearch = screen.getByLabelText('display-search');
        expect(alertSearch.style.display).toBe('none');

        const alertDanger = screen.getByLabelText('display-danger');
        expect(alertDanger.style.display).toBe('');
     });

     test('debe de llamar el navigate a la pantalla nueva', () => { 
        
        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        )

        // screen.debug();

        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target:{name:'searchText', value:'superman'}});

        const form = screen.getByLabelText('form');
        fireEvent.submit(form);

        expect(mockedNavigate).toHaveBeenCalledWith('?q=superman');
     });
 });