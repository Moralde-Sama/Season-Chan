import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { ThemeColor } from "../ThemeColor";
import SeasonalAnimeStackNav from "./StackNavigation";
import { StyleSheet, Image } from "react-native";
import StackNav from './StackNavigation';
import React from 'react';

const DrawerNav = createDrawerNavigator(
    {
      Home: {
        screen: SeasonalAnimeStackNav,
        navigationOptions: {
          drawerLabel: 'Seasonal Anime',
          drawerIcon: ({ tintColor = ThemeColor.SecondaryColor }) => (
          <Image
              source={require('../assets/images/anilist.png')}
              style={[styles.icon, { tintColor: tintColor }]}
          />
      )
      }
    }
    },
    {
      drawerBackgroundColor: 'rgba(255,255,255,.9)',
      contentOptions: {
        activeTintColor: '#fff',
        activeBackgroundColor: ThemeColor.SecondaryColor,
      },
    }
  );

  export default createAppContainer(createSwitchNavigator({
    DrawerNavigator: DrawerNav,
    StackNavigator: StackNav,
  }, {
    initialRouteName: 'DrawerNavigator'
  }));

  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    }
  });