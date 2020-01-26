const initialState = { favoritesFilm: [] }

function toogleFovarite(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'TOOGLE_FAVORITE':
            const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.idFilm === action.value.idFilm)
            if (favoriteFilmIndex !== -1) {
                // Le film est déjà dans les favoris, on le supprime de la liste
                nextState = {
                    ...state,
                    favoritesFilm: state.favoritesFilm.filter((item, index) => index !== favoriteFilmIndex)
                }
            }
            else {
                // Le film n'est pas dans les films favoris, on l'ajoute à la liste
                nextState = {
                    ...state,
                    favoritesFilm: [...state.favoritesFilm, action.value]
                }
            }
            return nextState || state
            // break;

        default:
            return state
            // break;
    }
}

export default toogleFovarite