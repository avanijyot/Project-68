import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';

export default class facebook extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text> Facebook </Text>
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