import React from 'react'
import {StyleSheet, Image} from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'

const SearchSatckNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Rechercher'
        }

    },
    FilmDetail: {
        screen: FilmDetail
    }
})

const MoviesTabNavigator = createBottomTabNavigator({
    Search: {
        screen: SearchSatckNavigator,
        navigationOptions: {
            tabBarIcon: () => {
                return <Image
                    source={require('../images/ic_search.png')}
                    style={styles.icon}
                />
            }
        }
    },
    Favorites: {
        screen: Favorites,
        navigationOptions: {
            tabBarIcon: () => {
                return <Image
                    source={require('../images/ic_favorite.png')}
                    style={styles.icon}
                />
            }
        }
    }
}, {
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        activeBackgroundColor: '#DDDDDD',
        inactiveBackgroundColor: '#FFFFFF'
    }
}


)

const styles = StyleSheet.create({
    icon : {
        width:30,
        height:30
    }
})


export default createAppContainer(MoviesTabNavigator)