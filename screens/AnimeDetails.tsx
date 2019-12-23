import * as React from 'react';
import { View, StyleSheet, Image, ScrollView, Dimensions, Text } from 'react-native';
import { ThemeColor } from '../ThemeColor';

export interface AnimeDetailsProps {

}

export default class AnimeDetails extends React.Component<AnimeDetailsProps, any> {
  constructor(props: AnimeDetailsProps) {
    super(props);
  }

  public render() {
    return (
      <View style={styles.background}>
        <ScrollView>
            <View style={styles.header}>
                <View style={styles.bannerContainer}>
                    <Image 
                        source={{uri: 'https://s4.anilist.co/file/anilistcdn/media/anime/banner/20698-iw7Sh61XPXt3.jpg'}}
                        style={styles.banner}/>
                    <View style={styles.bannerOverlay}></View>
                    <View style={styles.animeImageCenter}>
                        <View style={styles.animeImageContainer}>
                            <Image 
                                source={{uri: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108489-y4rW0W1fvto6.jpg'}}
                                style={styles.animeImage}/>
                        </View>
                    </View>
                </View>
                <Text style={styles.title}>Yahari Ore no Seishun Love Comedy wa Machigatteiru. Kan</Text>
            </View>
        </ScrollView>
      </View>
    );
  }
}

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    background: {
        backgroundColor: ThemeColor.BackgroundColor,
        flex: 1,
    },
    header: { 
        backgroundColor: 'white',
        paddingBottom: 15,
        borderRadius: 10, 
        margin: 10,
        elevation: 6,
    },
    banner: {
        height: windowHeight * .23,
        width: '100%',
        resizeMode: "cover",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    bannerOverlay: {
        backgroundColor: 'rgba(0,0,0,.4)',
        position: "absolute",
        zIndex: 1,
        top: 0,
        left: 0,
        width: '100%',
        height: windowHeight*.23,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    bannerContainer: {
        height: windowHeight*.38,
    },
    animeImageCenter: {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 2,
        height: windowHeight*.44,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    animeImageContainer: {
        elevation: 6,
        borderRadius: 10,
    },
    animeImage: {
        height: windowHeight*.28,
        width: windowWidth*.38,
        borderRadius: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    }
});