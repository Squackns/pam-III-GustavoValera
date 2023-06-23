import React, { Component } from 'react'
import { ImageBackground } from 'react-native';
import { StyleSheet, View, Text, ScrollView, TextInput } from 'react-native';

const Pokemon = () => {

  return (
    <ScrollView>
      <View>
        <ImageBackground source={require('./Siles.png')} style={styles.imageBackground}>
        <Text
          style={{
            fontSize: 45,
            alignSelf: "center",
            color: "cyan",
          }}
        >
          Berried Delight
        </Text>

        <Text
          style={{
            fontSize: 32,
            alignSelf: "right",
            color: "dark-grey",
          }}
        >
          Login
        </Text>
      <TextInput
        style={{
          height: 30,
          borderColor: 'gray',
          borderWidth: 1, 
          padding: 5,
          margin: 15,
        }}
        defaultValue="I am the storm that is approaching"
      />
        <Text
          style={{
            fontSize: 32,
            alignSelf: "right",
            color: "dark-grey",
          }}
        >
          Senha
        </Text>
      <TextInput
        style={{
          height: 30,
          borderColor: 'gray',
          borderWidth: 1, 
          padding: 5,
          margin: 15,
        }}
        defaultValue="I am the storm that is approaching"
      />

      </ImageBackground>
      </View>
    </ScrollView>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    imageBackground: {
      flex: 1,
      resizeMode: "full",
    },
  });
export default Pokemon;