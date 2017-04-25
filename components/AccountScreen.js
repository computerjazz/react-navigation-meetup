import React, { Component } from 'react'
import {
  Button,
  Text,
  View,
} from 'react-native'

class AccountScreen extends Component {
  static navigationOptions = {
    title: ({state}) => `${state.params.user.name}'s Account`
  }

  render() {
    const {navigation } = this.props
    return (
      <View>
        <Text>{`Name: ${navigation.state.params.user.name}`}</Text>
        <Text>{`Phone: ${navigation.state.params.user.phone}`}</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    )
  }
}

export default AccountScreen
