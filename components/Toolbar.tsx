import * as React from 'react';
import { View, StyleSheet, Text, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
import { ThemeColor } from '../ThemeColor';
import Icon from 'react-native-vector-icons/Ionicons';

export type ToolbarStyle = {
    container?: StyleProp<ViewStyle>;
    text?: StyleProp<ViewStyle>;
}
export interface ToolbarProps {
    title: string;
    style?: ToolbarStyle;
    menuHandler: () => void;
}

export default class Toolbar extends React.Component<ToolbarProps, any> {
  constructor(props: ToolbarProps) {
    super(props);
  }

  private styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: ThemeColor.PrimaryColor,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 12,
        elevation: 3,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    title: {
        fontSize: 23,
        color: 'white',
        marginTop: 2,
        fontWeight: "bold",
        marginLeft: 13,
    }
  });

  public render() {
    return (
      <View style={this.props.style?.container ?? this.styles.container}>
        <TouchableOpacity onPress={this.props.menuHandler}>
            <Icon name={'md-menu'} size={35} color={"white"} />
        </TouchableOpacity>
        <Text style={this.props.style?.text ?? this.styles.title}>
            {this.props.title}
        </Text>
      </View>
    );
  }
}
