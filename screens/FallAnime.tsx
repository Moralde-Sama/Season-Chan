import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface FallAnimeProps {
}

export interface FallAnimeState {
}

export default class FallAnime extends React.Component<FallAnimeProps, FallAnimeState> {
  constructor(props: FallAnimeProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View>
         <Text>FallAnime Component</Text>
      </View>
    );
  }
}
