import * as React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { ThemeColor } from '../../ThemeColor';
import Icon from 'react-native-vector-icons/Ionicons';

export interface AnimeCardProps {
  onPressMoreInfo: () => void;
}

export default class AnimeCard extends React.Component<AnimeCardProps, any> {
  constructor(props: AnimeCardProps) {
    super(props);
  }

  public render() {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108489-y4rW0W1fvto6.jpg'}}
          style={styles.imageBG}/>
        <View 
          style={styles.ranking}>
          <Icon name={'md-heart-empty'} size={25} color={'red'} />
          <Text style={styles.rankingText}>#1</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Oregairu Season 2</Text>
          <Text style={styles.studio}>Feel</Text>
          <TouchableOpacity 
            onPress={this.props.onPressMoreInfo}
            style={styles.more}>
            <Icon name={'md-more'} size={35} color={"white"} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: ThemeColor.PrimaryColor,
    borderRadius: 10,
    width: '48%',
    height: 230,
    marginBottom: 10,
    elevation: 6
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
  more: {
    position: "absolute",
    top: "30%",
    right: 10,
  },
  ranking: {
    position: "absolute",
    top: 0,
    left: 0,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,.3)',
    borderBottomRightRadius: 10,
    padding: 5,
  },
  rankingText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 2,
    marginTop: 1
  }
});
