import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ThemeColor } from '../../ThemeColor';

export interface HeaderOptionsProps {
    closeModal: () => void;
}

export default class HeaderOptions extends React.Component<HeaderOptionsProps, any> {
  constructor(props: HeaderOptionsProps) {
    super(props);
  }

  private modalButton = (props: {title: string}) => {
    return (
      <TouchableOpacity
        activeOpacity={.9}
        style={styles.closeButton}
        onPress={this.props.closeModal}>
        <Text style={styles.closeButtonText}>{props.title}</Text>
      </TouchableOpacity>
    )
  }

  public render() {
    return (
        <View style={styles.background}>
            <View style={styles.content}>
                <Text style={styles.header}>Filter</Text>
                <View style={styles.modalButtonContainer}>
                  <this.modalButton 
                    title='Close'/>
                  <this.modalButton 
                    title='Confirm'/>
                </View>
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
      closeActionContainer: {
          height: '100%',
          width: '100%',
          backgroundColor: 'gray',
      },
      closeButton: {
        backgroundColor: ThemeColor.PrimaryColor,
        paddingBottom: 5,
        paddingTop: 5,
        borderRadius: 5,
        margin: 5,
        marginBottom: 0,
        width: '50%',
      },
      closeButtonText: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
        marginRight: 3,
      },
      modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'stretch'
      }
});
