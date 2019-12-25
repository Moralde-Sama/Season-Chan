import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface SummerAnimeProps {
}

export interface SummerAnimeState {
}

export default class SummerAnime extends React.Component<SummerAnimeProps, SummerAnimeState> {
  constructor(props: SummerAnimeProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View>
         <Text>SummerAnime Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    
});
