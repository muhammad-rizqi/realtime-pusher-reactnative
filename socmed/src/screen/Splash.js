import React, {Component} from 'react';
import {View, Image, StatusBar, ActivityIndicator} from 'react-native';
import AppStack from '../routes/AppStack';
import {styles} from '../styles/styles';

const SplashPage = () => {
  return (
    <View style={styles.centerContainer}>
      <StatusBar backgroundColor="#16161a" />
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.companyImage}
      />
      <ActivityIndicator color="grey" size="large" />
    </View>
  );
};

export default class Splash extends Component {
  constructor() {
    super();
    this.state = {
      splash: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({splash: false});
    }, 3000);
  }

  render() {
    return this.state.splash ? <SplashPage /> : <AppStack />;
  }
}
