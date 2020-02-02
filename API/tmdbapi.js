
const API_TOKEN = 'b97a34924c58ddc8ce3a3778de60fc86'

export function getFilms(text, page) {

  let url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
  if (page) {
    url += '&page=' + page
  }
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getFilmDetailFromApi(id) {
  return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function getImageFromApi(name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}

export function getFilmsFromApiWithSearchedText(text, page) {
  let url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
  if (page) {
    url += '&page=' + page
  }
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}