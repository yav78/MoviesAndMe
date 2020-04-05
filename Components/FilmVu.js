import React from 'react';
import { StyleSheet, View } from 'react-native';
import FilmList from './FilmList';
import { connect } from 'react-redux';

class FilmVu extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <FilmList
                    films={this.props.watchedFilm}
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
        watchedFilm: state.watched.watchedFilm,
    };
};

export default connect(mapStateToProps)(FilmVu);