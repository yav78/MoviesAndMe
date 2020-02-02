// // Components/Search.js

// import React from 'react'
// import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator } from 'react-native'
// import films from '../Helpers/filmsData'
// import FilmItem from './FilmItem'
// import { getFilms } from '../API/tmdbapi'
// import { connect } from 'react-redux'
// import FilmList from './FilmList'

// class Search extends React.Component {

//     constructor(props) {
//         super(props)
//         this.nomFilm = ''
//         this.pageCourante = 0
//         this.totalPage = 0
//         this.state = {
//             films: [],
//             isLoading: false
//         }
//     }

//     loadFilm = (titre) => {
//         // titre = 'star'
//         if (titre === undefined || titre === '') { return }
//         this.setState({ isLoading: true })
//         if (titre !== undefined && titre.length > 0) {
//             getFilms(titre, this.pageCourante + 1).then((filmsReponse) => {
//                 // console.log(filmsReponse)
//                 this.pageCourante = filmsReponse.page
//                 this.totalPage = filmsReponse.total_pages
//                 this.setState({
//                     films: [...this.state.films, ...filmsReponse.results],
//                     isLoading: false
//                 })
//             })
//         }
//     }

//     loadFilmName = (filmName) => {
//         this.nomFilm = filmName
//     }

//     searchFilms() {
//         this.pageCourante = 0
//         this.totalPages = 0
//         this.setState({
//             films: [],
//         }, () => {
//             //console.log("Page : " + this.page + " / TotalPages : " + this.totalPages + " / Nombre de films : " + this.state.films.length)
//             this.loadFilm(this.nomFilm)
//         })
//     }

  

//     render() {
//         console.log('RENDER');

//         return (
//             <View style={styles.main_container}>
//                 <TextInput onSubmitEditing={() => this.searchFilms()} onChangeText={(text) => { this.loadFilmName(text) }} style={styles.textinput} placeholder='Titre du film' />
//                 <Button title='Rechercher' onPress={() => { this.searchFilms() }} />
//                 <FilmList
//                     films={this.state.films} // C'est bien le component Search qui récupère les films depuis l'API et on les transmet ici pour que le component FilmList les affiche
//                     navigation={this.props.navigation} // Ici on transmet les informations de navigation pour permettre au component FilmList de naviguer vers le détail d'un film
//                     loadFilm={this.loadFilm} // _loadFilm charge les films suivants, ça concerne l'API, le component FilmList va juste appeler cette méthode quand l'utilisateur aura parcouru tous les films et c'est le component Search qui lui fournira les films suivants
//                     pageCourante={this.pageCourante}
//                     totalPage={this.totalPage} // les infos page et totalPages vont être utile, côté component FilmList, pour ne pas déc
//                 />
//                 {this.state.isLoading ?
//                     <View style={styles.loading_container}>
//                         <ActivityIndicator size='large' />
//                     </View> : null
//                 }

//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     main_container: {
//         flex: 1,
//         // marginTop: 20
//     },
//     textinput: {
//         marginLeft: 5,
//         marginRight: 5,
//         height: 50,
//         borderColor: '#000000',
//         borderWidth: 1,
//         paddingLeft: 5
//     },
//     loading_container: {
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         top: 100,
//         bottom: 0,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// })


// // export default Search

// const mapStateToProps = (state) => {
//     //return state // si on veut connecter tout les props

//     return {
//         favoritesFilm: state.favoritesFilm
//     }

// }

// export default connect(mapStateToProps)(Search)

// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator } from 'react-native'
import FilmItem from './FilmItem'
import FilmList from './FilmList'
import { getFilmsFromApiWithSearchedText } from '../API/tmdbapi'

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.searchedText = ""
    this.page = 0
    this.totalPages = 0
    this.state = {
      films: [],
      isLoading: false
    }

    this._loadFilms = this._loadFilms.bind(this)
  }

  _loadFilms() {
      console.log('I am in loadfilm')
    if (this.searchedText.length > 0) {
      this.setState({ isLoading: true })
      getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => {
          this.page = data.page
          this.totalPages = data.total_pages
          this.setState({
            films: [ ...this.state.films, ...data.results ],
            isLoading: false
          })
      })
    }
  }

  _searchTextInputChanged(text) {
    this.searchedText = text
  }

  _searchFilms() {
    this.page = 0
    this.totalPages = 0
    this.setState({
      films: [],
    }, () => {
        this._loadFilms()
    })
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.main_container}>
        <TextInput
          style={styles.textinput}
          placeholder='Titre du film'
          onChangeText={(text) => this._searchTextInputChanged(text)}
          onSubmitEditing={() => this._searchFilms()}
        />
        <Button title='Rechercher' onPress={() => this._searchFilms()}/>
        <FilmList
          films={this.state.films} // C'est bien le component Search qui récupère les films depuis l'API et on les transmet ici pour que le component FilmList les affiche
          navigation={this.props.navigation} // Ici on transmet les informations de navigation pour permettre au component FilmList de naviguer vers le détail d'un film
          loadFilms={this._loadFilms} // _loadFilm charge les films suivants, ça concerne l'API, le component FilmList va juste appeler cette méthode quand l'utilisateur aura parcouru tous les films et c'est le component Search qui lui fournira les films suivants
          page={this.page}
          totalPages={this.totalPages} // les infos page et totalPages vont être utile, côté component FilmList, pour ne pas déclencher l'évènement pour charger plus de film si on a atteint la dernière page
        />
        {this._displayLoading()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Search