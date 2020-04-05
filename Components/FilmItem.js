// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, Animated, Dimensions } from 'react-native'
// import {connect} from 'react-redux'
import FadeIn from '../Animations/FadeIn'
import { connect } from 'react-redux'

class FilmItem extends React.Component {


  isFavorite() {
    if (this.props.isFilmFavorite) {
      return <Image style={styles.styteFavoriteImage} source={require('../images/ic_favorite.png')} />
    }

  }

  isWatchedMovieIcon() {
    //let source = '../images/eye-unchecked.png';
    if (this.props.isWatchedFilm) {
      //source = '../images/eye-checked.png';
      return <Image style={styles.styteFavoriteImage} source={require('../images/eye-checked.png')} />
    } else {
      return <Image style={styles.styteFavoriteImage} source={require('../images/eye-unchecked.png')} />
    }

  }

  isToBeReWatchedMovieIcon() {
    //let source = '../images/memories-100.png';
    if (this.props.isToBeReWatchedFilm) {
      //source = '../images/memories-100-filled.png';
      return <Image style={styles.styteFavoriteImage} source={require('../images/memories-100-filled.png')} />
    } else {
      return <Image style={styles.styteFavoriteImage} source={require('../images/memories-100.png')} />
    }
    //return <Image style={styles.styteFavoriteImage} source={require(source)} />
  }

  isToBeWatchedMovieIcon() {
    //let source = '../images/tobewatched.png';
    if (this.props.isToBeWatchedFilm) {
      //source = '../images/tobewatched-filled.png';
      return <Image style={styles.styteFavoriteImage} source={require('../images/tobewatched-filled.png')} />
    } else {
      return <Image style={styles.styteFavoriteImage} source={require('../images/tobewatched.png')} />
    }
    //return <Image style={styles.styteFavoriteImage} source={require(source)} />
  }

  toggleToBeWatchedMovie() {
    const action = { type: "TOOGLE_TOBEWATCHED", value: this.props.film }
    this.props.dispatch(action)
  }

  toggleToBeReWatchedMovie() {
    const action = { type: "TOOGLE_TOBEREWATCHED", value: this.props.film }
    this.props.dispatch(action)
  }

  toggleWatchedFilm() {
    const action = { type: "TOOGLE_WATCHED", value: this.props.film }
    this.props.dispatch(action)
  }

  render() {
    const { film, displayDetailForFilm } = this.props
    return (

      <FadeIn>
        <TouchableOpacity style={styles.main_container} onPress={() => displayDetailForFilm(film.id)}>
          <Image
            style={styles.image}
            source={{ uri: "https://image.tmdb.org/t/p/w300" + film.poster_path }}
          />
          <View style={styles.content_container}>
            <View style={styles.header_container}>
              {this.isFavorite()}
              <Text style={styles.title_text}>{film.title}</Text>
              <Text style={styles.vote_text}>{film.vote_average}</Text>
            </View>
            <View style={styles.description_container}>
              <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
              {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
            </View>
            <View style={styles.date_container}>
              <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.icons_container}>
          <TouchableOpacity onPress={() => this.toggleWatchedFilm()}>
            {this.isWatchedMovieIcon()}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.toggleToBeReWatchedMovie()}>
            {this.isToBeReWatchedMovieIcon()}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.toggleToBeWatchedMovie()}>
            {this.isToBeWatchedMovieIcon()}
          </TouchableOpacity>
        </View>
      </FadeIn>

    )
  }
}



const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row'
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5,
    color: 'red',
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  },
  styteFavoriteImage: {
    width: 25,
    height: 25,
    marginRight: 5
  },
  icons_container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-around'
  }
})

// export default FilmItem

const mapStateToProps = (state) => {
  //return state // si on veut connecter tout les props

  return {
    favoritesFilm: state.toggleFavorite.favoritesFilm,
    toBeReWatchedFilm: state.toBeReWatched.toBeReWatchedFilm,
    toBeWatchedFilm: state.toBeWatched.toBeWatchedFilm,
    watchedFilm: state.watched.watchedFilm
  }

}

export default connect(mapStateToProps)(FilmItem)