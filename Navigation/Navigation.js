import { createStackNavigator } from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'

const SearchSatckNavigator = createStackNavigator({
    Search : {
        screen : Search,
        navigationOptions: {
            title: 'Rechercher'
        }

    },
    FilmDetail:{
        screen: FilmDetail
    }
})

export default createAppContainer(SearchSatckNavigator)