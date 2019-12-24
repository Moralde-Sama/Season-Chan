import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export interface AnimeCardActionsProps {
    closeModal: () => void;
}

export interface AnimeCardActionsState {
}

export default class AnimeCardActions extends React.Component<AnimeCardActionsProps, AnimeCardActionsState> {
  constructor(props: AnimeCardActionsProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
        <View style={styles.background}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={this.props.closeModal.bind(this)}>
                <View style={styles.content}>
                </View>
            </TouchableOpacity>
            <View style={styles.actionSheetContainer}>

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
    content: {
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent',
    },
    actionSheetContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 250,
        width: '100%',
        backgroundColor: 'white',
    }
});
