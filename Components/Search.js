// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import { getFilms } from '../API/tmdbapi'
import { connect } from 'react-redux'

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.nomFilm = ''
        this.pageCourante = 0
        this.totalPage = 0
        this.state = {
            films: [],
            isLoading: false
        }
    }

    loadFilm = (titre) => {
        // titre = 'star'
        if (titre === undefined || titre === '') { return }
        this.setState({ isLoading: true })
        if (titre !== undefined && titre.length > 0) {
            getFilms(titre, this.pageCourante + 1).then((filmsReponse) => {
                // console.log(filmsReponse)
                this.pageCourante = filmsReponse.page
                this.totalPage = filmsReponse.total_pages
                this.setState({
                    films: [...this.state.films, ...filmsReponse.results],
                    isLoading: false
                })
            })
        }
    }

    loadFilmName = (filmName) => {
        this.nomFilm = filmName
    }

    searchFilms() {
        this.pageCourante = 0
        this.totalPages = 0
        this.setState({
            films: [],
        }, () => {
            //console.log("Page : " + this.page + " / TotalPages : " + this.totalPages + " / Nombre de films : " + this.state.films.length)
            this.loadFilm(this.nomFilm)
        })
    }

    displayDetailForFilm = (idFilm) => {
        console.log('film id : ' + idFilm)
        this.props.navigation.navigate("FilmDetail", { idFilm: idFilm })
    }

    render() {
        console.log('RENDER');

        return (
            <View style={styles.main_container}>
                <TextInput onSubmitEditing={() => this.searchFilms()} onChangeText={(text) => { this.loadFilmName(text) }} style={styles.textinput} placeholder='Titre du film' />
                <Button title='Rechercher' onPress={() => { this.searchFilms() }} />
                <FlatList
                    data={this.state.films}
                    extraData={this.props.favoritesFilm}
                    // On utilise la prop extraData pour indiquer à notre FlatList que d’autres données doivent être prises en compte si on lui demande de se re-rendre
                    renderItem={({ item }) => <FilmItem
                        // Ajout d'une props isFilmFavorite pour indiquer à l'item d'afficher un 🖤 ou non
                        isFilmFavorite={(this.props.favoritesFilm.findIndex(film => film.id === item.id) !== -1) ? true : false}
                        film={item} displayDetailForFilm={this.displayDetailForFilm} />}
                    keyExtractor={(item) => String(item.id)}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if (this.pageCourante < this.totalPage) {
                            this.loadFilm(this.nomFilm)
                        }
                    }}
                />

                {this.state.isLoading ?
                    <View style={styles.loading_container}>
                        <ActivityIndicator size='large' />
                    </View> : null
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        // marginTop: 20
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


// export default Search

const mapStateToProps = (state) => {
    //return state // si on veut connecter tout les props

    return {
        favoritesFilm: state.favoritesFilm
    }

}

export default connect(mapStateToProps)(Search)