import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';

export default class insta extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text> Instagram </Text>
            </View>
          )
        }
    }

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 100,
    },
  });