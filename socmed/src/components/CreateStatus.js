/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../styles/styles';

class CreateStatus extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      name: 'Muhammad Rizqi',
      status: '',
      loved: false,
    };
  }
  render() {
    return (
      <View style={styles.card}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../assets/icons/round-account-button-with-user-inside.png')}
            style={styles.profileImage}
          />
          <TextInput
            multiline={true}
            placeholder="Apa yang anda pikirkan ?"
            style={[styles.input, {maxHeight: 100}]}
            placeholderTextColor="#4b4d5a"
            onChangeText={(text) => this.setState({status: text})}
          />
        </View>
        <View style={styles.statusCommand}>
          <Text style={[styles.textWhite, {flex: 1}]}>Teman dari teman</Text>
          <TouchableOpacity
            style={styles.buttonSend}
            onPress={() => this.props.onSubmit(this.state)}>
            <Text style={styles.buttonText}>Kirim</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default CreateStatus;
