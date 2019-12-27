import * as React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, ScrollView, FlatList } from 'react-native';
import { ThemeColor } from '../../ThemeColor';

export interface AnimeCardMoreInfoProps {
  data: any;
  closeModal: () => void;
}

export default class AnimeCardMoreInfo extends React.Component<AnimeCardMoreInfoProps, any> {
  constructor(props: AnimeCardMoreInfoProps) {
    super(props);
  }

  public render() {
    return (
      <View style={styles.background}>
        <View style={styles.content}>
          <Text style={styles.header}>More Info</Text>
          <ScrollView
            style={{maxHeight: '75%'}}>
            <Text style={styles.description}>
              {this.props.data.description}
            </Text>
          </ScrollView>
          <View style={styles.genreContainer}>
            <FlatList 
              data={this.props.data.genres}
              horizontal={true}
              keyExtractor={(item, index) => `${item}${index}`}
              renderItem={({item}) => (
                <Text style={styles.genreChip}>{`${item}`}</Text>
              )}/>
          </View>
          <TouchableHighlight
            style={styles.closeButton}
            onPress={this.props.closeModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.5)',
      },
      content: {
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 5,
        padding: 10,
        width: '80%',
      },
      header: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      closeButton: {
        backgroundColor: ThemeColor.PrimaryColor,
        paddingBottom: 5,
        paddingTop: 3,
        marginLeft: '25%',
        marginRight: '25%',
        borderRadius: 7,
        marginTop: 5,
      },
      closeButtonText: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        marginRight: 3,
      },
      description: {
        fontSize: 15,
        margin: 10,
        textAlign: 'center',
      },
      genreContainer: {
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
      },
      genreChip: {
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: ThemeColor.SecondaryColor,
        fontSize: 15,
        borderRadius: 50,
        margin: 3,
        color: 'white',
        fontWeight: 'bold',
      }
});
