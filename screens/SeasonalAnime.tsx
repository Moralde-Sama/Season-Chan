import * as React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { NavigationDrawerProp } from 'react-navigation-drawer';
import { ThemeColor } from '../ThemeColor';
import AnimeCardModal, { AnimeModalOptions } from '../components/SeasonalAnime/AnimeCardModal';
import AnimeCardItem from '../components/SeasonalAnime/AnimeCardItem';
import Icon from 'react-native-vector-icons/Ionicons';
import AnimeCard from '../components/SeasonalAnime/AnimeCard';

export interface SeasonalProps {
    navigation: NavigationDrawerProp
}

export interface SeasonalState {
  modalVisible: boolean;
  animeModalOptions: AnimeModalOptions;
}


export default class SeasonalAnime extends React.Component<SeasonalProps, SeasonalState> {
  //   static navigationOptions = {
  //       drawerLabel: 'Seasonal Anime',
  //       drawerIcon: ({ tintColor = ThemeColor.SecondaryColor }) => (
  //       <Image
  //           source={require('../assets/images/anilist.png')}
  //           style={[styles.icon, { tintColor: tintColor }]}
  //       />
  //   )
  // };
  static navigationOptions = ({navigation}: any) => {
    return {
      title:  navigation.getParam('Title', 'Default Title'),
      headerStyle: {backgroundColor: ThemeColor.PrimaryColor},
      headerTintColor: "#FFFFFF",
      headerLeft: <Icon name='md-menu' size={35} color='white' style={{marginLeft: 20}} 
        onPress={navigation.openDrawer} />
    }
  }
  constructor(props: SeasonalProps) {
    super(props);
    this.state = {
      modalVisible: false,
      animeModalOptions: {
        showComponent: "MoreInfo",
        animationType: "fade"
      }
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({
      Title: 'Winter 2020'
    })
  }

  private closeModalHandler = () => {
    this.setAnimeCardOptions(false);
  }

  private moreInfoPressHandler = () => {
    this.setAnimeCardOptions(true, {
      animationType: "fade",
      showComponent: "MoreInfo"
    });
  }

  private cardActionPressHandler = () => {
    this.setAnimeCardOptions(true, {
      animationType: "slide",
      showComponent: "Actions"
    });
  }

  private setAnimeCardOptions = (visible: boolean, modalOptions?: AnimeModalOptions) => {
    this.setState(() => ({
      modalVisible: visible,
      animeModalOptions: {
        ...modalOptions ?? {
          animationType: 'fade',
          showComponent: 'none'
        }
      }
    }));
  }

  public render() {
    return (
      <View>
        <View style={styles.container}>
        <FlatList 
          data={[
            {key: '1'},
            {key: '2'},
            {key: '3'}
          ]}
          renderItem={({item, index}) => {
            return (
              <AnimeCardItem 
                index={index}
                length={3}
                moreInfoPressHandler={this.moreInfoPressHandler}
                cardActionsPressHandler={this.cardActionPressHandler}
                navigation={this.props.navigation} />
            )
           }} />
        </View>
        <AnimeCardModal
          modalVisible={this.state.modalVisible}
          closeModalHandler={this.closeModalHandler}
          animeModalOptions={this.state.animeModalOptions}
          />
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
    container: {
      height: '100%',
    }
});
