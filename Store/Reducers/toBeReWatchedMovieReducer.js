const initialState = {toBeReWatchedFilm: []};

function toBeReWatched(state = initialState, action){
    let nextState;
    switch (action.type) {
      case 'TOOGLE_TOBEREWATCHED':
        const favoriteFilmIndex = state.toBeReWatchedFilm.findIndex(
            item => item.id === action.value.id,
          );
          if (favoriteFilmIndex !== -1) {
            // Le film est déjà dans les favoris, on le supprime de la liste
            nextState = {
              ...state,
              toBeReWatchedFilm: state.toBeReWatchedFilm.filter(
                (item, index) => index !== favoriteFilmIndex,
              ),
            };
          } else {
            // Le film n'est pas dans les films favoris, on l'ajoute à la liste
            nextState = {
              ...state,
              toBeReWatchedFilm: [...state.toBeReWatchedFilm, action.value],
            };
          }
          return nextState || state;
        // break;
    
        default:
          return state;
        // break;
      }
    }

export default toBeReWatched