import React, { Component } from 'react'
import {
  Button,
  Text,
  View,
} from 'react-native'

import { NavigationActions } from 'react-navigation'

const users = [
  {
    name: 'Rick',
    phone: '111-1111',
  },
  {
    name: 'Morty',
    phone: '222-2222',
  },
  {
    name: 'Summer',
    phone: '333-3333',
  },
  {
    name: 'Beth',
    phone: '444-4444',
  }, {
    name: 'Jerry',
    phone: '555-5555'
  }
]

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  }

  _reset = () => {
    const rick = users[0]
    const resetAction = NavigationActions.reset({
      index: 2,
      actions: [
        NavigationActions.navigate({routeName: 'Home'}),
        NavigationActions.navigate({routeName: 'Chat', params: {user: rick}}),
        NavigationActions.navigate({routeName: 'Account', params: {user: rick}})
      ]
    })
    this.props.navigation.dispatch(resetAction)
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        {users.map((user, i) => {
          return <Button
            key={i}
            onPress={() => navigate('Chat', { user })}
            title={`Chat with ${user.name}`} />
        })}
        <Button title="Go to Rick's Account Details"
          onPress={this._reset} />
      </View>
    )
  }
}

export default HomeScreen
