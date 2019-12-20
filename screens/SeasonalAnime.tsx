import * as React from 'react';
import { View, StyleSheet, Image, Text, ScrollView, SafeAreaView } from 'react-native';
import { NavigationDrawerProp } from 'react-navigation-drawer';
import Toolbar from '../components/Toolbar';
import { ThemeColor } from '../ThemeColor';
import AnimeCard from '../components/SeasonalAnime/AnimeCard';
import MoreInfo from '../components/SeasonalAnime/MoreInfo';

export interface SeasonalProps {
    navigation: NavigationDrawerProp
}

export interface SeasonalState {
  modalVisible: boolean;
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
      modalVisible: false
    }
  }

  private closeModalHandler = () => {
    this.setState(() => ({
      modalVisible: false
    }));
  }

  private moreInfoPressHandler = () => {
    this.setState(() => ({
      modalVisible: true
    }));
  }

  public render() {
    return (
      <View>
        <Toolbar title="Winter 2020" menuHandler={this.props.navigation.openDrawer}/>
        <View style={styles.container}>
          <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{padding: 10}}>
              <View style={styles.contentContainer}>
                <AnimeCard onPressMoreInfo={this.moreInfoPressHandler} />
                <AnimeCard onPressMoreInfo={this.moreInfoPressHandler} />
                <AnimeCard onPressMoreInfo={this.moreInfoPressHandler} />
                <AnimeCard onPressMoreInfo={this.moreInfoPressHandler} />
                <AnimeCard onPressMoreInfo={this.moreInfoPressHandler} />
                <AnimeCard onPressMoreInfo={this.moreInfoPressHandler} />
                <AnimeCard onPressMoreInfo={this.moreInfoPressHandler} />
                <AnimeCard onPressMoreInfo={this.moreInfoPressHandler} />
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
        <MoreInfo modalVisible={this.state.modalVisible} closeModalHandler={this.closeModalHandler} />
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
    },
    contentContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    }
});
