import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles/styles';

const Chat = (props) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.row}>
        <Image
          source={{uri: 'https://picsum.photos/200/200'}}
          style={[styles.profileImage]}
        />
        <View style={{marginLeft: 8, flex: 1}}>
          <Text
            style={styles.statusName}
            ellipsizeMode="tail"
            numberOfLines={1}>
            UvuvuevueonyetenyuewnyuewugwemubwemOSAS
          </Text>
          <Text style={styles.textWhite} ellipsizeMode="tail" numberOfLines={1}>
            Tolong... tolong.. ada serigala disini.. tolong.. tolong...{' '}
          </Text>
        </View>
        <Text style={styles.textWhite}>1h ago</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Chat;
