import * as React from 'react';
import { View, StyleSheet, FlatList, Alert, TouchableOpacity, SectionList, Text } from 'react-native';
import { NavigationDrawerProp } from 'react-navigation-drawer';
import { ThemeColor } from '../ThemeColor';
import AnimeCardModal, { AnimeModalOptions } from '../components/SeasonalAnime/AnimeCardModal';
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
  static HeaderButtons = (props: {onPress: () => void}) => {
    return (
      <View style={styles.headerButtonsContainer}>
        <TouchableOpacity
          activeOpacity={.5}
          onPress={props.onPress}
          style={{marginRight: 15}}>
          <Icon name='md-calendar' size={25} color='white' />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={.5}
          onPress={props.onPress}>
          <Icon name='md-funnel' size={25} color='white' />
        </TouchableOpacity>
      </View>
    )
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
    const parent_navigator = this.props.navigation.dangerouslyGetParent();
    parent_navigator?.setParams({
      Title: 'Winter 2020',
      headerFilter: this.headerButtonPressHandler
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

  private headerButtonPressHandler = () => {
    this.setAnimeCardOptions(true, {
      animationType: "fade",
      showComponent: "HeaderOptions"
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
          {/* <FlatList 
            data={[
              {key: '1'},
              {key: '2'},
              {key: '3'}
            ]}
            renderItem={({item}) => {
              return (
                <AnimeCard 
                  onPressActions={this.cardActionPressHandler}
                  onPressMoreInfo={this.moreInfoPressHandler}
                  navigation={this.props.navigation}/>
              )
            }}
            horizontal={false}
            numColumns={2} /> */}
            <SectionList 
              sections={[{title: 'TV', data: [{id: 1, data: [
                {key: '1'},
                {key: '2'},
                {key: '3'},
                {key: '4'},
                {key: '5'}
              ]}]},
              {title: 'TV-Short', data: [{id: 1, data: [
                {key: '1'},
                {key: '2'},
                {key: '3'},
                {key: '4'},
                {key: '5'}
              ]}]}]}
              keyExtractor={(item: any, index: number) => item.id + index}
              removeClippedSubviews={true}
              renderItem={({item}) => (
                <FlatList 
                  data={item.data}
                  renderItem={({item}) => {
                    return (
                      <AnimeCard 
                        onPressActions={this.cardActionPressHandler}
                        onPressMoreInfo={this.moreInfoPressHandler}
                        navigation={this.props.navigation}/>
                    )
                  }}
                  horizontal={false}
                  numColumns={2} />
              )}
              renderSectionHeader={({ section: { title } }) => (
                <View style={styles.sectionContainer}>
                  <Text style={styles.sectionTitle}>{title}</Text>
                </View>
              )}/>
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
    },
    headerButtonsContainer: {
      flexDirection: 'row',
      marginRight: 15,
    },
    sectionContainer: {
      padding: 5,
      backgroundColor: ThemeColor.PrimaryColor,
      margin: 5,
      marginBottom: 5,
      borderRadius: 10,
      elevation: 5,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center'
    }
});
