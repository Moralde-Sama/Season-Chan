import * as React from 'react';
import { View, TextInput, StyleSheet, Text, Button, Platform } from 'react-native';

export interface LoginFormProps {
  usernameInputHandler: (text: string) => void;
  usernameVal: string;
  guestClickHandler: () => void;
}

export class LoginForm extends React.Component<LoginFormProps, any> {
  constructor(props: LoginFormProps) {
    super(props);
  }

  public render() {
    return (
      <View style={styles.background}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="white"
          onChangeText={this.props.usernameInputHandler.bind(this)}
          value={this.props.usernameVal}
        />
        
        <TextInput
          style={[styles.input, styles.margin_top]}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={this.props.usernameInputHandler.bind(this)}
          value={this.props.usernameVal}
        />

        <View style={styles.margin_top}>
          <Button 
            title="Login"
            onPress={() => 'test'}
            
          />
        </View>
        <View style={{marginTop: 8}}>
          <Button 
            title="Guest"
            onPress={this.props.guestClickHandler}
            
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 3,
    justifyContent: "center",
    alignItems: "stretch",
    padding: 20,
    backgroundColor: "rgba(0,0,0, .3)",
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 20
  },
  input: {
    fontSize: 20,
    color: 'white',
    height: 40,
    borderBottomColor: "white",
    borderBottomWidth: 2,
    ...Platform.select({
      android: {
        fontFamily: 'Roboto',
      }
    }),
  },
  margin_top: {
    marginTop: 20
  }
});