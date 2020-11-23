import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/styles';

const ChatItem = (props) => {
  const messageStyle = props.outgoing
    ? styles.outgoingMessage
    : styles.incomingMessage;
  const textStyle = props.outgoing ? {color: '#fff'} : styles.textWhite;
  return (
    <View style={[messageStyle, styles.messageItem]}>
      <Text style={textStyle}>{props.message}</Text>
      <Text style={[styles.messageTime, textStyle]}>{props.time}</Text>
    </View>
  );
};

export default ChatItem;
