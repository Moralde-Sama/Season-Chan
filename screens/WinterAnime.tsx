import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface WinterAnimeProps {
}

export default class WinterAnime extends React.Component<WinterAnimeProps, any> {
  constructor(props: WinterAnimeProps) {
    super(props);
  }

  public render() {
    return (
      <View>
         <Text>WinterAnime Component</Text>
      </View>
    );
  }
}
