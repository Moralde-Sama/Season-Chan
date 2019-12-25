import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import SpringAnime from '../screens/SpringAnime';
import WinterAnime from '../screens/WinterAnime';

export default createMaterialTopTabNavigator({
    SpringAnime: SpringAnime,
    WinterAnime: WinterAnime
}, {
    tabBarOptions: {
        labelStyle: {
          fontSize: 12,
        },
        tabStyle: {
          width: 100,
        },
        style: {
          backgroundColor: 'blue',
        },
    }
});