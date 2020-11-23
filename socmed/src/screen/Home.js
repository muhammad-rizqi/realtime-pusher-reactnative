import React, {Component} from 'react';
import {
  Image,
  View,
  TextInput,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import CreateStatus from '../components/CreateStatus';
import Status from '../components/Status';
import {styles} from '../styles/styles';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          profileImage: 'https://picsum.photos/200/200',
          name: 'Muhammad Rizqi',
          status: 'Recusandae aut aut sit minima et ullam quis.',
          loved: false,
        },
        {
          id: 2,
          profileImage: 'https://picsum.photos/200/200',
          name: 'Gamblang Pradipta',
          status: 'Recusandae aut aut sit minima et ullam quis.',
          loved: false,
        },
      ],
    };
  }
  render() {
    const rest = this.state.data;
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
          <CreateStatus
            onSubmit={(data) => this.setState({data: rest.concat(data)})}
          />
          {this.state.data.map((item, index) => (
            <Status
              key={item.id}
              name={item.name}
              profileImage={{uri: item.profileImage}}
              status={item.status}
              love={item.loved}
            />
          ))}
          <ActivityIndicator color="grey" size="large" />
        </ScrollView>
      </View>
    );
  }
}
