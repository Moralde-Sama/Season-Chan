import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationDrawerProp } from 'react-navigation-drawer';

export interface SpringAnimeProps {
  navigation: NavigationDrawerProp
}

export default class SpringAnime extends React.Component<SpringAnimeProps, any> {

  constructor(props: SpringAnimeProps) {
    super(props);
  }

  componentDidMount() {
    const parent_navigator = this.props.navigation.dangerouslyGetParent();
    parent_navigator?.setParams({
      Title: 'Spring 2020',
      headerFilter: () => {}
    })
  }

  public render() {
    return (
      <View>
         <Text>SpringAnime Component</Text>
      </View>
    );
  }
}
