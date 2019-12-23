import { createStackNavigator } from "react-navigation-stack";
import SeasonalAnime from "../screens/SeasonalAnime";
import { ThemeColor } from "../ThemeColor";
import AnimeDetails from "../screens/AnimeDetails";

export default createStackNavigator({
    AnimeList: SeasonalAnime,
    AnimeDetails: {
        screen: AnimeDetails,
        navigationOptions: {
            title: "Anime Details",
            headerStyle: {backgroundColor: ThemeColor.PrimaryColor},
            headerTintColor: "#FFFFFF",
        }
    }
  });

// const StackNav = createAppContainer(StackNavigation);

// export default class SeasonalAnimeStackNav extends React.Component {
//   static navigationOptions = {
//           drawerLabel: 'Seasonal Anime',
//           drawerIcon: ({ tintColor = ThemeColor.SecondaryColor }) => (
//           <Image
//               source={require('../assets/images/anilist.png')}
//               style={[styles.icon, { tintColor: tintColor }]}
//           />
//       )
//     };
//     render() {
//       return (
//         <StackNav />
//       );
//     }
// }

// const styles = StyleSheet.create({
//   icon: {
//     width: 24,
//     height: 24,
//   }
// });