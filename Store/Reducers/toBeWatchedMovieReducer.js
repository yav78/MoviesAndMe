const initialState = {toBeWatchedFilm: []};

function toBeWatched(state = initialState, action){
    let nextState;
    switch (action.type) {
      case 'TOOGLE_TOBEWATCHED':
        const favoriteFilmIndex = state.toBeWatchedFilm.findIndex(
            item => item.id === action.value.id,
          );
          if (favoriteFilmIndex !== -1) {
            // Le film est déjà dans les favoris, on le supprime de la liste
            nextState = {
              ...state,
              toBeWatchedFilm: state.toBeWatchedFilm.filter(
                (item, index) => index !== favoriteFilmIndex,
              ),
            };
          } else {
            // Le film n'est pas dans les films favoris, on l'ajoute à la liste
            nextState = {
              ...state,
              toBeWatchedFilm: [...state.toBeWatchedFilm, action.value],
            };
          }
          return nextState || state;
        // break;
    
        default:
          return state;
        // break;
      }
    }

export default toBeWatched