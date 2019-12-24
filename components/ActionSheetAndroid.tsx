import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ListView, FlatList, TouchableNativeFeedback } from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';
import { ThemeColor } from '../ThemeColor';


export interface ActionSheetAndroidListProps {
    key: string,
    title: string;
    icon: () => JSX.Element;
    onPress: () => void;
}

export interface ActionSheetAndroidProps {
    title: string;
    listItem: ActionSheetAndroidListProps[];
    closeModal: () => void;
}

export default class ActionSheetAndroid extends React.Component<ActionSheetAndroidProps, any> {
  constructor(props: ActionSheetAndroidProps) {
    super(props);
  }

  private ActionSheetTitle = (props: {title: string}) => {
      return (
          <View style={styles.titleContainer}>
              <Text
                style={styles.title}>
                    {props.title}
              </Text>
          </View>
      )
  }

  private listItemPressHandler = (onPress: () => void) => {
      onPress();
      this.props.closeModal();
  }

  private ActionSheetList = (props: {listItemProps: ActionSheetAndroidListProps[]}) => {
      return (
        <FlatList 
            data={props.listItemProps}
            renderItem={(props) => {
                return (
                    <TouchableNativeFeedback
                        onPress={() => this.listItemPressHandler(props.item.onPress)}
                        background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={styles.listItemContainer}>
                            <props.item.icon />
                            <Text style={styles.listItemTitle}>{props.item.title}</Text>
                        </View>
                    </TouchableNativeFeedback>
                )
            }}/>
      )
  }

  public render() {
    return (
        <View style={styles.background}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={this.props.closeModal.bind(this)}>
                <View style={styles.closeModalContainer}>
                </View>
            </TouchableOpacity>
            <View style={styles.actionSheetContainer}>
                <this.ActionSheetTitle 
                    title="What would you like to do?"/>
                <this.ActionSheetList 
                    listItemProps={this.props.listItem}/>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'transparent',
        flex: 1,
    },
    closeModalContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent',
    },
    actionSheetContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'white',
        padding: 10,
    },
    titleContainer: {
        padding: 10,
    },
    title: {
        fontSize: 20,
        textAlign: 'center'
    },
    listItemContainer: {
        flexDirection: 'row',
        padding: 10,
    },
    listItemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    }
});