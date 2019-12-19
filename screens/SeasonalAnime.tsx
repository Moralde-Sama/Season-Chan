import * as React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationDrawerProp } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import Toolbar from '../components/Toolbar';
import { ThemeColor } from '../ThemeColor';

export interface SeasonalProps {
    navigation: NavigationDrawerProp
}

export interface SeasonalState {
}

export default class SeasonalAnime extends React.Component<SeasonalProps, SeasonalState> {
    static navigationOptions = {
        drawerLabel: 'Seasonal Anime',
        drawerIcon: ({ tintColor = ThemeColor.SecondaryColor }) => (
        <Image
            source={require('../assets/images/anilist.png')}
            style={[styles.icon, { tintColor: tintColor }]}
        />
    )
  };
  constructor(props: SeasonalProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View>
        <Toolbar title="Hello" menuHandler={this.props.navigation.openDrawer}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    background: {
        backgroundColor: ThemeColor.BackgroundColor
    },
    icon: {
        width: 24,
        height: 24,
    },
    toolbar: {
        backgroundColor: '#2196F3',
        height: 56,
        alignSelf: 'stretch',
        textAlign: 'center',
    },
});
