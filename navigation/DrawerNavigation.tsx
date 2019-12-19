import { createDrawerNavigator } from "react-navigation-drawer";
import SeasonalAnime from "../screens/SeasonalAnime";
import { createAppContainer } from "react-navigation";
import { ThemeColor } from "../ThemeColor";

const DrawerNavigator = createDrawerNavigator(
    {
      Home: SeasonalAnime
    },
    {
      drawerBackgroundColor: 'rgba(255,255,255,.9)',
      contentOptions: {
        activeTintColor: '#fff',
        activeBackgroundColor: ThemeColor.SecondaryColor,
      },
    }
  );

  export default createAppContainer(DrawerNavigator);