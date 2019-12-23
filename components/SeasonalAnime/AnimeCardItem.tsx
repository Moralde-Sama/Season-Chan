import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { NavigationDrawerProp } from 'react-navigation-drawer';
import AnimeCard from './AnimeCard';

export interface AnimeCardItemProps {
    index: number;
    length: number;
    moreInfoPressHandler: () => void;
    navigation: NavigationDrawerProp
    
}

export default class AnimeCardItem extends React.Component<AnimeCardItemProps, any> {
  constructor(props: AnimeCardItemProps) {
    super(props);
  }

  public render() {
    const containerStyle = () => {
        if (this.props.index == 0)
            return styles.firstItem;
        else if (this.props.length == (this.props.index + 1))
            return styles.lastItem;
        else
            return styles.contentContainer;
    }
    return (
        <View style={containerStyle()}>
            <AnimeCard
                onPressMoreInfo={this.props.moreInfoPressHandler}
                navigation={this.props.navigation} />
            <AnimeCard
                onPressMoreInfo={this.props.moreInfoPressHandler}
                navigation={this.props.navigation} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      firstItem: {
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        
      },
      lastItem: {
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }
});
