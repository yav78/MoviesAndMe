
import React from 'react';
import { StyleSheet, View } from 'react-native';
import FilmList from './FilmList';
import { connect } from 'react-redux';

class FilmAVoir extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <FilmList
                    films={this.props.toBeWatchedFilm}
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
        toBeWatchedFilm: state.toBeWatched.toBeWatchedFilm,
    };
};

export default connect(mapStateToProps)(FilmAVoir);