const initialState = {watchedFilm: []};

function watched(state = initialState, action){
    let nextState;
    switch (action.type) {
      case 'TOOGLE_WATCHED':
        const favoriteFilmIndex = state.watchedFilm.findIndex(
            item => item.id === action.value.id,
          );
          if (favoriteFilmIndex !== -1) {
            // Le film est déjà dans les favoris, on le supprime de la liste
            nextState = {
              ...state,
              watchedFilm: state.watchedFilm.filter(
                (item, index) => index !== favoriteFilmIndex,
              ),
            };
          } else {
            // Le film n'est pas dans les films favoris, on l'ajoute à la liste
            nextState = {
              ...state,
              watchedFilm: [...state.watchedFilm, action.value],
            };
          }
          return nextState || state;
        // break;
    
        default:
          return state;
        // break;
      }
    }

export default watched