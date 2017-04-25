import React, { Component } from 'react'
import {
  Button,
  Text,
  View,
} from 'react-native'

class ChatScreen extends Component {
  static navigationOptions = {
    title: (navigation) => `Chat with ${navigation.state.params.user.name}`,
    header: (navigation) => ({
      right: <Button
        color="green"
        title="SHOUT"
        onPress={() => alert('wubbalubba dub dub!')}
      />,
      left:  <Button
        color="yellow"
        title="SCRAM"
        onPress={() => navigation.goBack(null)}
      />,
      titleStyle: {
        color: 'white',
      },
      style: {
        backgroundColor: '#FF00FF',
        borderWidth: 5,
        borderColor: navigation.state.params.color || '#00FFFF',
        shadowRadius: 10,
        shadowOpacity: 1,
        shadowOffset: {
          width: 0,
          height: 5,
        }
      },
    })
  }

  componentDidMount(){
    const { setParams } = this.props.navigation
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'cyan']
    let i = 0
    setInterval(() => {
      if (i >= colors.length) i = 0
      const color = colors[i++]
      setParams({color})
    }, 100)
  }


  render() {
    const { params } = this.props.navigation.state
    return (
      <View>
        <Button title="Account Details" onPress={() => this.props.navigation.navigate('Account', {user: this.props.navigation.state.params.user})} />
      </View>
    )
  }
}

export default ChatScreen
