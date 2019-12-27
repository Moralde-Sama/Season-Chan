import * as React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationDrawerProp } from 'react-navigation-drawer';
import FastImage from 'react-native-fast-image'
import { ThemeColor } from '../../ThemeColor';

export interface AnimeCardData {
  id: number,
  rankings: {rank: number}[];
  title: {userPreferred: string};
  description: string;
  type: string;
  status: string;
  format: string;
  genres: string[];
  coverImage: {large: string};
  nextAiringEpisode: {id: number};
  studios: {nodes: {name: string[]}};
}

export interface AnimeCardProps {
  data: AnimeCardData | any;
  onPressMoreInfo: (data: any) => void;
  onPressActions: () => void;
  navigation: NavigationDrawerProp;
}

export interface AnimeCardState {
  showImageLoadingIndicator: boolean;
}

export default class AnimeCard extends React.Component<AnimeCardProps, AnimeCardState> {

  constructor(props: AnimeCardProps) {
    super(props);
    this.state = {
      showImageLoadingIndicator: true
    }
  }

  private Ranking = (props: {rankings: {rank: number}[]}) => {
    if (props.rankings.length > 1) {
      return (
        <View 
          style={styles.ranking}>
          <Icon name={'md-heart-empty'} size={25} color={'red'} />
          <Text style={styles.rankingText}>#{props.rankings[1].rank}</Text>
        </View>
      )
    }
    else {
      return null;
    }
  }

  private ImageLoadingIndicator = () => {
    if (this.state.showImageLoadingIndicator) {
      return (
        <View style={styles.imageActContainer}>
          <ActivityIndicator
            size="large"
            color='white'
            animating={true}/>
        </View>
      )
    }
    else
      return null;
  }

  private imageLoaded = () => {
    this.setState(() => ({
      showImageLoadingIndicator: false
    }))
  }

  public render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {this.props.navigation.navigate('AnimeDetails')}}
          activeOpacity={.8}>
          <View>
            <this.ImageLoadingIndicator />
            <FastImage
              style={{ width: '100%', height: '100%', borderRadius: 10, }}
              source={{
                uri: this.props.data.coverImage.large,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.cover}
              onLoad={this.imageLoaded} />
            <this.Ranking rankings={this.props.data.rankings} />
            <View
              style={styles.moreInfoContainer}>
              <TouchableOpacity
                onPress={() => this.props.onPressMoreInfo(this.props.data)}
                style={styles.moreInfo}>
                <Icon name='md-help' size={20} color='white' />
              </TouchableOpacity>
            </View>
            <View style={styles.content}>
              <Text style={styles.title}>{this.props.data.title.userPreferred}</Text>
              <Text style={styles.studio}>{this.props.data.studios.nodes[0].name}</Text>
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
    backgroundColor: ThemeColor.PrimaryColor,
    borderRadius: 10,
    width: windowWidth*.46,
    height: windowHeight*.42,
    elevation: 6,
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
    fontSize: windowWidth*.04,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    marginRight: 13,
  },
  studio: {
    fontSize: windowWidth*.038,
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
  },
  imageActContainer: {
    position: "absolute",
    zIndex: 3,
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
