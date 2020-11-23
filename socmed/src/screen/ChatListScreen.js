import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import Chat from '../components/ChatContact';
import {styles} from '../styles/styles';

const ChatListScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#212227" />
      <View style={styles.headerBar}>
        <Image
          source={require('../assets/icons/searching-magnifying-glass.png')}
          style={styles.icon}
        />
        <TextInput
          placeholderTextColor="#4b4d5a"
          placeholder="Search"
          style={styles.input}
        />
      </View>
      <ScrollView style={styles.pageContainer}>
        <Chat />
        <Chat />
        <Chat />
        <ActivityIndicator color="grey" size="large" />
      </ScrollView>
    </View>
  );
};

export default ChatListScreen;
