import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../styles/styles';
import ChatItem from '../components/ChatItem';
import {Component} from 'react';

//npm install pusher-js @react-native-community/netinfo
import Pusher from 'pusher-js/react-native';


class ChatScreen extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      message: '',
      chatMessages: [],
    };
  }

  componentDidMount() {
// key dari backend   
     var pusher = new Pusher('5d9a85133f31dbf94b8a', {
      cluster: 'ap1',
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', (data) => {
      this.setState({chatMessages: data.data});
    });
  }

  sendMessage() {



    const username = this.props.route.params.username;
    var dataToSend = {
      username: username,
      message: this.state.message,
    };

    //making data to send on server
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    //POST request
/////////////////////// sesuaikan dengan IP server dan alamatnya
// kaya ngirim post API biasa

    fetch('http://192.168.1.43:3000/message', {
      method: 'POST', //Request Type
      body: formBody, //post body
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  }

  render() {
    console.log(this.state.chatMessages);
    return (
      <View style={styles.container}>
        <View style={styles.appBar}>
          <Image
            source={require('../assets/icons/go-back-left-arrow.png')}
            style={styles.icon}
          />
          <TouchableOpacity style={styles.appBarText}>
            <Text style={styles.appBarTitle}>Hello</Text>
            <Text style={styles.appBarDesc}>Online</Text>
          </TouchableOpacity>
        </View>
        <StatusBar backgroundColor="#212227" />
        <ScrollView
          ref={(ref) => {
            this.scrollView = ref;
          }}
          onContentSizeChange={() =>
            this.scrollView.scrollToEnd({animated: false})
          }
          style={[styles.pageContainer, {flex: 1}]}>
          {this.state.chatMessages.map((msg, index) => (
            <ChatItem
              key={index}
              outgoing={msg.username === this.props.route.params.username}
              message={msg.message}
              time="12.00"
            />
          ))}
        </ScrollView>
        <View style={styles.composeMessage}>
          <TextInput
            placeholderTextColor="#4b4d5a"
            placeholder="Type a message ..."
            value={this.state.message}
            style={styles.input}
            onChangeText={(messageText) =>
              this.setState({message: messageText})
            }
            multiline={true}
          />
          <TouchableOpacity onPress={() => this.sendMessage()}>
            <Image
              source={require('../assets/icons/send-button.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default ChatScreen;
