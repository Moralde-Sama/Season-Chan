import * as React from 'react';
import {  createBottomTabNavigator } from 'react-navigation-tabs';
import SeasonalAnime from '../screens/SeasonalAnime';
import { ThemeColor } from '../ThemeColor';
import Icon from 'react-native-vector-icons/Ionicons';
import SpringAnime from '../screens/SpringAnime';
import SummerAnime from '../screens/SummerAnime';
import FallAnime from '../screens/FallAnime';

export default createBottomTabNavigator({
    Winter: {
        screen: SeasonalAnime,
        navigationOptions: {
            tabBarLabel: 'Winter 2020',
            tabBarIcon: () => (
                <Icon name='md-snow' size={25} color='white' />
            ),
        }
    },
    Spring: {
        screen: SpringAnime,
        navigationOptions: {
            tabBarLabel: 'Spring 2020',
            tabBarIcon: () => (
                <Icon name='md-rose' size={25} color='white' />
            ),
        }
    },
    Summer: {
        screen: SummerAnime,
        navigationOptions: {
            tabBarLabel: 'Summer 2020',
            tabBarIcon: () => (
                <Icon name='md-sunny' size={25} color='white' />
            ),
        }
    },
    Fall: {
        screen: FallAnime,
        navigationOptions: {
            tabBarLabel: 'Fall 2020',
            tabBarIcon: () => (
                <Icon name='md-leaf' size={25} color='white' />
            ),
        }
    },
},
{
    lazy: true,
    tabBarOptions: {
        activeTintColor: ThemeColor.SecondaryColor,
        labelStyle: {
            fontSize: 12,
        },
        style: {
            backgroundColor: ThemeColor.PrimaryColor,
        },
    },
})