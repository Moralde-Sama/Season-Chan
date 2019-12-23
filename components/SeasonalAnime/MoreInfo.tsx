import * as React from 'react';
import {View, StyleSheet, Text, Modal, TouchableHighlight} from 'react-native';
import { ThemeColor } from '../../ThemeColor';

export interface MoreInfoProps {
  modalVisible: boolean;
  closeModalHandler: () => void;
}

export default class MoreInfo extends React.Component<MoreInfoProps, any> {
  constructor(props: MoreInfoProps) {
    super(props);
  }

  public render() {
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.props.modalVisible}
          onRequestClose={() => {}}>
          <View style={styles.background}>
            <View style={styles.content}>
              <Text style={styles.header}>More Info</Text>
              <Text style={styles.description}>
              It is said that "Hanako-san" lives in the girl's toilet 
              on the 3rd floor in the old school building and will grant 
              anyone a wish for a price. Yashiro Nene goes looking for "Hanako-san" 
              in the hopes for a successful love encounter, but the one that she meets 
              is completely​ different from what she imagined.
              </Text>
              <View style={styles.genreContainer}>
                <Text style={styles.genreChip}>Comedy</Text>
                <Text style={styles.genreChip}>Drama</Text>
                <Text style={styles.genreChip}>Romance</Text>
                <Text style={styles.genreChip}>Slice of life</Text>
              </View>
              <TouchableHighlight
                style={styles.closeButton}
                onPress={this.props.closeModalHandler}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
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
