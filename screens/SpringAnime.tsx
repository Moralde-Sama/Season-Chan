import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface SpringAnimeProps {
}

export default class SpringAnime extends React.Component<SpringAnimeProps, any> {

  constructor(props: SpringAnimeProps) {
    super(props);
  }

  public render() {
    return (
      <View>
         <Text>SpringAnime Component</Text>
      </View>
    );
  }
}
