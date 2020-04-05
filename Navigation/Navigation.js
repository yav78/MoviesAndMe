import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Search from '../Components/Search';
import FilmDetail from '../Components/FilmDetail';
import Favorites from '../Components/Favorites';
import News from '../Components/News';
import FilmVu from '../Components/FilmVu';
import FilmAVoir from '../Components/FilmAVoir';
import FilmARevoir from '../Components/FilmARevoir';

const SearchSatckNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Rechercher',
    },
  },
  FilmDetail: {
    screen: FilmDetail,
  },
});

const FavoriteStackNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: 'Favoris',
    },
  },
  FilmDetail: {
    screen: FilmDetail,
  },
});

const NewsStackNavigator = createStackNavigator({
  News: {
    screen: News,
    navigationOptions: {
      title: 'Les Derniers Films',
    },
  },
  FilmDetail: {
    screen: FilmDetail,
  }
})

const FilmVuStackNavigator = createStackNavigator({
  FilmVu: {
    screen: FilmVu,
    navigationOptions: {
      title: 'Les Films Regardés',
    },
  },
  FilmDetail: {
    screen: FilmDetail,
  }
})

const FilmAVoirStackNavigator = createStackNavigator({
  FilmVu: {
    screen: FilmAVoir,
    navigationOptions: {
      title: 'Les Films à voir',
    },
  },
  FilmDetail: {
    screen: FilmDetail,
  }
})

const FilmARevoirStackNavigator = createStackNavigator({
  FilmARevoir: {
    screen: FilmARevoir,
    navigationOptions: {
      title: 'Les Films à Revoir',
    },
  },
  FilmDetail: {
    screen: FilmDetail,
  }
})

const MoviesTabNavigator = createBottomTabNavigator(
  {
    Search: {
      screen: SearchSatckNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return (
            <Image
              source={require('../images/ic_search.png')}
              style={styles.icon}
            />
          );
        },
      },
    },
    Favorites: {
      screen: FavoriteStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return (
            <Image
              source={require('../images/ic_favorite.png')}
              style={styles.icon}
            />
          );
        },
      },
    },
    News: {
      screen: NewsStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../images/ic_fiber_new.png')}
            style={styles.icon} />
        }
      },
    },
    FilmVu: {
      screen: FilmVuStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../images/eye-checked.png')}
            style={styles.icon}
          />
        }
      }
    },
    FilmAVoir: {
      screen: FilmAVoirStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../images/tobewatched-filled.png')}
            style={styles.icon}
          />
        }
      }
    },
    FilmARevoir: {
      screen: FilmARevoirStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../images/memories-100-filled.png')}
            style={styles.icon}
          />
        }
      }
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      activeBackgroundColor: '#DDDDDD',
      inactiveBackgroundColor: '#FFFFFF',
    },
  },
);

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});

export default createAppContainer(MoviesTabNavigator);
