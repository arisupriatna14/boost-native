import React, { Component } from 'react';
import { View, WebView, ProgressBarAndroid } from 'react-native'

export default class Notification extends Component {
  static navigationOptions = {
    title: "Notification"
  }

  state = {
    url: ''
  }

  componentDidMount() {
    const { navigation } = this.props
    const url = navigation.getParam('url', 'NO_ID')
    this.setState({url: url})
    console.log('data props from Home =>>', url)
  }

  render() {
    return(
      <WebView
        source={{uri: this.state.url }}
      />
    )
  }
}
