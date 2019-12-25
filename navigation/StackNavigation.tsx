import * as React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import SeasonalAnime from "../screens/SeasonalAnime";
import { ThemeColor } from "../ThemeColor";
import AnimeDetails from "../screens/AnimeDetails";
import BottomNavigation from '../navigation/BottomNavigation';
import Icon from 'react-native-vector-icons/Ionicons';

export default createStackNavigator({
    AnimeList: {
        screen: BottomNavigation,
        navigationOptions: ({navigation}) => {
            return {
              title: navigation.getParam('Title', 'Default'),
              headerStyle: {backgroundColor: ThemeColor.PrimaryColor},
              headerTintColor: "#FFFFFF",
              headerLeft: <Icon name='md-menu' size={30} color='white' style={{marginLeft: 20}} 
                onPress={navigation.openDrawer} />,
              headerRight: () => (
                <SeasonalAnime.HeaderButtons 
                onPress={navigation.getParam('headerFilter')}/>
              )
            }
          }
    },
    AnimeDetails: {
        screen: AnimeDetails,
        navigationOptions: {
            title: "Anime Details",
            headerStyle: {backgroundColor: ThemeColor.PrimaryColor},
            headerTintColor: "#FFFFFF",
        }
    }
  });