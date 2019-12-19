import * as React from 'react';
import { View, StyleSheet, ImageBackground, Text, Platform, Image } from 'react-native';
import { LoginForm } from '../components/login/LoginForm';
import { createAppContainer, NavigationScreenProp } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import App from '../App';

export interface LoginProps {
  navigation: NavigationScreenProp<any,  any>;
}

export interface LoginState {
  username: string;
}

class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      username: ''
    }
  }

  private usernameInputHandler = (text: string) => {
    this.setState(() => ({
      username: text
    }));
  }

  private guestClickHandler = () => {
    this.props.navigation.navigate('Hermes');
  }

  private PoweredByAL: React.SFC = () => {
    return (
      <View style={styles.container_powered_by}>
        <Text style={styles.text_powered_by}>
          Powered by
          <Image style={styles.anilist_logo} source={require('../assets/images/anilist.png')} />
        </Text>
        
      </View>
    );
  } 
 
  public render() {
    return (
      <ImageBackground 
        source={{uri: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108489-y4rW0W1fvto6.jpg'}} 
        style={styles.image_background}
      >
        <View style={styles.bg_overlay}>
          <View style={{flex: 2, justifyContent: "center", alignItems: "center"}}>
            <Image style={styles.season_chan_logo} source={require('../assets/images/Season-ChanLogo.png')} />
          </View>
          <LoginForm 
            usernameInputHandler={this.usernameInputHandler} 
            usernameVal={this.state.username}
            guestClickHandler={this.guestClickHandler} />
          <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <this.PoweredByAL />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const Navigator = createStackNavigator({
  Home: {
    screen: Login,
    navigationOptions: {
      headerShown: false
    }
  },
  Hermes: {
    screen: App,
    navigationOptions: {
      headerShown: false
    }
  }
});

export default createAppContainer(Navigator);

const styles = StyleSheet.create({
    image_background: {
      height: '100%',
      width: '100%',
      backgroundColor: '#292D3E',
      
    },
    bg_overlay: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, .1)'
    },
    container_powered_by: {
      borderRadius: 10,
      width: 200,
      paddingBottom: 10,
      backgroundColor: 'rgba(0, 0, 0, .3)'
    },
    text_powered_by: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      ...Platform.select({
        android: {
          fontFamily: 'Roboto',
        }
      }),
    },
    season_chan_logo: {
      width: 180,
      height: 180,
    },
    anilist_logo: {
      width: 30,
      height: 30
    }
});