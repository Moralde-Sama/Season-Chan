import * as React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationDrawerProp } from 'react-navigation-drawer';

export interface AnimeCardProps {
  onPressMoreInfo: () => void;
  onPressActions: () => void;
  navigation: NavigationDrawerProp;
}

export default class AnimeCard extends React.Component<AnimeCardProps, any> {

  constructor(props: AnimeCardProps) {
    super(props);
  }

  public render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {this.props.navigation.navigate('AnimeDetails')}}
          activeOpacity={.8}>
          <View>
            <Image
              source={{uri: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108489-y4rW0W1fvto6.jpg'}}
              style={styles.imageBG}/>
            <View 
              style={styles.ranking}>
              <Icon name={'md-heart-empty'} size={25} color={'red'} />
              <Text style={styles.rankingText}>#1</Text>
            </View>
            <View
              style={styles.moreInfoContainer}>
              <TouchableOpacity
                onPress={this.props.onPressMoreInfo.bind(this)}
                style={styles.moreInfo}>
                <Icon name='md-help' size={20} color='white' />
              </TouchableOpacity>
            </View>
            <View style={styles.content}>
              <Text style={styles.title}>Oregairu Season 2</Text>
              <Text style={styles.studio}>Feel</Text>
              <TouchableOpacity 
                onPress={this.props.onPressActions.bind(this)}
                style={styles.options}>
                <Icon name='md-more' size={35} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: windowWidth*.46,
    height: windowHeight*.4,
    elevation: 5,
    margin: windowWidth*.02,
  },
  imageBG: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,.5)',
    padding: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left'
  },
  studio: {
    fontSize: 15,
    color: 'white',
    textAlign: 'left',
    marginTop: 5,
  },
  options: {
    position: "absolute",
    top: "30%",
    right: 10,
  },
  ranking: {
    position: "absolute",
    top: 0,
    left: 0,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,.4)',
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 5,
  },
  rankingText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 2,
    marginTop: 1
  },
  moreInfoContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 8,
    backgroundColor: 'rgba(0,0,0,.4)',
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  moreInfo: {
    height: '100%',
    width: '100%',
  }
});
