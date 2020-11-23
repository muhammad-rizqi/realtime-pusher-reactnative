/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles/styles';

const Status = (props) => {
  const [love, setLove] = useState(props.love);
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.row}>
          <Image source={props.profileImage} style={styles.profileImage} />
          <View style={{marginLeft: 8}}>
            <Text style={styles.statusName}>{props.name}</Text>
            <Text style={styles.textWhite}>1 jam yang lalu</Text>
          </View>
        </View>
        <Text style={[styles.textWhite, {marginVertical: 8}]}>
          {props.status}
        </Text>
        <View style={styles.statusButtonGroup}>
          <TouchableOpacity styles={{flex: 1}} onPress={() => setLove(!love)}>
            <Image
              source={
                love
                  ? require('../assets/icons/favorite-heart-button.png')
                  : require('../assets/icons/favorite-heart-outline-button.png')
              }
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity styles={{flex: 1}}>
            <Image
              source={require('../assets/icons/add-comment-button.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity styles={{flex: 1}}>
            <Image
              source={require('../assets/icons/forward-arrow.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Status;
