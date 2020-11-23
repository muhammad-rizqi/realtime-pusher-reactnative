/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import {styles} from '../styles/styles';

export default class Register extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#16161a" />
        <View style={styles.form}>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.textWhite}>Email</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email"
              style={styles.inputText}
              placeholderTextColor="#7b7d8a"
            />
          </View>
          <Text style={styles.textWhite}>Username</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Username"
              style={styles.inputText}
              placeholderTextColor="#7b7d8a"
            />
          </View>
          <Text style={styles.textWhite}>Password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              style={styles.inputText}
              secureTextEntry={true}
              placeholderTextColor="#7b7d8a"
            />
          </View>
          <Text style={styles.textWhite}>Confirm Password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Confirm Password"
              style={styles.inputText}
              secureTextEntry={true}
              placeholderTextColor="#7b7d8a"
            />
          </View>
          <Text style={styles.textWhite}>
            I have accept with term conditions
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>

          <View style={styles.center}>
            <Text style={styles.textWhite}>Already have an account?</Text>
            <Text
              style={[styles.textWhite, {fontWeight: 'bold'}]}
              onPress={() => this.props.navigation.navigate('Login')}>
              Login
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
