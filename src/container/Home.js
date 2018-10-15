import React, { Component } from 'react';
import { View, Button, TouchableOpacity, Text, StyleSheet } from 'react-native';
import data from '../../dataDummy'

export default class Home extends Component {
  static navigationOptions = {
    title: "Notification",
    headerStyle: {
      backgroundColor: "#f44336"
    },
    headerTitleStyle: {
      color: "#FFF",
      fontWeight: 'bold',
    }
  }

  render() {
    return(
      <View>
        {
          data.map((data, index) => {
            return(
              <TouchableOpacity
                style={styles.notif}
                key={index}
                onPress={() => this.props.navigation.navigate('Notif', {url: data.url})}
              >
                <Text>{data.title}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  notif: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  }
})
