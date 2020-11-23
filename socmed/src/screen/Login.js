import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import {styles} from '../styles/styles';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#16161a" />
        <ScrollView style={styles.form}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.companyImage}
          />
          <Text style={styles.title}>Welcome</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email"
              style={styles.inputText}
              placeholderTextColor="#7b7d8a"
              onChangeText={(email) => this.setState({username: email})}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              style={styles.inputText}
              secureTextEntry={true}
              placeholderTextColor="#7b7d8a"
            />
          </View>
          <Text style={styles.textWhite}>Forgot your password?</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              this.props.navigation.navigate('Chat', {
                username: this.state.username,
              })
            }>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.center}>
            <Text style={styles.textWhite}>Don't have an account?</Text>
            <Text
              style={[styles.textWhite, {fontWeight: 'bold'}]}
              onPress={() => this.props.navigation.navigate('Register')}>
              Signup
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
