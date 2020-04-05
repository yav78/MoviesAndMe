
import React from 'react';
import { StyleSheet, View } from 'react-native';
import FilmList from './FilmList';
import { connect } from 'react-redux';

class FilmARevoir extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <FilmList
                    films={this.props.toBeReWatchedFilm}
                    navigation={this.props.navigation}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    avatar_container: {
        alignItems: 'center',
    },
});

const mapStateToProps = state => {
    return {
        toBeReWatchedFilm: state.toBeReWatched.toBeReWatchedFilm,
    };
};

export default connect(mapStateToProps)(FilmARevoir);