import {authReducer,types} from '../../../auth';

describe('prueba en authReducer', () => { 
    
          const  initialState = {
            logged: false,
          }


    test('debe retornar el estado inicial', () => { 
        
       const state = authReducer(initialState, {});
       expect(state).toBe(initialState);
    //    console.log(state);
     });

     test('debe (login) llamar al login y authenticarnos y establecer el usuario', () => { 
        
        const  action = {
            type: types.login,
            payload: {
                id:'4545',
                name:'juan berto'
            },
          }

        const state = authReducer(initialState,action);
        expect(state.logged).toBeTruthy();
        expect(state.user).toEqual(action.payload);
        // console.log(state);
      });

      test('debe (logout) borrar el nombre del usuario y logged en false', () => { 
        
        const  userState = {
            logged: true,
            user: {
                id:'4545',
                name:'juan berto'
            },
          }

        const  action = {
            type: types.logout,
          }
        const state = authReducer(userState,action);
        expect(state.logged).not.toBeTruthy();
        expect(state).toEqual(initialState);
        console.log(state);
      });
 });